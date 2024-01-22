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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesModel = exports.CategoriesSchema = exports.SchemaData = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let SchemaData = class SchemaData {
};
exports.SchemaData = SchemaData;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SchemaData.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SchemaData.prototype, "detail", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], SchemaData.prototype, "icons", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: "1" }),
    __metadata("design:type", String)
], SchemaData.prototype, "status", void 0);
exports.SchemaData = SchemaData = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], SchemaData);
exports.CategoriesSchema = mongoose_1.SchemaFactory.createForClass(SchemaData);
exports.CategoriesModel = (0, mongoose_2.model)('Category', exports.CategoriesSchema);
//# sourceMappingURL=categories.model.js.map