function isValidValue(value) {
  return !isNullish(value);
}

function isNullish(value) {
  return [undefined, null].includes(value);
}

function joinClassNames(...classNames) {
  return classNames.join(' ');
}

function getFirstChar(value) {
  return value ? value.charAt(0) : '';
}

export { isValidValue, isNullish, joinClassNames, getFirstChar };
