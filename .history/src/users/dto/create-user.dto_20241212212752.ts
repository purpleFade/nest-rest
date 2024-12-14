import { IsEmail } from 'class-validator';
import { Role } from 'src/types/user'

export class CreateUserDto {
    name: string

    @IsEmail()
    @Is
    email: string
    role: Role;
}