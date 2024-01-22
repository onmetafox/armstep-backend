import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    updateUser(): Promise<void>;
    getUser(response: any, id: string): Promise<any>;
}
