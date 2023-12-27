"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectSendService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const direct_send_config_1 = require("./direct-send.config");
let DirectSendService = class DirectSendService {
    constructor({ username, key }) {
        this.username = username;
        this.key = key;
    }
    async sendEmail(data) {
        data['username'] = this.username;
        data['key'] = this.key;
        try {
            const res = await axios_1.default.post(direct_send_config_1.EMAIL_CONSTANTS.SEND_EMAIL_URL, data, {
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json;charset=utf-8',
                    Accept: 'application/json',
                },
            });
            if (res?.data?.status !== '0') {
                return { message: 'fail', statusCode: 400, data: res?.data?.msg };
            }
            return { message: 'success', statusCode: 200, data: res?.data?.status };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getRemainingMoney() {
        const body = {
            username: this.username,
            key: this.key,
        };
        const { status, data, statusText } = await axios_1.default.post(direct_send_config_1.EMAIL_CONSTANTS.GET_REMAINING_MONEY_URL, body, {
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
        if (status === 200) {
            const point = Number(data.point.split('.')[0].replace(/,/g, ''));
            return point;
        }
        else {
            console.log('DirectSendClient::getRemainingMoney', { data, status, statusText });
            return 99999;
        }
    }
    async sendSMS(data) {
        data['username'] = this.username;
        data['key'] = this.key;
        const res = await axios_1.default.post(direct_send_config_1.EMAIL_CONSTANTS.SEND_SMS_URL, data);
        console.log(res);
        if (res?.data?.status !== '0') {
            return { message: 'fail', statusCode: 400, data: res?.data?.msg };
        }
        return { message: 'success', statusCode: 200, data: res?.data?.status };
    }
};
DirectSendService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], DirectSendService);
exports.DirectSendService = DirectSendService;
//# sourceMappingURL=direct-send.service.js.map