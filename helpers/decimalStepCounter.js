

export const decimalStepCounter = (num) => {

  let res = '1';

  for (let i = 0; i < num; i += 1) {
    res += '0';
  }
  return 1/res;
}