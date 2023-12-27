import { DynamicModule } from '@nestjs/common';
import { DirectSendModuleOptions } from './direct-send.config';
export declare class DirectSendModule {
    static register(options: DirectSendModuleOptions): DynamicModule;
}
