import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PRODUCTS_DATA_2026, ProductItem } from './products.data';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto, file?: Express.Multer.File): Promise<Product> {
    const productData: any = {
      ...createProductDto,
    };

    if (file) {
      // Validate file size (additional check)
      if (file.size > 5 * 1024 * 1024) {
        throw new BadRequestException('File size too large. Maximum 5MB allowed.');
      }
      
      productData.imageData = file.buffer;
      productData.imageType = file.mimetype;
      productData.imageName = file.originalname;
    }

    const createdProduct = new this.productModel(productData);
    return createdProduct.save();
  }

  async findAll(): Promise<any[]> {
    // Return authentic 2026 catalog directly for 100% reliability and exact match with PDF
    return PRODUCTS_DATA_2026;
  }

  async findOne(id: string): Promise<any> {
    const item = PRODUCTS_DATA_2026.find(p => p._id === id || p.id === id || String(p.siNo) === id);
    if (item) {
      return item;
    }

    try {
      const product = await this.productModel.findById(id).select('-imageData').exec();
      if (product) {
        return product;
      }
    } catch (e) {}

    throw new NotFoundException(`Product with ID ${id} not found`);
  }

  async findOneWithImage(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto, file?: Express.Multer.File): Promise<Product> {
    const existingProduct = await this.findOneWithImage(id);

    const updateData: any = { ...updateProductDto };

    if (file) {
      // Validate file size
      if (file.size > 5 * 1024 * 1024) {
        throw new BadRequestException('File size too large. Maximum 5MB allowed.');
      }
      
      updateData.imageData = file.buffer;
      updateData.imageType = file.mimetype;
      updateData.imageName = file.originalname;
    }

    const updatedProduct = await this.productModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .select('-imageData')
      .exec();

    if (!updatedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return updatedProduct;
  }

  async remove(id: string): Promise<Product> {
    const product = await this.findOne(id);

    const deletedProduct = await this.productModel.findByIdAndDelete(id).select('-imageData').exec();

    if (!deletedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return deletedProduct;
  }

  async findByType(productType: string): Promise<any[]> {
    const matched = PRODUCTS_DATA_2026.filter(
      p => p.productType.toLowerCase() === productType.toLowerCase()
    );
    if (matched.length > 0) {
      return matched;
    }
    return this.productModel.find({ productType }).select('-imageData').exec();
  }

  async searchProducts(query: string): Promise<any[]> {
    const q = query.toLowerCase();
    const matched = PRODUCTS_DATA_2026.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.productDescription.toLowerCase().includes(q) ||
        p.productType.toLowerCase().includes(q) ||
        (p.tamilName && p.tamilName.includes(query))
    );
    if (matched.length > 0) {
      return matched;
    }

    return this.productModel
      .find({
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { productDescription: { $regex: query, $options: 'i' } },
          { productType: { $regex: query, $options: 'i' } },
        ],
      })
      .select('-imageData')
      .exec();
  }
}