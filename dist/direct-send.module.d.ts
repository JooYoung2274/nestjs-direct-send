import { DynamicModule } from '@nestjs/common';
import { DIRECT_SEND_MODULE_OPTIONS } from './direct-send.config';
export declare class DirectSendModule {
    static register(options: DIRECT_SEND_MODULE_OPTIONS): DynamicModule;
}
