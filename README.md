# nestjs-direct-send

- 다이렉트 샌드 이메일 발송 관련 nestjs 라이브러리 입니다.
- 개인적으로 사용하려고 모듈화 한 것이기 때문에 다이렉트샌드 api에 대한 자세한 내용은 아래 링크에서 확인 가능합니다.<br>
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
import { Module } from '@nestjs/common'가
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
}
```

<br>

### 1-3. sendEmail(data: SEND_EMAIL_PARAMS)

```typescript
sendEmail(data: SEND_EMAIL_PARAMS): Promise<RESPONSE_TYPE>
```

### 1-4. SEND_EMAIL_PARAMS, RESPONSE_TYPE

```typescript
interface SEND_EMAIL_PARAMS {
  subject: string; // 메일 제목
  receiver: { email: string; name?: string; mobile?: string; note1?: string; note2?: string }[]; // 메일 수신자 리스트
  body?: string; // 메일 내용 (html)
  sender?: string; // 메일 발신자 이메일
  sender_name?: string; // 메일 발신자 이름
}

interface RESPONSE_TYPE {
  message: string; // 'success OR fail'
  statusCode: number; // 200 OR 400
  data: any; // '0' OR '개별 에러 메세지'
}
```

<br>

### 1-5. API 리턴 타입

```typescript
// 성공 시
response = { message: 'success', statusCode: 200, data: '0' };
// 실패 시
response = { message: 'fail', statusCode: 400, data: '에러 메세지' };
```
