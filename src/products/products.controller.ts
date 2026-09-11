import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Query,
  BadRequestException,
  Res,
  NotFoundException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    try {
      return await this.productsService.create(createProductDto, file);
    } catch (error: unknown) {
  if (error instanceof Error) {
    throw new BadRequestException(error.message);
  } else {
    throw new BadRequestException('Unknown error occurred');
  }
}
  }

  @Get()
  async findAll(@Query('type') type?: string, @Query('search') search?: string) {
    if (search) {
      return await this.productsService.searchProducts(search);
    }
    if (type) {
      return await this.productsService.findByType(type);
    }
    return await this.productsService.findAll();
  }

  @Get('categories')
  async getCategories() {
    return await this.productsService.getCategories();
  }

  @Post('categories')
  async addCategory(@Body() body: { name: string }) {
    if (!body?.name?.trim()) {
      throw new BadRequestException('Category name is required');
    }
    return await this.productsService.addCategory(body.name.trim());
  }

  @Put('categories/rename')
  async renameCategory(@Body() body: { oldName: string; newName: string }) {
    if (!body?.oldName?.trim() || !body?.newName?.trim()) {
      throw new BadRequestException('Both oldName and newName are required');
    }
    return await this.productsService.renameCategory(body.oldName.trim(), body.newName.trim());
  }

  @Delete('categories/:name')
  async deleteCategory(@Param('name') name: string) {
    return await this.productsService.deleteCategory(name);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productsService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    try {
      return await this.productsService.update(id, updateProductDto, file);
    } catch (error: unknown) {
  if (error instanceof Error) {
    throw new BadRequestException(error.message);
  } else {
    throw new BadRequestException('Unknown error occurred');
  }
}
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.productsService.remove(id);
  }

  @Get(':id/image')
  async getImage(@Param('id') id: string, @Res() res: Response) {
    try {
      const product = await this.productsService.findOneWithImage(id);
      
      if (!product.imageData) {
        throw new NotFoundException('Image not found for this product');
      }

      res.setHeader('Content-Type', product.imageType);
      res.setHeader('Content-Length', product.imageData.length);
      res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
      res.send(product.imageData);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Error retrieving image');
    }
  }
}