import { IsEmail } from 'class-validator';
import { Role } from 'src/types/user'

export class CreateUserDto {
    name: string

    @IsEmail()
    @IsEmp
    email: string
    role: Role;
}