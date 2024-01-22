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
exports.ContactsController = void 0;
const common_1 = require("@nestjs/common");
const contacts_service_1 = require("./contacts.service");
const create_contact_dto_1 = require("../../dtos/contacts/create-contact.dto");
const base_where_dto_1 = require("../../core/base-where.dto");
const auth_strategy_1 = require("../../core/auth.strategy");
let ContactsController = class ContactsController {
    constructor(service) {
        this.service = service;
    }
    async createData(res, createDto) {
        try {
            const result = await this.service.create(createDto);
            await this.service.sendEmail(result);
            return res.status(common_1.HttpStatus.OK).json({
                msg: "Service created successfully",
                result
            });
        }
        catch (e) {
            return res.status(e.status).json(e.response);
        }
    }
    async findAll(res) {
        const where = new base_where_dto_1.BaseWhereDto({});
        try {
            const result = await this.service.findAll(where);
            return res.status(common_1.HttpStatus.OK).json({
                msg: "Service founds successfully",
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
                msg: "Service created successfully",
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
                msg: "Service founds successfully",
                result
            });
        }
        catch (e) {
            return res.status(e.status).json(e.response);
        }
    }
};
exports.ContactsController = ContactsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_contact_dto_1.CreateContactDto]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "createData", null);
__decorate([
    (0, common_1.UseGuards)(auth_strategy_1.AuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_strategy_1.AuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_strategy_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "removeData", null);
exports.ContactsController = ContactsController = __decorate([
    (0, common_1.Controller)('contacts'),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService])
], ContactsController);
//# sourceMappingURL=contacts.controller.js.map