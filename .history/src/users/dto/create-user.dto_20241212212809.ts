import { IsEmail, IsEmpty } from 'class-validator';
import { Role } from 'src/types/user'

export class CreateUserDto {
    @IsEm
    name: string

    @IsEmail()
    @IsEmpty()
    email: string

    @IsEmpty()
    role: Role;
}