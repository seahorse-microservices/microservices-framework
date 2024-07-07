import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiExtraModels, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { GetUserResponse } from './dto/get-user-response.dto';
import { CreateUserRequest } from './dto/create-user-request.dto';
import { CreateUserResponse } from './dto/create-user-response.dto';

@Controller('user')
@ApiTags("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'User created.', type: CreateUserResponse})
  @ApiResponse({ status: 409, description: 'The user already exists.'})
  @ApiExtraModels(CreateUserResponse)
  create(@Body() createUserRequest: CreateUserRequest) {
    return this.userService.create(createUserRequest);
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
