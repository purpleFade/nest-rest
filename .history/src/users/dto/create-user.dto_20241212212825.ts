import { IsEmail, IsEmpty, IsString } from 'class-validator';
import { Role } from 'src/types/user'

export class CreateUserDto {
    
    @IsString()
    @IsEmpty()
    name: string

    @IsEmail()
    @IsEmpty()
    email: string

    @IsString
    @IsEmpty()
    role: Role;
}