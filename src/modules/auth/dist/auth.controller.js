"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AuthController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var AuthController = /** @class */ (function () {
    function AuthController(authService) {
        this.authService = authService;
    }
    AuthController.prototype.login = function (loginDto) {
        return this.authService.login(loginDto);
    };
    AuthController.prototype.register = function (registerUserDto) {
        return this.authService.register(registerUserDto);
    };
    __decorate([
        common_1.Post("login"),
        swagger_1.ApiOperation({ summary: "Login" }),
        swagger_1.ApiResponse({ status: 200, description: "Login successful" }),
        swagger_1.ApiResponse({ status: 401, description: "Unauthorized" }),
        swagger_1.ApiResponse({ status: 500, description: "Internal server error" }),
        __param(0, common_1.Body())
    ], AuthController.prototype, "login");
    __decorate([
        common_1.Post("register"),
        swagger_1.ApiOperation({ summary: "Register" }),
        swagger_1.ApiResponse({ status: 200, description: "Register successful" }),
        swagger_1.ApiResponse({ status: 401, description: "Unauthorized" }),
        swagger_1.ApiResponse({ status: 500, description: "Internal server error" }),
        __param(0, common_1.Body())
    ], AuthController.prototype, "register");
    AuthController = __decorate([
        common_1.Controller("auth")
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
