import { Role } from 'src/types/user'

export class CreateUserDto {
    name: string

    @IsEm
    email: string
    role: Role;
}