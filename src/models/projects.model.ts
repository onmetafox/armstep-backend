import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { model, Document } from 'mongoose';

export interface Projects extends Document {
    title: string;
    thumb: string;
    img: string;
    services: string;
    industry: string;
    platform: string;
    client: string;
    overview: string;
    link: string;
    team: string[];
    duration: string;
    stacks: string[];
    result: string;
    status: string
}

@Schema({ timestamps: true })
export class SchemaData {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    thumb: string;

    @Prop({ required: true })
    img: string;

    @Prop({ required: true })
    services: string;

    @Prop({ required: true })
    industry: string;

    @Prop({ required: true })
    platform: string;

    @Prop({ required: true })
    client: string;

    @Prop({ required: true })
    overview: string;

    @Prop({ required: true })
    link: string;

    @Prop()
    team: string[];
    
    @Prop()
    duration: string;

    @Prop()
    stacks: string[];

    @Prop({required: true})
    result: string;
    
    @Prop({ default: "1" })
    status: string;
}

export const ProjectsSchema = SchemaFactory.createForClass(SchemaData);

export const ProjectsModel = model<Projects>('Project', ProjectsSchema);