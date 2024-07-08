import { Injectable } from '@nestjs/common';
import { GetUserResponse } from './get-user-response.dto';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetUserUsecaseService {

    constructor(  
        @InjectRepository(User) private repository: Repository<User>,
        
      ) {}

  async findOne(id: number): Promise<GetUserResponse> {
    
    const userFinded: User = await this.repository.findOneBy({ id: id })

    const getUserResponse: GetUserResponse = new GetUserResponse();
    getUserResponse.email = userFinded.email;
    getUserResponse.id = userFinded.id;
    getUserResponse.name = userFinded.name;
    getUserResponse.password = userFinded.password;    
    return getUserResponse;
  }


}
