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
export declare class SchemaData {
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
export declare const TeamsSchema: import("mongoose").Schema<SchemaData, import("mongoose").Model<SchemaData, any, any, any, Document<unknown, any, SchemaData> & SchemaData & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SchemaData, Document<unknown, {}, import("mongoose").FlatRecord<SchemaData>> & import("mongoose").FlatRecord<SchemaData> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const TeamsModel: import("mongoose").Model<Teams, {}, {}, {}, Document<unknown, {}, Teams> & Teams & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
