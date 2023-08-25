import { createParamDecorator, type ExecutionContext } from '@nestjs/common'

export interface UserPayload {
  access_token: string
  email: string
  userId: number
  userType: string
  userName: string
}

const User = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  return request.user
})

export default User
