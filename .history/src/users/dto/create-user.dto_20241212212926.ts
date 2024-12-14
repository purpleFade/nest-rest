import { IsEmail, IsEmpty, IsEnum, IsString } from 'class-validator';
import { Role } from 'src/types/user';

export class CreateUserDto {
  @IsString()
  @IsEmpty()
  name: string;

  @IsEmail()
  @IsEmpty()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Valid role required!',
  })
  @IsEmpty()
  role: Role;
}
