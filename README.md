# nestjs-direct-send

- 다이렉트 샌드 이메일/문자 발송, 잔액 조회 기능을 모듈화한 nestjs 라이브러리 입니다.
- 개인적으로 사용하려고 모듈화 한 것이기 때문에 빠져있는 기능들이 많습니다.
- 다이렉트샌드 api에 대한 자세한 내용은 아래 링크에서 확인 가능합니다.
  <br>
  https://directsend.co.kr/index.php/customer/manual
  <br>

### INSTALL

```bash
$ npm install nestjs-direct-send
```

<br>

## 1. EXAMPLE

### 1-1. module.ts

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DirectSendModule } from 'nestjs-direct-send';

@Module({
  imports: [
    // DirectSendModule 등록
    DirectSendModule.register({
      username: 'DirectSend 발급 ID',
      key: 'DirectSend 발급 API KEY',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### 1-2. service.ts

```typescript
// 사용할 Service에 주입 후 사용

import { Injectable } from '@nestjs/common';
import { DirectSendService } from 'nestjs-direct-send';

@Injectable()
export class AppService {
  constructor(private readonly directSendService: DirectSendService) {}
  async sendEmail(data: SEND_EMAIL_PARAMS): Promise<RESPONSE_TYPE> {
    const response = await this.directSendService.sendEmail(data);
    return response;
  }

  async sendSMS(data: DIRECT_SEND_SMS_REQUEST_TYPE): Promise<RESPONSE_TYPE> {
    const response = await this.directSendService.sendSMS(data);
    return response;
  }

  async getRemainingMoney(): Promise<number> {
    const response = await this.directSendService.getRemainingMoney();
    return response;
  }
}
```

<br>

### 1-3. METHOD

```typescript
sendEmail(data: SEND_EMAIL_PARAMS): Promise<RESPONSE_TYPE<string>>

sendSMS(data: DIRECT_SEND_SMS_REQUEST_TYPE): Promise<RESPONSE_TYPE<string>>

getRemainingMoney(): Promise<RESPONSE_TYPE<number | string>>
```

### 1-4. SEND_EMAIL_PARAMS, DIRECT_SEND_SMS_REQUEST_TYPE, RESPONSE_TYPE

```typescript
type SEND_EMAIL_PARAMS = {
  subject: string; // 메일 제목
  receiver: { email: string; name?: string; mobile?: string; note1?: string; note2?: string }[]; // 메일 수신자 리스트
  body: string; // 메일 내용 (html)
  sender: string; // 메일 발신자 이메일
  sender_name?: string; // 메일 발신자 이름
};

type DIRECT_SEND_SMS_REQUEST_TYPE = {
  title?: string; // 문자 제목
  message: string; // 문자 내용
  sender: string; // 문자 발송자 번호
  receiver: { mobile: string; name?: string; note1?: string; note2?: string }[]; // 문자 수신자 리스트
  sms_type: string; // 발송 타입 (현재 NORMAL만 구현)
};

type RESPONSE_TYPE<T> = {
  message: string; // 'success OR fail'
  statusCode: number; // 200 OR 400
  data: T; // <T>
};
```

<br>

### 1-5. API 리턴 타입

```typescript
// 성공 시
response = { message: 'success', statusCode: 200, data: '0' };
// 실패 시
response = { message: 'fail', statusCode: 400, data: '에러 메세지' };
```
