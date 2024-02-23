import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/contollers/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(user: any): Promise<any>{
        const userData = await this.authService.validateUser(user);
        if (!userData) {
         throw new UnauthorizedException('Invalid user credentials');
        }
        return userData;
    }
}