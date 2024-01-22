/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
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
    category: Types.DocumentArray<Categories>;
    status: string;
}
export declare class SchemaData {
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
export declare const ServicesSchema: MongooseSchema<SchemaData, import("mongoose").Model<SchemaData, any, any, any, Document<unknown, any, SchemaData> & SchemaData & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SchemaData, Document<unknown, {}, import("mongoose").FlatRecord<SchemaData>> & import("mongoose").FlatRecord<SchemaData> & {
    _id: Types.ObjectId;
}>;
export declare const ServiceModel: import("mongoose").Model<Services, {}, {}, {}, Document<unknown, {}, Services> & Services & {
    _id: Types.ObjectId;
}, any>;
