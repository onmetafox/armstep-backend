import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { model, Document } from 'mongoose';

export interface stack extends Document {
    heading: string;
    icon: string;
}

export interface Teams extends Document {
    name: string;
    role: string;
    imgUrl: string;
    upwork: string;
    linkedin: string;
    contra: string;
    about: string;
    stacks: stack[];
    status: string;
}

@Schema({ timestamps: true })
export class SchemaData {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    role: string;

    @Prop({required: true})
    imgUrl: string;

    @Prop({required: true})
    upwork: string;

    @Prop({required: true})
    linkedin: string;

    @Prop({required: true})
    contra: string;

    @Prop({required: true})
    about: string;
    
    @Prop()
    stacks: stack[];
    
    @Prop({ default: "1" })
    status: string;
}

export const TeamsSchema = SchemaFactory.createForClass(SchemaData);

export const TeamsModel = model<Teams>('Team', TeamsSchema);