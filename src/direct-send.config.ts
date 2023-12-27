export interface DirectSendModuleOptions {
  /**
   * 다이렉트센드 발급 ID (로그인 ID)
   */
  username: string;

  /**
   * 다이렉트센드 발급 API KEY
   */
  key: string;
}

export const EMAIL_CONSTANTS = {
  URL: 'https://directsend.co.kr/index.php/api_v2/mail_change_word',
};

export interface SEND_EMAIL_PARAMS {
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
  sender_name: string;

  /**
   * 메일 수신자 배열
   */
  receiver: { email: string; name?: string; mobile?: string; note1?: string; note2?: string }[];

  /**
   * 메일 내용 (html)
   */
  body?: string;
}
