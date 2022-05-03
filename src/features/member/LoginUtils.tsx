export const validatePassword = (inputValue: string) => {
  if (!/^[\w_]*$/.test(inputValue)) {
    return 'illegalCharacter';
  }
  if (inputValue.length <= 8) {
    return 'tooShort';
  }
  if (!/[A-Z]+/.test(inputValue)) {
    return 'oneUpperCase';
  }
  if (!/[\d]+/.test(inputValue)) {
    return 'oneNumber';
  }
  return 'ok';
};

type ErrorCodePassword =
  | 'ok'
  | 'illegalCharacter'
  | 'tooShort'
  | 'oneUpperCase'
  | 'oneNumber'
  | 'unknown';

interface HelptextMap {
  ch: string;
}

type Lang = keyof HelptextMap;

export function generateHelptext(errorcode: ErrorCodePassword, lang: Lang = 'ch'): string {
  const helptextMap: Record<ErrorCodePassword, HelptextMap> = {
    ok: {
      ch: '',
    },
    illegalCharacter: {
      ch: '只接受底線英文或數字',
    },
    tooShort: {
      ch: '長度須超過8個字',
    },
    oneUpperCase: {
      ch: '須包含至少1個大寫英文字',
    },
    oneNumber: {
      ch: '須包含至少1個數字',
    },
    unknown: {
      ch: '未知錯誤',
    },
  };
  if (helptextMap[errorcode]) {
    return helptextMap[errorcode][lang];
  }
  return helptextMap.unknown[lang] ?? helptextMap.unknown.ch;
}
