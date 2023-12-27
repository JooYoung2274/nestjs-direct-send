import { SEND_EMAIL_PARAMS } from './direct-send.config';
export declare class DirectSendService {
    private readonly username;
    private readonly key;
    constructor({ username, key }: {
        username: string;
        key: string;
    });
    sendEmail(data: SEND_EMAIL_PARAMS): Promise<{
        message: string;
        statusCode: number;
        data: any;
    }>;
}
