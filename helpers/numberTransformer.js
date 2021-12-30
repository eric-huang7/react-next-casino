export const numberTransformer = (strNumber) => {

  let index;

  for (let i = strNumber.length - 1; i >= 0; i -= 1) {
    if (strNumber[i] !== "0") {
      index = i + 1;
      break
    }
  }
  let res = strNumber.slice(0, index);
  if (res[res.length - 1] === '.') {
    res = res + "00";
  }
  return res;
}