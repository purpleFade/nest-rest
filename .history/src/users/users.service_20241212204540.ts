import { Injectable } from '@nestjs/common';
import { Role } from './users.controller';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@mail.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@mail.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@mail.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Bob Brown',
      email: 'bob.brown@mail.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Charlie Davis',
      email: 'charlie.davis@mail.com',
      role: 'ENGINEER',
    },
    {
      id: 6,
      name: 'David Wilson',
      email: 'david.wilson@mail.com',
      role: 'ADMIN',
    },
    {
      id: 7,
      name: 'Eva Green',
      email: 'eva.green@mail.com',
      role: 'ADMIN',
    },
    {
      id: 8,
      name: 'Frank White',
      email: 'frank.white@mail.com',
      role: 'ENGINEER',
    },
    {
      id: 9,
      name: 'Grace Black',
      email: 'grace.black@mail.com',
      role: 'ENGINEER',
    },
    {
      id: 10,
      name: 'Henry Blue',
      email: 'henry.blue@mail.com',
      role: 'ENGINEER',
    },
  ];

  findAll(role?: Role) {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  create(user: { name: string; email: string; role: Role }) {
    const usersByHighesId = [...this.users].sort((a, b) => b.id - a.id);

    const newUser = {
      id: usersByHighesId[0].id + 1,
      ...user,
    };

    this.users.push(newUser);

    return newUser;
  }

  update(id: number, updatedUser: Partial<{ name: string; email: string; role: Role }>) {
      }
}
