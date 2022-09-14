const paramsToString = (obj) => {
  return new URLSearchParams(obj).toString();
};

module.exports = paramsToString;
