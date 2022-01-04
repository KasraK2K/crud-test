const phoneUtil =
  require("google-libphonenumber").PhoneNumberUtil.getInstance();

function phoneValidator(phone) {
  try {
    const number = phoneUtil.parseAndKeepRawInput(phone);
    return phoneUtil.isValidNumber(number);
  } catch {
    return false;
  }
}

module.exports = phoneValidator;
