"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const categories_service_1 = require("./categories.service");
const create_category_dto_1 = require("../../dtos/categoires/create-category.dto");
const update_category_dto_1 = require("../../dtos/categoires/update-category.dto");
const base_where_dto_1 = require("../../core/base-where.dto");
const auth_strategy_1 = require("../../core/auth.strategy");
const helper_1 = require("../../core/helper");
let CategoriesController = class CategoriesController {
    constructor(service) {
        this.service = service;
    }
    async createData(res, category) {
        try {
            const result = await this.service.create(category);
            return res.status(common_1.HttpStatus.OK).json({
                msg: "Category created successfully",
                result
            });
        }
        catch (e) {
            return res.status(e.status).json(e.response);
        }
    }
    async findOne(res, id) {
        try {
            const result = await this.service.findOne(id);
            return res.status(common_1.HttpStatus.OK).json({
                msg: "Category found successfully",
                result
            });
        }
        catch (e) {
            return res.status(e.status).json(e.response);
        }
    }
    async local(file) {
        return {
            statusCode: 200,
            data: (0, helper_1.filePathClean)(file.path)
        };
    }
    async findAll(res, params) {
        const where = new base_where_dto_1.BaseWhereDto(params);
        try {
            const result = await this.service.findAll(where);
            return res.status(common_1.HttpStatus.OK).json({
                msg: "Category founds successfully",
                result
            });
        }
        catch (e) {
            return res.status(e.status).json(e.response);
        }
    }
    async updateData(res, id, data) {
        try {
            const result = await this.service.update(id, data);
            return res.status(common_1.HttpStatus.OK).json({
                msg: "Category founds successfully",
                result
            });
        }
        catch (e) {
            return res.status(e.status).json(e.response);
        }
    }
    async removeData(res, id) {
        try {
            const result = await this.service.remove(id);
            return res.status(common_1.HttpStatus.OK).json({
                msg: "Category founds successfully",
                result
            });
        }
        catch (e) {
            return res.status(e.status).json(e.response);
        }
    }
};
exports.CategoriesController = CategoriesController;
__decorate([
    (0, common_1.UseGuards)(auth_strategy_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "createData", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_strategy_1.AuthGuard),
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './public/upload/category',
            filename: (req, file, cb) => {
                cb(null, (0, helper_1.generateFileName)(file.originalname));
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "local", null);
__decorate([
    (0, common_1.UseGuards)(auth_strategy_1.AuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_strategy_1.AuthGuard),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_category_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "updateData", null);
__decorate([
    (0, common_1.UseGuards)(auth_strategy_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "removeData", null);
exports.CategoriesController = CategoriesController = __decorate([
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesController);
//# sourceMappingURL=categories.controller.js.map