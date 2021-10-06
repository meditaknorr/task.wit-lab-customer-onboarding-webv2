const regEX = {
  date: new RegExp('^([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}$', 'i'),
  number: new RegExp('^[0-9]*$', 'gm'),
  voters: new RegExp('^[0-9-/()]+$', 'g'),
  address: new RegExp('^[A-Za-z0-9.,\\s\u0080-\uFFFF/]+$', 'g'),
  text: new RegExp('^[A-Za-z\\s\\s\u0080-\uFFFF/]+$', 'g'),
  email: new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$', 'i'),
};

export const dateValidator = (strings) => {
  if (strings.length <= 0) {
    return false;
  }
  const current = new Date();
  const currentYear = current.getFullYear();
  const validator = regEX.date;
  const stringYear = strings.slice(6);
  const isAboveSixteen = currentYear - 16;

  validator.lastIndex = 0;

  if (stringYear >= 1950 && stringYear <= isAboveSixteen) {
    return validator.test(strings);
  }
  return false;
};

export const numberValidator = (strings) => {
  if (strings.length <= 0) {
    return false;
  }
  const validator = regEX.date;
  validator.lastIndex = 0;
  return validator.test(strings);
};

export const voterValidator = (strings) => {
  if (strings.length <= 0) {
    return false;
  }
  const validator = regEX.voters;
  validator.lastIndex = 0;
  return validator.test(strings);
};

export const addressValidator = (strings) => {
  if (strings.length <= 0) {
    return false;
  }
  const validator = regEX.date;
  const result = validator.test(strings);
  validator.lastIndex = 0;
  return result;
};

export const textValidator = (strings) => {
  if (strings.length <= 0) {
    return false;
  }
  const validator = regEX.text;
  validator.lastIndex = 0;
  return validator.test(strings);
};
