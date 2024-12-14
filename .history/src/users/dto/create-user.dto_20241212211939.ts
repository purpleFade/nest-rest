import { Role } from 'src/types/user'

export class CreateUserDto {
    public name: string
    public email: string
    public role: Role;
}