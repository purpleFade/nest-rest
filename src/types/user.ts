export type Role = 'INTERN' | 'ENGINEER' | 'ADMIN';

export interface User {
    id: number;
    name: string;
    email: string;
    role: Role;
}