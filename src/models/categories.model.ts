import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema, model, Model } from 'mongoose';

export interface Icon extends Document {
    title: string;
    icon: string;
}

export interface Categories extends Document {
    title: string;
    detail: string;
    // icons: Icon[];
    status: string;
}

@Schema({ timestamps: true })
export class SchemaData {
    @Prop({ required: true })
    title: string;
    
    @Prop({ required: true })
    detail: string;
    
    // @Prop()
    // icons: Icon[];
    
    @Prop({ default: "1" })
    status: string;
}

export const CategoriesSchema = SchemaFactory.createForClass(SchemaData);

export const CategoriesModel: Model<Categories> = model<Categories>('Category', CategoriesSchema);