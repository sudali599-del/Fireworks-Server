import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category {
  @Prop({ required: true, unique: true, trim: true })
  name!: string;

  @Prop({ required: true, default: 0 })
  sequence!: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

// Index sequence for fast ordering
CategorySchema.index({ sequence: 1, name: 1 });
