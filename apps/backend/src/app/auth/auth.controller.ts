import { Controller, Post, Request, UseGuards } from '@nestjs/common'
import { Public } from '../../shared/decorators/public.decorator'
import { type UserPayload } from '../../shared/decorators/user.decorator'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './local-auth.gard'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('login')
  async login(@Request() req): Promise<UserPayload> {
    return req.user
  }
}
