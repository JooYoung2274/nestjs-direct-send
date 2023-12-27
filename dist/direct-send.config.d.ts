export declare const EMAIL_CONSTANTS: {
    URL: string;
};
export interface RESPONSE_TYPE {
    message: string;
    statusCode: number;
    data: any;
}
export interface DIRECT_SEND_MODULE_OPTIONS {
    username: string;
    key: string;
}
export interface SEND_EMAIL_PARAMS {
    subject: string;
    sender: string;
    sender_name: string;
    receiver: {
        email: string;
        name?: string;
        mobile?: string;
        note1?: string;
        note2?: string;
    }[];
    body?: string;
}
