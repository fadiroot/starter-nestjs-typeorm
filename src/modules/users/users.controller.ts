import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import { AuthGuard } from "../auth/auth.guard";
import { Public } from "../auth/public-strategy";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  create(@Body() createUserDto: RegisterUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Public()
  @Get('public')
  publicRoute() {
    return { message: "This is a public route" };
  }

  @Get('protected')
  protectedRoute() {
    return { message: "This is a protected route" };
  }

 
}
