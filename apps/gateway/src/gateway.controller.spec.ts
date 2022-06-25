import { CommonModule } from '@libs/common';
import { AUTH_FACTORY } from '@libs/common/factory';
import { Test, TestingModule } from '@nestjs/testing';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';

describe('GatewayController', () => {
  let gatewayController: GatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [CommonModule],
      controllers: [GatewayController],
      providers: [GatewayService, AUTH_FACTORY],
    }).compile();

    gatewayController = app.get<GatewayController>(GatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(gatewayController.getHello()).toBe('Hello World!');
    });
  });

  describe('auth serive call test', () => {
    it('should return "Hello World!"', async () => {
      expect(await gatewayController.getAuth()).toBe('Hello World!');
    });
  });
});
