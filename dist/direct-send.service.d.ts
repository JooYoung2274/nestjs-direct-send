import { DIRECT_SEND_MODULE_OPTIONS, RESPONSE_TYPE, SEND_EMAIL_PARAMS } from './direct-send.config';
export declare class DirectSendService {
    private readonly username;
    private readonly key;
    constructor({ username, key }: DIRECT_SEND_MODULE_OPTIONS);
    sendEmail(data: SEND_EMAIL_PARAMS): Promise<RESPONSE_TYPE>;
}
