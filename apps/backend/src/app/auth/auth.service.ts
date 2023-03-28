import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '../../prisma/prisma.service'
import { type UserPayload } from '../../shared/decorators/user.decorator'
import passwordUtil from '../../utils/password'

@Injectable()
export class AuthService {
  constructor (
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser (
    email: string,
    password: string
  ): Promise<UserPayload | null> {
    const player = await this.prismaService.player.findUnique({
      where: { email: email.toLowerCase() }
    })
    return passwordUtil.checkPassword(password, player.password)
      ? {
          access_token: this.jwtService.sign({
            email: player.email,
            sub: player.id,
            userType: 'player'
          }),
          userId: player.id,
          email: player.email,
          userType: 'player',
          userName: `${player.firstName} ${player.lastName}`
        }
      : null
  }
}
