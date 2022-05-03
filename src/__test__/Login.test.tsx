import { render, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom';

import { InputPassword } from '~/components/LogIn';
import * as loginUtils from '~/features/member/LoginUtils';

describe('密碼輸入欄位', () => {
  const mockValidatePassword = jest.spyOn(loginUtils, 'validatePassword');
  const mockGenerateHelptext = jest.spyOn(loginUtils, 'generateHelptext');
  const setup = () => {
    render(<InputPassword />);
    const textBox: HTMLInputElement = screen.getByRole('textbox', { name: /(密碼|password)/i });
    return textBox;
  };
  test('成功渲染足以辨識，可以輸入文字', () => {
    const textBox = setup();
    expect(textBox).toBeTruthy();
    fireEvent.change(textBox, { target: { value: 'testInput' } });
    expect(textBox.value).toBe('testInput');
  });
  test('輸入值變動時，呼叫validatePassword及generateHelptext', () => {
    const textBox = setup();
    fireEvent.change(textBox, { target: { value: 'testInput' } });
    expect(mockValidatePassword).toHaveBeenCalled();
    expect(mockGenerateHelptext).toHaveBeenCalled();
  });
  test('傳給validatePassword的參數正確', () => {
    const textBox = setup();
    fireEvent.change(textBox, { target: { value: 'testInput' } });
    expect(mockValidatePassword.mock.calls[0]?.[0]).toBe('testInput');
  });
  test('傳給generateHelptext的參數正確', () => {
    const textBox = setup();
    mockValidatePassword.mockReturnValue('illegalCharacter');
    fireEvent.change(textBox, { target: { value: 'testInput' } });
    expect(mockGenerateHelptext.mock.calls[0]?.[0]).toBe('illegalCharacter');
  });
  test('依generateHelptext回傳文字顯示錯誤提示', () => {
    const textBox = setup();
    mockGenerateHelptext.mockReturnValue('fakeHelptext');
    fireEvent.change(textBox, { target: { value: 'testInput' } });
    expect(screen.getByText('fakeHelptext')).toBeTruthy();
  });
});
