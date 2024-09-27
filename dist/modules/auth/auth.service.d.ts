import { LoginUserDto } from "../users/dto/login-user.dto";
import { RegisterUserDto } from "../users/dto/register-user.dto";
import { UsersService } from "../users/users.service";
export declare class AuthService {
    private readonly userService;
    constructor(userService: UsersService);
    login(loginDto: LoginUserDto): Promise<import("../users/entities/user.entity").UserEntity>;
    register(registerUserDto: RegisterUserDto): Promise<LoginUserDto & import("../users/entities/user.entity").UserEntity>;
    findAll(): string;
    findOne(id: number): string;
    remove(id: number): string;
}
