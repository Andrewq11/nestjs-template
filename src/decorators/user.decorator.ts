import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { DecodedUser } from 'src/types/auth.types';

export const User = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): DecodedUser => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
