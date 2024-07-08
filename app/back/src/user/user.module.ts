import { Module } from '@nestjs/common';
import { CreateUserUsecase } from './create-user-usecase/create-user.usecase';
import { UserController } from './user.controller';
import { GetUserUsecaseService } from './get-user-usecase/get-user-usecase.service';

@Module({
  controllers: [UserController],
  providers: [CreateUserUsecase, GetUserUsecaseService],
})
export class UserModule {}
