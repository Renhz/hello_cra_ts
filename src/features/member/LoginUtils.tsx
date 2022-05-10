export const enum ErrorCodePassword {
  ok,
  illegalCharacter,
  tooShort,
  oneUpperCase,
  oneNumber,
  unknown,
}
enum Languages {
  ch,
  en,
}
// type HelptextMap = Record<keyof typeof Languages, Record<keyof typeof ErrorCodePassword, string>>;

export const validatePassword = (inputValue: string): ErrorCodePassword => {
  if (!/^[\w_]*$/.test(inputValue)) {
    return ErrorCodePassword.illegalCharacter;
  }
  if (inputValue.length <= 8) {
    return ErrorCodePassword.tooShort;
  }
  if (!/[A-Z]+/.test(inputValue)) {
    return ErrorCodePassword.oneUpperCase;
  }
  if (!/[\d]+/.test(inputValue)) {
    return ErrorCodePassword.oneNumber;
  }
  return ErrorCodePassword.ok;
};

export const generateHelptext = (
  errorcode: ErrorCodePassword,
  lang: Languages = Languages.ch
): string => {
  switch (lang) {
    case Languages.ch:
      switch (errorcode) {
        case ErrorCodePassword.ok:
          return '';
        case ErrorCodePassword.illegalCharacter:
          return '只接受底線英文或數字';
        case ErrorCodePassword.tooShort:
          return '長度須超過8個字';
        case ErrorCodePassword.oneUpperCase:
          return '須包含至少1個大寫英文字';
        case ErrorCodePassword.oneNumber:
          return '須包含至少1個數字';
        case ErrorCodePassword.unknown:
          return '未知錯誤';
        default:
          return '未知錯誤';
      }
    default:
      switch (errorcode) {
        case ErrorCodePassword.ok:
          return '';
        case ErrorCodePassword.illegalCharacter:
          return '只接受底線英文或數字';
        case ErrorCodePassword.tooShort:
          return '長度須超過8個字';
        case ErrorCodePassword.oneUpperCase:
          return '須包含至少1個大寫英文字';
        case ErrorCodePassword.oneNumber:
          return '須包含至少1個數字';
        case ErrorCodePassword.unknown:
          return '未知錯誤';
        default:
          return '未知錯誤';
      }
  }
};

/* 
      ErrorCodePassword.ok: '',
      ErrorCodePassword.illegalCharacter:'只接受底線英文或數字',
      ErrorCodePassword.tooShort: '長度須超過8個字',
      ErrorCodePassword.oneUpperCase: '須包含至少1個大寫英文字',
      ErrorCodePassword.oneNumber: '須包含至少1個數字',
      ErrorCodePassword.unknown: '未知錯誤',  


*/
