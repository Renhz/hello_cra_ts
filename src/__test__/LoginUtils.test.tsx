import '@testing-library/jest-dom';

import { validatePassword, generateHelptext } from '~/features/member/LoginUtils';

describe('密碼驗證函式，測試驗證次序及回傳結果', () => {
  // "illegalCharacter" | "tooShort" | "oneUpperCase" | "oneNumber" | "ok"
  test('errorCode: illegalCharacter 只接受底線英文或數字', () => {
    expect(validatePassword('一句中文當密碼')).toBe('illegalCharacter');
    expect(validatePassword('abcd?5678')).toBe('illegalCharacter');
    expect(validatePassword('abcd_1234')).not.toBe('illegalCharacter');
  });
  test('errorCode: tooShort 長度須大於8個字', () => {
    expect(validatePassword('1234567')).toBe('tooShort');
    expect(validatePassword('12345678')).toBe('tooShort');
    expect(validatePassword('abcde6789')).not.toBe('tooShort');
  });
  test('errorCode: oneUpperCase 至少包含1個大寫英文字', () => {
    expect(validatePassword('abcdefghi')).toBe('oneUpperCase');
    expect(validatePassword('Abcdefghi')).not.toBe('oneUpperCase');
    expect(validatePassword('abcdefghI')).not.toBe('oneUpperCase');
    expect(validatePassword('AbcdEfghi')).not.toBe('oneUpperCase');
  });
  test('errorCode: oneNumber 至少包含1個數字', () => {
    expect(validatePassword('Abcdefghi')).toBe('oneNumber');
    expect(validatePassword('1bcdefghi')).not.toBe('oneNumber');
    expect(validatePassword('abcdefgh9')).not.toBe('oneNumber');
    expect(validatePassword('abcd5fghi')).not.toBe('oneNumber');
  });
  test('errorCode: ok 以上驗證都通過', () => {
    expect(validatePassword('Abcd_1234')).toBe('ok');
  });
});
