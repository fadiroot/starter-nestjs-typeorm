import { Injectable } from "@nestjs/common";
import { LoginUserDto } from "./dto/login-user.dto";
import { UserEntity } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}
  async create(loginUserDto: LoginUserDto) {
    return this.userRepository.save(loginUserDto);
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOneBy(email: string , username?: string) : Promise<UserEntity | undefined> {
    return await this.userRepository.findOne({
       where: [
        {email},
        {username}]}
       
  )
  }
}
