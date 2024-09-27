import { LoginUserDto } from "./dto/login-user.dto";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    create(loginUserDto: LoginUserDto): Promise<LoginUserDto & UserEntity>;
    findAll(): string;
    findOneBy(email: string, username?: string): Promise<UserEntity | undefined>;
}
