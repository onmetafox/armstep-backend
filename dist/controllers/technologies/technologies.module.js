"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnologiesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const technologies_service_1 = require("./technologies.service");
const technologies_controller_1 = require("./technologies.controller");
const technologies_model_1 = require("../../models/technologies.model");
let TechnologiesModule = class TechnologiesModule {
};
exports.TechnologiesModule = TechnologiesModule;
exports.TechnologiesModule = TechnologiesModule = __decorate([
    (0, common_1.Module)({
        controllers: [technologies_controller_1.TechnologiesController],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Technologies', schema: technologies_model_1.TechnologieSchema }])
        ],
        providers: [technologies_service_1.TechnologiesService, jwt_1.JwtService],
    })
], TechnologiesModule);
//# sourceMappingURL=technologies.module.js.map