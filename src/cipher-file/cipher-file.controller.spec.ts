import { Test, TestingModule } from '@nestjs/testing';
import { CipherFileController } from './cipher-file.controller';

describe('CipherFile Controller', () => {
  let controller: CipherFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CipherFileController],
    }).compile();

    controller = module.get<CipherFileController>(CipherFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
