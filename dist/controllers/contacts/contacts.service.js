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
exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const base_service_1 = require("../../core/base.service");
const mailer_1 = require("@nestjs-modules/mailer");
let ContactsService = class ContactsService extends base_service_1.BaseService {
    constructor(contactModel, mailerService) {
        super(contactModel);
        this.contactModel = contactModel;
        this.mailerService = mailerService;
    }
    async sendEmail(data) {
        const { email, name, content, phone } = data;
        const subject = `Contract Request from ${name}`;
        await this.mailerService.sendMail({
            to: email,
            subject,
            template: './mail.template',
            context: {
                name,
                email,
                phone,
                content
            }
        });
    }
};
exports.ContactsService = ContactsService;
exports.ContactsService = ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Contacts')),
    __metadata("design:paramtypes", [mongoose_2.Model, mailer_1.MailerService])
], ContactsService);
//# sourceMappingURL=contacts.service.js.map