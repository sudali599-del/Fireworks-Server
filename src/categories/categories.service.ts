import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';
import { Product, ProductDocument } from '../products/schemas/product.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

const DEFAULT_CATEGORIES = [
  'ONE SOUND CRACKERS',
  'FLOWER POTS',
  'GROUND CHAKKAR',
  'ROCKETS',
  'TWINKLING STAR',
  'ELECTRIC CRACKERS',
  'DELUXE CRACKERS',
  'SPECIAL GARLANDS',
  'BIJILI',
  'BOMBS',
  'PENCIL',
  'SPARKLERS',
  'FANCY FOUNTAINS',
  'MUSICAL ITEMS',
  'AERIAL FANCY',
  'AERIAL FANCY SHOTS',
  'AERIAL MULTI SHOTS FANCY',
  'SPECIAL FANCY FOUNTAIN',
  'SPECIAL FOUNTAINS',
  'NEW ARRIVAL FOUNTAINS',
  'CHILDRENS FANCY',
  'CAPS & SERPENT',
  'GIFT BOXES',
];

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async findAll(): Promise<CategoryDocument[]> {
    const count = await this.categoryModel.countDocuments().exec();
    if (count === 0) {
      // Auto-seed default categories with sequence numbers 1 to 23
      const seedData = DEFAULT_CATEGORIES.map((name, index) => ({
        name,
        sequence: index + 1,
      }));
      await this.categoryModel.insertMany(seedData);
    }

    return this.categoryModel.find().sort({ sequence: 1, name: 1 }).exec();
  }

  async findOne(id: string): Promise<CategoryDocument> {
    const category = await this.categoryModel.findById(id).exec();
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return category;
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryDocument> {
    const trimmedName = createCategoryDto.name.trim();

    // Check case-insensitive duplicate
    const existing = await this.categoryModel
      .findOne({ name: { $regex: new RegExp(`^${trimmedName}$`, 'i') } })
      .exec();
    if (existing) {
      throw new BadRequestException(`Category "${trimmedName}" already exists`);
    }

    let sequence = createCategoryDto.sequence;
    if (sequence === undefined || sequence === null) {
      const highest = await this.categoryModel.findOne().sort({ sequence: -1 }).exec();
      sequence = highest && highest.sequence ? highest.sequence + 1 : 1;
    }

    const created = new this.categoryModel({
      name: trimmedName,
      sequence,
    });

    return created.save();
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryDocument> {
    const category = await this.categoryModel.findById(id).exec();
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    const oldName = category.name;

    if (updateCategoryDto.name !== undefined) {
      const trimmedName = updateCategoryDto.name.trim();
      if (trimmedName.toLowerCase() !== oldName.toLowerCase()) {
        const existing = await this.categoryModel
          .findOne({
            _id: { $ne: id },
            name: { $regex: new RegExp(`^${trimmedName}$`, 'i') },
          })
          .exec();
        if (existing) {
          throw new BadRequestException(`Category "${trimmedName}" already exists`);
        }
      }
      category.name = trimmedName;
    }

    if (updateCategoryDto.sequence !== undefined) {
      category.sequence = updateCategoryDto.sequence;
    }

    const updated = await category.save();

    // If category name changed, cascade update to all products that had the old category name
    if (updateCategoryDto.name && updateCategoryDto.name.trim() !== oldName) {
      const newName = updateCategoryDto.name.trim();
      await this.productModel.updateMany(
        { productType: oldName },
        { $set: { productType: newName } },
      ).exec();
    }

    return updated;
  }

  async remove(id: string): Promise<{ message: string; id: string }> {
    const category = await this.categoryModel.findById(id).exec();
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    await this.categoryModel.findByIdAndDelete(id).exec();
    return { message: 'Category deleted successfully', id };
  }
}
