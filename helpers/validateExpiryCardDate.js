export const validateExpiry = (input) => {
  // ensure basic format is correct
  if (input.match(/^(0\d|1[0-2])\/\d{2}$/)) {
    const {0: month, 1: year} = input.split("/");

    // get midnight of first day of the next month
    const expiry = new Date("20"+year, month);
    const current = new Date();

    return expiry.getTime() > current.getTime();

  } else {
    return false;
  }
}