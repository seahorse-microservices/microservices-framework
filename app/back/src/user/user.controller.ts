import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserUsecase } from './create-user-usecase/create-user.usecase';
import { UpdateUserDto } from './create-user-usecase/update-user.dto';
import { ApiExtraModels, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { GetUserResponse } from './get-user-usecase/get-user-response.dto';
import { CreateUserRequest } from './create-user-usecase/create-user-request.dto';
import { CreateUserResponse } from './create-user-usecase/create-user-response.dto';

@Controller('user')
@ApiTags("user")
export class UserController {
  constructor(private readonly userService: CreateUserUsecase) {}

  @Post()
  @ApiResponse({ status: 201, description: 'User created.', type: CreateUserResponse})
  @ApiResponse({ status: 409, description: 'The user already exists.'})
  @ApiExtraModels(CreateUserResponse)
  create(@Body() createUserRequest: CreateUserRequest) {
    return this.userService.execute(createUserRequest);
  }

  @Get(':id')
  @ApiResponse({status: 200, description: 'User found.',  type: GetUserResponse})
  @ApiResponse({ status: 404, description: 'User not found'})
  @ApiExtraModels(GetUserResponse)
  async findOne(@Param('id') id: number) : Promise<GetUserResponse> {
    return this.userService.findOne(+id);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
