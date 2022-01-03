const emptyKeyRemover = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((prop) => {
    if (obj[prop] || obj[prop] === 0 || obj[prop] === false)
      newObj[prop] = obj[prop];
  });
  return newObj;
};

module.exports = emptyKeyRemover;
