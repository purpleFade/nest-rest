import { Injectable, NotFoundException } from '@nestjs/common';
import { Role, User } from 'src/types/user';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
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

    if (!user) throw new NotFoundException('User not found!')

    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighesId = [...this.users].sort((a, b) => b.id - a.id);

    const newUser = {
      id: usersByHighesId[0].id + 1,
      ...createUserDto,
    };

    this.users.push(newUser);

    return newUser;
  }

  update(
    id: number,
    updateUserDto: UpdateUserDto,
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }

      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== removedUser.id);

    return removedUser;
  }
}
