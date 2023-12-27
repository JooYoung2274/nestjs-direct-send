import { Module, DynamicModule } from '@nestjs/common';
import { DirectSendService } from './direct-send.service';
import { DIRECT_SEND_MODULE_OPTIONS } from './direct-send.config';

@Module({})
export class DirectSendModule {
  static register(options: DIRECT_SEND_MODULE_OPTIONS): DynamicModule {
    return {
      module: DirectSendModule,
      providers: [
        {
          provide: DirectSendService,
          useValue: new DirectSendService(options),
        },
      ],
      exports: [DirectSendService],
    };
  }
}
