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
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/models/users.model';
import { BaseService } from 'src/core/base.service';
export declare class AuthService extends BaseService<Users> {
    private readonly usersModel;
    private readonly jwtService;
    constructor(usersModel: Model<Users>, jwtService: JwtService);
    validateUser(user: any): Promise<{
        success: boolean;
        msg: string;
        status: number;
        data?: undefined;
    } | {
        success: boolean;
        data: {
            _id: any;
            __v?: any;
            $locals: Record<string, unknown>;
            $model: {
                <ModelType = Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & Required<{
                    _id: unknown;
                }>, any>>(name: string): ModelType;
                <ModelType_1 = Model<Users, {}, {}, {}, import("mongoose").Document<unknown, {}, Users> & Users & {
                    _id: import("mongoose").Types.ObjectId;
                }, any>>(): ModelType_1;
            } & {
                <ModelType_2 = Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & Required<{
                    _id: unknown;
                }>, any>>(name: string): ModelType_2;
                <ModelType_3 = Model<any, {}, {}, {}, any, any>>(): ModelType_3;
            };
            $op: "remove" | "save" | "validate";
            $where: Record<string, unknown>;
            baseModelName?: string;
            collection: import("mongoose").Collection<import("bson").Document>;
            db: import("mongoose").Connection;
            deleteOne: ((options?: import("mongoose").QueryOptions<unknown>) => import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, Users> & Users & {
                _id: import("mongoose").Types.ObjectId;
            }, {}, Users, "deleteOne">) & ((options?: import("mongoose").QueryOptions<unknown>) => any);
            equals: ((doc: import("mongoose").Document<unknown, any, any>) => boolean) & ((doc: import("mongoose").Document<any, any, any>) => boolean);
            errors?: import("mongoose").Error.ValidationError;
            get: {
                <T extends keyof Users>(path: T, type?: any, options?: any): Users[T];
                (path: string, type?: any, options?: any): any;
            } & {
                <T_1 extends string | number | symbol>(path: T_1, type?: any, options?: any): any;
                (path: string, type?: any, options?: any): any;
            };
            id?: any;
            invalidate: {
                <T_2 extends keyof Users>(path: T_2, errorMsg: string | NativeError, value?: any, kind?: string): NativeError;
                (path: string, errorMsg: string | NativeError, value?: any, kind?: string): NativeError;
            } & {
                <T_3 extends string | number | symbol>(path: T_3, errorMsg: string | NativeError, value?: any, kind?: string): NativeError;
                (path: string, errorMsg: string | NativeError, value?: any, kind?: string): NativeError;
            };
            isDirectModified: {
                <T_4 extends keyof Users>(path: T_4 | T_4[]): boolean;
                (path: string | string[]): boolean;
            } & {
                <T_5 extends string | number | symbol>(path: T_5 | T_5[]): boolean;
                (path: string | string[]): boolean;
            };
            isDirectSelected: {
                <T_6 extends keyof Users>(path: T_6): boolean;
                (path: string): boolean;
            } & {
                <T_7 extends string | number | symbol>(path: T_7): boolean;
                (path: string): boolean;
            };
            isInit: {
                <T_8 extends keyof Users>(path: T_8): boolean;
                (path: string): boolean;
            } & {
                <T_9 extends string | number | symbol>(path: T_9): boolean;
                (path: string): boolean;
            };
            isModified: {
                <T_10 extends keyof Users>(path?: T_10 | T_10[], options?: {
                    ignoreAtomics?: boolean;
                }): boolean;
                (path?: string | string[], options?: {
                    ignoreAtomics?: boolean;
                }): boolean;
            } & {
                <T_11 extends string | number | symbol>(path?: T_11 | T_11[], options?: {
                    ignoreAtomics?: boolean;
                }): boolean;
                (path?: string | string[], options?: {
                    ignoreAtomics?: boolean;
                }): boolean;
            };
            isNew: boolean;
            isSelected: {
                <T_12 extends keyof Users>(path: T_12): boolean;
                (path: string): boolean;
            } & {
                <T_13 extends string | number | symbol>(path: T_13): boolean;
                (path: string): boolean;
            };
            markModified: {
                <T_14 extends keyof Users>(path: T_14, scope?: any): void;
                (path: string, scope?: any): void;
            } & {
                <T_15 extends string | number | symbol>(path: T_15, scope?: any): void;
                (path: string, scope?: any): void;
            };
            model: {
                <ModelType_4 = Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & Required<{
                    _id: unknown;
                }>, any>>(name: string): ModelType_4;
                <ModelType_5 = Model<Users, {}, {}, {}, import("mongoose").Document<unknown, {}, Users> & Users & {
                    _id: import("mongoose").Types.ObjectId;
                }, any>>(): ModelType_5;
            } & {
                <ModelType_6 = Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & Required<{
                    _id: unknown;
                }>, any>>(name: string): ModelType_6;
                <ModelType_7 = Model<any, {}, {}, {}, any, any>>(): ModelType_7;
            };
            schema: import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
                [x: string]: unknown;
            }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
                [x: string]: unknown;
            }>> & import("mongoose").FlatRecord<{
                [x: string]: unknown;
            }> & Required<{
                _id: unknown;
            }>>;
            set: {
                <T_16 extends keyof Users>(path: T_16, val: Users[T_16], type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, Users> & Users & {
                    _id: import("mongoose").Types.ObjectId;
                };
                (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, Users> & Users & {
                    _id: import("mongoose").Types.ObjectId;
                };
                (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, Users> & Users & {
                    _id: import("mongoose").Types.ObjectId;
                };
                (value: string | Record<string, any>): import("mongoose").Document<unknown, {}, Users> & Users & {
                    _id: import("mongoose").Types.ObjectId;
                };
            } & {
                <T_17 extends string | number | symbol>(path: T_17, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, Users> & Users & {
                    _id: import("mongoose").Types.ObjectId;
                };
                (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, Users> & Users & {
                    _id: import("mongoose").Types.ObjectId;
                };
                (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, {}, Users> & Users & {
                    _id: import("mongoose").Types.ObjectId;
                };
                (value: string | Record<string, any>): import("mongoose").Document<unknown, {}, Users> & Users & {
                    _id: import("mongoose").Types.ObjectId;
                };
            };
            toJSON: {
                <T_18 = Users & {
                    _id: import("mongoose").Types.ObjectId;
                }>(options?: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                    _id: unknown;
                }>> & {
                    flattenMaps?: true;
                }): import("mongoose").FlattenMaps<T_18>;
                <T_19 = Users & {
                    _id: import("mongoose").Types.ObjectId;
                }>(options: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                    _id: unknown;
                }>> & {
                    flattenMaps: false;
                }): T_19;
            } & {
                <T_20 = any>(options?: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                    _id: unknown;
                }>> & {
                    flattenMaps?: true;
                }): import("mongoose").FlattenMaps<T_20>;
                <T_21 = any>(options: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                    _id: unknown;
                }>> & {
                    flattenMaps: false;
                }): T_21;
            };
            toObject: (<T_22 = Users & {
                _id: import("mongoose").Types.ObjectId;
            }>(options?: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }>>) => import("mongoose").Require_id<T_22>) & (<T_23 = any>(options?: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }>>) => import("mongoose").Require_id<T_23>);
            unmarkModified: {
                <T_24 extends keyof Users>(path: T_24): void;
                (path: string): void;
            } & {
                <T_25 extends string | number | symbol>(path: T_25): void;
                (path: string): void;
            };
            validate: {
                <T_26 extends keyof Users>(pathsToValidate?: T_26 | T_26[], options?: import("mongoose").AnyObject): Promise<void>;
                (pathsToValidate?: import("mongoose").PathsToValidate, options?: import("mongoose").AnyObject): Promise<void>;
                (options: {
                    pathsToSkip?: import("mongoose").pathsToSkip;
                }): Promise<void>;
            } & {
                <T_27 extends string | number | symbol>(pathsToValidate?: T_27 | T_27[], options?: import("mongoose").AnyObject): Promise<void>;
                (pathsToValidate?: import("mongoose").PathsToValidate, options?: import("mongoose").AnyObject): Promise<void>;
                (options: {
                    pathsToSkip?: import("mongoose").pathsToSkip;
                }): Promise<void>;
            };
            validateSync: {
                (options: {
                    [k: string]: any;
                    pathsToSkip?: import("mongoose").pathsToSkip;
                }): import("mongoose").Error.ValidationError;
                <T_28 extends keyof Users>(pathsToValidate?: T_28 | T_28[], options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError;
                (pathsToValidate?: import("mongoose").PathsToValidate, options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError;
            } & {
                (options: {
                    [k: string]: any;
                    pathsToSkip?: import("mongoose").pathsToSkip;
                }): import("mongoose").Error.ValidationError;
                <T_29 extends string | number | symbol>(pathsToValidate?: T_29 | T_29[], options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError;
                (pathsToValidate?: import("mongoose").PathsToValidate, options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError;
            };
            name: string;
            email: string;
            status: string;
        };
        msg?: undefined;
        status?: undefined;
    }>;
    login(user: any): Promise<{
        user: any;
        token: string;
    }>;
    create(user: any): Promise<{
        success: boolean;
        msg: string;
        status: number;
        user?: undefined;
    } | {
        user: {
            name: string;
            email: string;
            status: string;
            _id: any;
            __v?: any;
            $assertPopulated: <Paths = {}>(path: string | string[], values?: Partial<Paths>) => Omit<Users & {
                _id: import("mongoose").Types.ObjectId;
            }, keyof Paths> & Paths;
            $clone: () => Users & {
                _id: import("mongoose").Types.ObjectId;
            };
            $getAllSubdocs: () => import("mongoose").Document<any, any, any>[];
            $ignore: (path: string) => void;
            $isDefault: (path: string) => boolean;
            $isDeleted: (val?: boolean) => boolean;
            $getPopulatedDocs: () => import("mongoose").Document<any, any, any>[];
            $inc: (path: string | string[], val?: number) => Users & {
                _id: import("mongoose").Types.ObjectId;
            };
            $isEmpty: (path: string) => boolean;
            $isValid: (path: string) => boolean;
            $locals: import("mongoose").FlattenMaps<Record<string, unknown>>;
            $markValid: (path: string) => void;
            $model: {
                <ModelType = Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & Required<{
                    _id: unknown;
                }>, any>>(name: string): ModelType;
                <ModelType_1 = Model<any, {}, {}, {}, any, any>>(): ModelType_1;
            };
            $op: "remove" | "save" | "validate";
            $session: (session?: import("mongodb").ClientSession) => import("mongodb").ClientSession;
            $set: {
                (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): Users & {
                    _id: import("mongoose").Types.ObjectId;
                };
                (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): Users & {
                    _id: import("mongoose").Types.ObjectId;
                };
                (value: string | Record<string, any>): Users & {
                    _id: import("mongoose").Types.ObjectId;
                };
            };
            $where: import("mongoose").FlattenMaps<Record<string, unknown>>;
            baseModelName?: string;
            collection: import("mongoose").Collection<import("bson").Document>;
            db: import("mongoose").FlattenMaps<import("mongoose").Connection>;
            deleteOne: (options?: import("mongoose").QueryOptions<unknown>) => any;
            depopulate: (path?: string | string[]) => Users & {
                _id: import("mongoose").Types.ObjectId;
            };
            directModifiedPaths: () => string[];
            equals: (doc: import("mongoose").Document<any, any, any>) => boolean;
            errors?: import("mongoose").Error.ValidationError;
            get: {
                <T extends string | number | symbol>(path: T, type?: any, options?: any): any;
                (path: string, type?: any, options?: any): any;
            };
            getChanges: () => import("mongoose").UpdateQuery<Users & {
                _id: import("mongoose").Types.ObjectId;
            }>;
            id?: any;
            increment: () => Users & {
                _id: import("mongoose").Types.ObjectId;
            };
            init: (obj: import("mongoose").AnyObject, opts?: import("mongoose").AnyObject) => Users & {
                _id: import("mongoose").Types.ObjectId;
            };
            invalidate: {
                <T_1 extends string | number | symbol>(path: T_1, errorMsg: string | NativeError, value?: any, kind?: string): NativeError;
                (path: string, errorMsg: string | NativeError, value?: any, kind?: string): NativeError;
            };
            isDirectModified: {
                <T_2 extends string | number | symbol>(path: T_2 | T_2[]): boolean;
                (path: string | string[]): boolean;
            };
            isDirectSelected: {
                <T_3 extends string | number | symbol>(path: T_3): boolean;
                (path: string): boolean;
            };
            isInit: {
                <T_4 extends string | number | symbol>(path: T_4): boolean;
                (path: string): boolean;
            };
            isModified: {
                <T_5 extends string | number | symbol>(path?: T_5 | T_5[], options?: {
                    ignoreAtomics?: boolean;
                }): boolean;
                (path?: string | string[], options?: {
                    ignoreAtomics?: boolean;
                }): boolean;
            };
            isNew: boolean;
            isSelected: {
                <T_6 extends string | number | symbol>(path: T_6): boolean;
                (path: string): boolean;
            };
            markModified: {
                <T_7 extends string | number | symbol>(path: T_7, scope?: any): void;
                (path: string, scope?: any): void;
            };
            model: {
                <ModelType_2 = Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & Required<{
                    _id: unknown;
                }>, any>>(name: string): ModelType_2;
                <ModelType_3 = Model<any, {}, {}, {}, any, any>>(): ModelType_3;
            };
            modifiedPaths: (options?: {
                includeChildren?: boolean;
            }) => string[];
            overwrite: (obj: import("mongoose").AnyObject) => Users & {
                _id: import("mongoose").Types.ObjectId;
            };
            $parent: () => import("mongoose").Document<any, any, any>;
            populate: {
                <Paths_1 = {}>(path: string | import("mongoose").PopulateOptions | (string | import("mongoose").PopulateOptions)[]): Promise<import("mongoose").MergeType<Users & {
                    _id: import("mongoose").Types.ObjectId;
                }, Paths_1>>;
                <Paths_2 = {}>(path: string, select?: string | import("mongoose").AnyObject, model?: Model<any, {}, {}, {}, any, any>, match?: import("mongoose").AnyObject, options?: import("mongoose").PopulateOptions): Promise<import("mongoose").MergeType<Users & {
                    _id: import("mongoose").Types.ObjectId;
                }, Paths_2>>;
            };
            populated: (path: string) => any;
            replaceOne: (replacement?: import("mongoose").AnyObject, options?: import("mongoose").QueryOptions<unknown>) => import("mongoose").Query<any, Users & {
                _id: import("mongoose").Types.ObjectId;
            }, {}, Users & {
                _id: import("mongoose").Types.ObjectId;
            }, "find">;
            save: (options?: import("mongoose").SaveOptions) => Promise<Users & {
                _id: import("mongoose").Types.ObjectId;
            }>;
            schema: import("mongoose").FlattenMaps<import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
                [x: string]: unknown;
            }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
                [x: string]: unknown;
            }>> & import("mongoose").FlatRecord<{
                [x: string]: unknown;
            }> & Required<{
                _id: unknown;
            }>>>;
            set: {
                <T_8 extends string | number | symbol>(path: T_8, val: any, type: any, options?: import("mongoose").DocumentSetOptions): Users & {
                    _id: import("mongoose").Types.ObjectId;
                };
                (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): Users & {
                    _id: import("mongoose").Types.ObjectId;
                };
                (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): Users & {
                    _id: import("mongoose").Types.ObjectId;
                };
                (value: string | Record<string, any>): Users & {
                    _id: import("mongoose").Types.ObjectId;
                };
            };
            toJSON: {
                <T_9 = any>(options?: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                    _id: unknown;
                }>> & {
                    flattenMaps?: true;
                }): import("mongoose").FlattenMaps<T_9>;
                <T_10 = any>(options: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                    _id: unknown;
                }>> & {
                    flattenMaps: false;
                }): T_10;
            };
            toObject: <T_11 = any>(options?: import("mongoose").ToObjectOptions<import("mongoose").Document<unknown, {}, unknown> & Required<{
                _id: unknown;
            }>>) => import("mongoose").Require_id<T_11>;
            unmarkModified: {
                <T_12 extends string | number | symbol>(path: T_12): void;
                (path: string): void;
            };
            updateOne: (update?: import("mongoose").UpdateWithAggregationPipeline | import("mongoose").UpdateQuery<Users & {
                _id: import("mongoose").Types.ObjectId;
            }>, options?: import("mongoose").QueryOptions<unknown>) => import("mongoose").Query<any, Users & {
                _id: import("mongoose").Types.ObjectId;
            }, {}, Users & {
                _id: import("mongoose").Types.ObjectId;
            }, "find">;
            validate: {
                <T_13 extends string | number | symbol>(pathsToValidate?: T_13 | T_13[], options?: import("mongoose").AnyObject): Promise<void>;
                (pathsToValidate?: import("mongoose").PathsToValidate, options?: import("mongoose").AnyObject): Promise<void>;
                (options: {
                    pathsToSkip?: import("mongoose").pathsToSkip;
                }): Promise<void>;
            };
            validateSync: {
                (options: {
                    [k: string]: any;
                    pathsToSkip?: import("mongoose").pathsToSkip;
                }): import("mongoose").Error.ValidationError;
                <T_14 extends string | number | symbol>(pathsToValidate?: T_14 | T_14[], options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError;
                (pathsToValidate?: import("mongoose").PathsToValidate, options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError;
            };
        };
        success?: undefined;
        msg?: undefined;
        status?: undefined;
    }>;
    private generateToken;
    private hashPassword;
    private comparePassword;
}
