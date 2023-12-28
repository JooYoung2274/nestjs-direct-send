export declare const EMAIL_CONSTANTS: {
    SEND_EMAIL_URL: string;
    SEND_SMS_URL: string;
    GET_REMAINING_MONEY_URL: string;
};
export type RESPONSE_TYPE<T> = {
    message: string;
    statusCode: number;
    data: T;
};
export type DIRECT_SEND_MODULE_OPTIONS = {
    username: string;
    key: string;
};
export type SEND_EMAIL_PARAMS = {
    subject: string;
    sender: string;
    sender_name?: string;
    receiver: {
        email: string;
        name?: string;
        mobile?: string;
        note1?: string;
        note2?: string;
    }[];
    body: string;
};
export type DIRECT_SEND_SMS_REQUEST_TYPE = {
    title?: string;
    message: string;
    sender: string;
    receiver: {
        mobile: string;
        name?: string;
        note1?: string;
        note2?: string;
    }[];
    sms_type: string;
};
