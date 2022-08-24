import { ClientProxyFactory, Transport } from '@nestjs/microservices';

import { CustomConfigService } from '../config/config.service';
import { AppName } from '../constant/app-name';

export const AUTH_FACTORY = {
  provide: 'AUTH_SERVICE',
  useFactory: async (config: CustomConfigService) => {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [config.rmqUrl],
        queue: AppName.AUTH,
        queueOptions: {
          durable: false,
        },
      },
    });
  },
  inject: [CustomConfigService],
};

export const USER_FACTORY = {
  provide: 'USER_SERVICE',
  useFactory: async (config: CustomConfigService) => {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [config.rmqUrl],
        queue: AppName.USER,
        queueOptions: {
          durable: false,
        },
      },
    });
  },
  inject: [CustomConfigService],
};
