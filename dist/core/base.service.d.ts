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
import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { MongoError } from 'typeorm';
import { Model } from "mongoose";
import { IResponseDto } from "./base.interface";
import { BaseWhereDto } from "./base-where.dto";
export declare class BaseService<T> implements ExceptionFilter {
    private model;
    catch(exception: typeof MongoError, host: ArgumentsHost): void;
    constructor(model: Model<T>);
    PAGE: number;
    PAGE_SIZE: number;
    WHERE: BaseWhereDto;
    create(data: Partial<T>): Promise<any>;
    update(id: string, data: Partial<T>): Promise<T | null>;
    findOne(id: string): Promise<IResponseDto<T> | null>;
    findAll(where: BaseWhereDto): Promise<IResponseDto<T>>;
    remove(id: string): Promise<T | null>;
}
