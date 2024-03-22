import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema, model } from 'mongoose';
import { Categories } from "./categories.model";

export interface Technologies extends Document {
    logo: string;
    title: string;
    category: string[];
    status: string;
}

@Schema({ timestamps: true })
export class SchemaData {
    @Prop({ required: true })
    logo: string;

    @Prop({ required: true })
    title: string;

    @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Categories' }] })
    category: string[];

    @Prop({ default: "1" })
    status: string;
}

export const TechnologieSchema = SchemaFactory.createForClass(SchemaData);

export const TechnologyModel = model<Technologies>('Technology', TechnologieSchema);