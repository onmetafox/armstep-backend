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
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const base_service_1 = require("../../core/base.service");
let ServicesService = class ServicesService extends base_service_1.BaseService {
    constructor(servicesModel) {
        super(servicesModel);
        this.servicesModel = servicesModel;
    }
    async findOneWithCategory(serviceId) {
        try {
            const data = this.servicesModel.findById(serviceId).populate('category').exec();
            return data;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
    async findAllWithCategory(where) {
        try {
            this.PAGE = where.page;
            this.WHERE = where;
            delete where.page;
            const objectsCount = await this.servicesModel.countDocuments(where).exec();
            const pageCount = Math.ceil(objectsCount / this.PAGE_SIZE);
            const data = await this.servicesModel
                .find(where)
                .populate('category')
                .skip((this.PAGE - 1) * this.PAGE_SIZE)
                .limit(this.PAGE_SIZE);
            const pagination = {
                page: this.PAGE,
                pageSize: this.PAGE_SIZE,
                pageCount: pageCount,
                total: objectsCount,
            };
            return {
                data: data,
                meta: {
                    pagination: pagination,
                },
            };
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
};
exports.ServicesService = ServicesService;
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Services')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ServicesService);
//# sourceMappingURL=services.service.js.map