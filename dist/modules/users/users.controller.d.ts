import { UsersService } from "./users.service";
import { RegisterUserDto } from "./dto/register-user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: RegisterUserDto): Promise<import("./dto/login-user.dto").LoginUserDto & import("./entities/user.entity").UserEntity>;
    findAll(): string;
    publicRoute(): {
        message: string;
    };
    protectedRoute(): {
        message: string;
    };
}
