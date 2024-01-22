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
import { Document } from 'mongoose';
export interface Reviews extends Document {
    logo: string;
    user: string;
    company: string;
    review: string;
    name: string;
    role: string;
    profile: string;
    status: string;
}
export declare class SchemaData {
    logo: string;
    user: string;
    company: string;
    review: string;
    name: string;
    role: string;
    profile: string;
    status: string;
}
export declare const ReviewsSchema: import("mongoose").Schema<SchemaData, import("mongoose").Model<SchemaData, any, any, any, Document<unknown, any, SchemaData> & SchemaData & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SchemaData, Document<unknown, {}, import("mongoose").FlatRecord<SchemaData>> & import("mongoose").FlatRecord<SchemaData> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const ReviewsModel: import("mongoose").Model<Reviews, {}, {}, {}, Document<unknown, {}, Reviews> & Reviews & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
