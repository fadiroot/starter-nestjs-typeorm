"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDto = void 0;
const openapi = require("@nestjs/swagger");
class RegisterDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, password: { required: true, type: () => String }, username: { required: true, type: () => String }, designation: { required: true, type: () => String } };
    }
}
exports.RegisterDto = RegisterDto;
//# sourceMappingURL=register.dto.js.map