import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema, model, Types } from 'mongoose';
import { Categories } from "./categories.model";

export interface Services extends Document {
    icon: string;
    title: string;
    subtitle: string;
    intro: string;
    detail: string;
    content: string;
    subcontent: string;
    category: string[];
    status: string;
}
export interface ServicePopulated extends Document {
    title: string;
    subtitle: string;
    icon: string;
    intro: string;
    detail: string;
    content: string;
    subcontent: string;
    category: Types.DocumentArray<Categories>; // Array of Category objects
    status: string;
}


@Schema({ timestamps: true })
export class SchemaData {
    @Prop({ required: true })
    icon: string;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    subtitle: string;

    @Prop({ required: true })
    intro: string;

    @Prop({ required: true })
    detail: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    subcontent: string;

    @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Categories' }] })
    category: string[];

    @Prop({ default: "1" })
    status: string;
}

export const ServicesSchema = SchemaFactory.createForClass(SchemaData);

export const ServiceModel = model<Services>('Service', ServicesSchema);