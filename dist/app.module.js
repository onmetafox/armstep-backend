"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./controllers/auth/auth.module");
const users_module_1 = require("./controllers/users/users.module");
const categories_module_1 = require("./controllers/categories/categories.module");
const services_module_1 = require("./controllers/services/services.module");
const teams_module_1 = require("./controllers/teams/teams.module");
const technologies_module_1 = require("./controllers/technologies/technologies.module");
const projects_module_1 = require("./controllers/projects/projects.module");
const reviews_module_1 = require("./controllers/reviews/reviews.module");
const contacts_module_1 = require("./controllers/contacts/contacts.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (config) => ({
                    uri: config.get('MONGO_URL')
                })
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            categories_module_1.CategoriesModule,
            services_module_1.ServicesModule,
            teams_module_1.TeamsModule,
            technologies_module_1.TechnologiesModule,
            projects_module_1.ProjectsModule,
            reviews_module_1.ReviewsModule,
            contacts_module_1.ContactsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map