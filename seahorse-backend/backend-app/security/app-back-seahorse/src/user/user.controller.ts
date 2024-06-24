import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiExtraModels, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { GetUserResponse } from './dto/get-user-response.dto';



@Controller('user')
@ApiTags("user")
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiResponse({status: 200 , type: GetUserResponse})
  @ApiResponse({ status: 404, description: 'User not found'})
  async findOne(@Param('id') id: number) : Promise<GetUserResponse> {
    return this.userService.findOne(+id);
  }

}

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }


  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }





