import { Role } from 'src/types/user'

export class CreateUserDto {
    name: string

    @IsEmail
    email: string
    role: Role;
}