const howLong = (text) => {
  if (text.length === 1 || text.lenght <= 10) {
    return Error;
  }
  return text.length;
};
module.exports = howLong;