"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTechnologyeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_technology_dto_1 = require("./create-technology.dto");
class UpdateTechnologyeDto extends (0, mapped_types_1.PartialType)(create_technology_dto_1.CreateTechnologyDto) {
}
exports.UpdateTechnologyeDto = UpdateTechnologyeDto;
//# sourceMappingURL=update-technology.js.map