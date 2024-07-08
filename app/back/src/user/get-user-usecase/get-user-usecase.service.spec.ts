import { Test, TestingModule } from '@nestjs/testing';
import { GetUserUsecaseService } from './get-user-usecase.service';

describe('GetUserUsecaseService', () => {
  let service: GetUserUsecaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetUserUsecaseService],
    }).compile();

    service = module.get<GetUserUsecaseService>(GetUserUsecaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
