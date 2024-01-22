"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const validate_pipe_1 = require("./core/validate.pipe");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { rawBody: true });
    app.useGlobalPipes(new validate_pipe_1.ValidateInputPipe());
    app.useBodyParser('json');
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: '*',
    });
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map