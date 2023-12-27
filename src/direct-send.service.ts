import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { EMAIL_CONSTANTS, SEND_EMAIL_PARAMS } from './direct-send.config';

@Injectable()
export class DirectSendService {
  private readonly username: string;
  private readonly key: string;
  constructor({ username, key }: { username: string; key: string }) {
    this.username = username;
    this.key = key;
  }

  /**
   * @param data : SEND_EMAIL_PARAMS
   * @returns : { message: 'success' | 'fail', statusCode: 200 | 400, data: string }
   * @description : 메일 발송 함수
   */
  async sendEmail(data: SEND_EMAIL_PARAMS) {
    data['username'] = this.username;
    data['key'] = this.key;

    try {
      const res = await axios.post(EMAIL_CONSTANTS.URL, data, {
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
}
