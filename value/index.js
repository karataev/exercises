
function value(param) {
  if (typeof param === 'function') {
    return value(param());
  }

  return param;
}

module.exports = value;
