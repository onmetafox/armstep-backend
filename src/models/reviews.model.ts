import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { model, Document } from 'mongoose';

export interface Reviews extends Document {
    logo: string;
    user: string;
    company: string;
    review: string;
    name: string;
    role: string   
    status: string
}

@Schema({ timestamps: true })
export class SchemaData {
    @Prop({required: true})
    logo: string;

    @Prop({required: true})
    user: string;

    @Prop({required: true})
    company: string;

    @Prop({required: true})
    review: string;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    role: string   
    
    @Prop({ default: "1" })
    status: string;
}

export const ReviewsSchema = SchemaFactory.createForClass(SchemaData);

export const ReviewsModel = model<Reviews>('Review', ReviewsSchema);