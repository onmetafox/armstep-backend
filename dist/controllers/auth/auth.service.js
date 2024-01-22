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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const base_service_1 = require("../../core/base.service");
let AuthService = class AuthService extends base_service_1.BaseService {
    constructor(usersModel, jwtService) {
        super(usersModel);
        this.usersModel = usersModel;
        this.jwtService = jwtService;
    }
    async validateUser(user) {
        const userData = await this.usersModel.findOne({ email: user.email }).exec();
        if (!userData) {
            return {
                "success": false,
                "msg": "User is not existed!",
                "status": 401
            };
        }
        const match = await this.comparePassword(user.password, userData.password);
        if (!match) {
            return {
                "success": false,
                "msg": "User password is not matched",
                "status": 401
            };
        }
        const { password, ...result } = userData;
        return {
            "success": true,
            "data": result
        };
    }
    async login(user) {
        const token = await this.generateToken(user);
        return { user, token };
    }
    async create(user) {
        const token = await this.generateToken(user);
        const userData = await this.usersModel.findOne({ email: user.email }).exec();
        if (userData) {
            return {
                "success": false,
                "msg": "User already existed!",
                "status": 401
            };
        }
        const pass = await this.hashPassword(user.password);
        const newUser = await this.usersModel.create({ ...user, password: pass });
        const { password, ...result } = newUser.toJSON();
        return { user: result };
    }
    async generateToken(user) {
        const token = await this.jwtService.signAsync(user);
        return token;
    }
    async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }
    async comparePassword(enteredPassword, dbPassword) {
        const match = await bcrypt.compare(enteredPassword, dbPassword);
        return match;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Users')),
    __metadata("design:paramtypes", [mongoose_2.Model, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map