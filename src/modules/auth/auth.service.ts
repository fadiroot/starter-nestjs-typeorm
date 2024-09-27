import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginUserDto } from "../users/dto/login-user.dto";
import { RegisterUserDto } from "../users/dto/register-user.dto";
import { UsersService } from "../users/users.service";
import { generateHash ,validateHash } from "src/common/utilis";
@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async login(loginDto: LoginUserDto) {
    const { email, password } = loginDto;
    const user = await this.userService.findOneBy(email,);
    if (!user) {
      throw new UnauthorizedException("this user not found");
    }
    const isPasswordValid =await validateHash(password, user.password);
    console.log(isPasswordValid , password , user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials");
    }
    return user;
  }

  async register(registerUserDto: RegisterUserDto) {
    const { email, password ,username} = registerUserDto;
    const hashedPassword = generateHash(password);
    const user = await this.userService.findOneBy(email,username);
    if (user) {
      throw new UnauthorizedException("this user is already exists");
    }
    return this.userService.create({...registerUserDto,password:hashedPassword});
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
