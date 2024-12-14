import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@mail.com",
            "role": "INTERN"
        }
    ]
}
