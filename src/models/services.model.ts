import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema, model } from 'mongoose';
import { Categories } from "./categories.model";

export interface Services extends Document {
    logo: string;
    title: string;
    subtitle: string;
    intro: string;
    detail: string;
    content: string;
    subcontent: string;
    category: Categories[];
    status: string;
}

@Schema({ timestamps: true })
export class SchemaData {
    @Prop({ required: true })
    logo: string;

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

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Categories' })
    category: Categories[];

    @Prop({ default: "1" })
    status: string;
}

export const ServicesSchema = SchemaFactory.createForClass(SchemaData);

export const ServiceModel = model<Services>('Service', ServicesSchema);