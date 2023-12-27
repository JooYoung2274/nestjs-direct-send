import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  DIRECT_SEND_MODULE_OPTIONS,
  DIRECT_SEND_SMS_REQUEST_TYPE,
  EMAIL_CONSTANTS,
  RESPONSE_TYPE,
  SEND_EMAIL_PARAMS,
} from './direct-send.config';

@Injectable()
export class DirectSendService {
  private readonly username: string;
  private readonly key: string;
  constructor({ username, key }: DIRECT_SEND_MODULE_OPTIONS) {
    this.username = username;
    this.key = key;
  }

  /**
   * @param data : SEND_EMAIL_PARAMS
   * @returns : { message: 'success' | 'fail', statusCode: 200 | 400, data: string }
   * @description : 메일 발송 함수
   */
  async sendEmail(data: SEND_EMAIL_PARAMS): Promise<RESPONSE_TYPE> {
    data['username'] = this.username;
    data['key'] = this.key;

    try {
      const res = await axios.post(EMAIL_CONSTANTS.SEND_EMAIL_URL, data, {
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
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  /**
   * @returns : number
   * @description : 잔액 조회 함수
   */
  async getRemainingMoney(): Promise<number> {
    const body = {
      username: this.username,
      key: this.key,
    };
    const { status, data, statusText } = await axios.post(EMAIL_CONSTANTS.GET_REMAINING_MONEY_URL, body, {
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json;charset=utf-8',
      },
    });

    if (status === 200) {
      const point = Number(data.point.split('.')[0].replace(/,/g, ''));
      return point;
    } else {
      console.log('DirectSendClient::getRemainingMoney', { data, status, statusText });
      return 99999;
    }
  }

  /**
   * @param data : DIRECT_SEND_SMS_REQUEST_TYPE
   * @returns : { message: 'success' | 'fail', statusCode: 200 | 400, data: string }
   */
  async sendSMS(data: DIRECT_SEND_SMS_REQUEST_TYPE): Promise<RESPONSE_TYPE> {
    data['username'] = this.username;
    data['key'] = this.key;

    const res = await axios.post(EMAIL_CONSTANTS.SEND_SMS_URL, data);
    console.log(res);
    if (res?.data?.status !== '0') {
      return { message: 'fail', statusCode: 400, data: res?.data?.msg };
    }
    return { message: 'success', statusCode: 200, data: res?.data?.status };
  }
}
