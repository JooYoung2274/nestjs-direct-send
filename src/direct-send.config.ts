export const EMAIL_CONSTANTS = {
  SEND_EMAIL_URL: 'https://directsend.co.kr/index.php/api_v2/mail_change_word',
  SEND_SMS_URL: 'https://directsend.co.kr/index.php/api_v2/sms_change_word',
  GET_REMAINING_MONEY_URL: 'https://directsend.co.kr/index.php/api_v2/remaining_money',
};

export type RESPONSE_TYPE<T> = {
  message: string;
  statusCode: number;
  data: T;
};

export type DIRECT_SEND_MODULE_OPTIONS = {
  /**
   * 다이렉트센드 발급 ID (로그인 ID)
   */
  username: string;

  /**
   * 다이렉트센드 발급 API KEY
   */
  key: string;
};

export type SEND_EMAIL_PARAMS = {
  /**
   * 메일 제목
   */
  subject: string;

  /**
   * 메일 발송자
   */
  sender: string;

  /**
   * 메일 발송자 이름
   */
  sender_name?: string;

  /**
   * 메일 수신자 배열
   */
  receiver: { email: string; name?: string; mobile?: string; note1?: string; note2?: string }[];

  /**
   * 메일 내용 (html)
   */
  body: string;
};

export type DIRECT_SEND_SMS_REQUEST_TYPE = {
  /**
   * MMS/LMS의 제목
   */
  title?: string;

  /**
   * 문자 내용
   */
  message: string;

  /**
   * 발송자번호/하이픈 없이 입력합니다. (directsend.co.kr 로그인 -> 대량문자발송 -> 발송번호등록 에서 등록된 번호만 사용가능합니다.) / DirectSendSmsReceiverType를 string으로 변환
   */
  sender: string;

  /**
   * 문자 수신자 배열
   */
  receiver: { mobile: string; name?: string; note1?: string; note2?: string }[];

  /**
   * 즉시발송 / 예약 발송을 구분합니다.
   * NORMAL - 즉시발송 / ONETIME - 1회예약 / WEEKLY - 매주정기예약 / MONTHLY - 매월정기예약
   * 현재 예약 발송은 미구현 상태입니다.
   */
  sms_type: string;
};
