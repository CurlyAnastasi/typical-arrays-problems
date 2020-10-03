exports.min = function min(array) {
  const reducer = (previousValue, currentValue) => {
    if (isNaN(previousValue) || isNaN(currentValue)) {
      return 0;
    } else {
      return previousValue <= currentValue ? previousValue : currentValue;
    }
  }
  return array == null || array.length == 0 ? 0 : array.reduce(reducer);
}


exports.max = function max(array) {
  const reducer = (previousValue, currentValue) => {
    if (isNaN(previousValue) || isNaN(currentValue)) {
      return 0;
    } else {
      return previousValue >= currentValue ? previousValue : currentValue;
    }
  }

  return array == null || array.length === 0 ? 0 : array.reduce(reducer);
}

exports.avg = function avg(array) {
  let sum;
  let avg;

  const reducer = (previousValue, currentValue) => {
    if (isNaN(previousValue) || isNaN(currentValue)) {
      return 0;
    } else {
      return previousValue + currentValue;
    }
  }

  sum = array == null || array.length == 0 ? 0 : array.reduce(reducer);
  avg = sum === 0 ? 0 : sum / array.length;

  return avg;
}
