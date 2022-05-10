import '@testing-library/jest-dom';

import { validatePassword, ErrorCodePassword } from '~/features/member/LoginUtils';

describe('密碼驗證函式，測試驗證次序及回傳結果', () => {
  test('errorCode: illegalCharacter 只接受底線英文或數字', () => {
    expect(validatePassword('一句中文當密碼')).toBe(ErrorCodePassword.illegalCharacter);
    expect(validatePassword('abcd?5678')).toBe(ErrorCodePassword.illegalCharacter);
    expect(validatePassword('abcd_1234')).not.toBe(ErrorCodePassword.illegalCharacter);
  });
  test('errorCode: tooShort 長度須大於8個字', () => {
    expect(validatePassword('1234567')).toBe(ErrorCodePassword.tooShort);
    expect(validatePassword('12345678')).toBe(ErrorCodePassword.tooShort);
    expect(validatePassword('abcde6789')).not.toBe(ErrorCodePassword.tooShort);
  });
  test('errorCode: oneUpperCase 至少包含1個大寫英文字', () => {
    expect(validatePassword('abcdefghi')).toBe(ErrorCodePassword.oneUpperCase);
    expect(validatePassword('Abcdefghi')).not.toBe(ErrorCodePassword.oneUpperCase);
    expect(validatePassword('abcdefghI')).not.toBe(ErrorCodePassword.oneUpperCase);
    expect(validatePassword('AbcdEfghi')).not.toBe(ErrorCodePassword.oneUpperCase);
  });
  test('errorCode: oneNumber 至少包含1個數字', () => {
    expect(validatePassword('Abcdefghi')).toBe(ErrorCodePassword.oneNumber);
    expect(validatePassword('1bcdefghi')).not.toBe(ErrorCodePassword.oneNumber);
    expect(validatePassword('abcdefgh9')).not.toBe(ErrorCodePassword.oneNumber);
    expect(validatePassword('abcd5fghi')).not.toBe(ErrorCodePassword.oneNumber);
  });
  test('errorCode: ok 以上驗證都通過', () => {
    expect(validatePassword('Abcd_1234')).toBe(ErrorCodePassword.ok);
  });
});
