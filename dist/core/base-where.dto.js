"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseWhereDto = void 0;
class BaseWhereDto {
    constructor(params) {
        this.page = 1;
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                this[key] = value;
            });
        }
    }
}
exports.BaseWhereDto = BaseWhereDto;
//# sourceMappingURL=base-where.dto.js.map