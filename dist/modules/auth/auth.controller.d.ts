import { AuthService } from "./auth.service";
import { LoginUserDto } from "../users/dto/login-user.dto";
import { RegisterUserDto } from "../users/dto/register-user.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginUserDto): Promise<import("../users/entities/user.entity").UserEntity>;
    register(registerUserDto: RegisterUserDto): Promise<LoginUserDto & import("../users/entities/user.entity").UserEntity>;
}
