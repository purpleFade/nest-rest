export type Role = 'INTERN' | 'ENGINEER' | 'ADMIN';

export interface User {
    id: number;
    name: number;
    email: string;
    role: Role;
}