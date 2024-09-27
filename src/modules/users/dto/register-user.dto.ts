import { BaseUserDto } from "./base-user.dto";
import { ApiProperty } from "@nestjs/swagger";
export class RegisterUserDto extends BaseUserDto {
    @ApiProperty()
    createdAt: Date;
}
