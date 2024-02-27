import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { model, Document } from 'mongoose';

export interface Contacts extends Document {
    name: string;
    phone: string;
    email: string;
    duration: string;
    service: string;
    stack: string;
    about: string;
    status: string;
}

@Schema({ timestamps: true })
export class SchemaData {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    phone: string;

    @Prop({required: true})
    email: string;

    // 1: 1-3 month; 2: 3-6 month; 3: 6-12 month
    @Prop({required: true})
    duration: string;

    // web, mobile, blockchain, ai-ml
    @Prop({required: true})
    service: string;

    // web, mobile, blockchain, ai-ml
    @Prop({required: true})
    stack: string;
    
    @Prop({required: true})
    about: string;
    
    @Prop({ default: "1" })
    status: string;
}

export const ContactsSchema = SchemaFactory.createForClass(SchemaData);

export const ContactsModel = model<Contacts>('Contact', ContactsSchema);