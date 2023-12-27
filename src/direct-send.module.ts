import { Module, DynamicModule } from '@nestjs/common';
import { DirectSendService } from './direct-send.service';
import { DirectSendModuleOptions } from './direct-send.config';

@Module({})
export class DirectSendModule {
  static register(options: DirectSendModuleOptions): DynamicModule {
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
