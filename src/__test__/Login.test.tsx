import { render, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom';

import { InputPassword } from '~/components/LogIn';

const setup = () => {
  render(<InputPassword />);
};
const testValidatePassword = (
  inputValue: string,
  helptextMatch: string | RegExp,
  show: boolean
) => {
  setup();
  const textBox = screen.getByRole('textbox', { name: /(密碼|password)/i });
  // 觸發onChange更新元件狀態
  fireEvent.change(textBox, { target: { value: inputValue } });
  // 觸發onBlur依元件狀態驗證密碼(而非e.target.value)
  fireEvent.blur(textBox);
  if (show) {
    expect(
      screen.getByText(helptextMatch, typeof helptextMatch === 'string' ? { exact: false } : {})
    ).toBeTruthy();
  } else {
    expect(
      screen.queryByText(helptextMatch, typeof helptextMatch === 'string' ? { exact: false } : {})
    ).toBeFalsy();
  }
};

describe('密碼輸入欄位', () => {
  test('成功渲染且足以辨識', () => {
    setup();
    const textBox = screen.getByRole('textbox', { name: /(密碼|password)/i });
    expect(textBox).toBeTruthy();
  });
  test('驗證密碼並給予提示: 只接受底線英文或數字', () => {
    testValidatePassword('一句中文當密碼', '底線', true);
    testValidatePassword('abcd?5678', '底線', true);
    testValidatePassword('abcd_1234', '底線', false);
  });
  test('驗證密碼並給予提示: 長度須大於8個字', () => {
    testValidatePassword('1234567', '大於8個字', true);
    testValidatePassword('12345678', '大於8個字', true);
    testValidatePassword('123456789', '大於8個字', false);
  });
  test('驗證密碼並給予提示: 至少包含1個大寫英文字', () => {
    testValidatePassword('abcde6789', '1個大寫', true);
    testValidatePassword('Abcde6789', '1個大寫', false);
    testValidatePassword('abcd5678E', '1個大寫', false);
    testValidatePassword('abcD56789', '1個大寫', false);
  });
  test('驗證密碼並給予提示: 至少包含1個數字', () => {
    testValidatePassword('abcdefghi', '1個數字', true);
    testValidatePassword('1bcdefghi', '1個數字', false);
    testValidatePassword('abcdefgh9', '1個數字', false);
    testValidatePassword('abcde6ghi', '1個數字', false);
  });
  test('驗證密碼並給予提示: 多個規則一併顯示', () => {
    testValidatePassword('abcd1234', /(?=.*1個大寫)(?=.*8個字)/, true);
    testValidatePassword('abcdefghi', /(?=.*1個數字)(?=.*1個大寫)/, true);
    testValidatePassword('abdf^ghi', /(?=.*8個字)(?=.*底線)/, true);
  });
});
