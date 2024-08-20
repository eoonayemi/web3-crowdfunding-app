export const shortenStr = (str) => {
  const maxLength = 100;
  const suffix = "....";

  if (str.length > maxLength) {
    return str.slice(0, maxLength - suffix.length).trimEnd() + suffix;
  } else {
    return str;
  }
};
export const shortenAddress = (str) => {
  const maxLength = 100;
  const suffix = "..";

  if (str.length > maxLength) {
    return str.slice(0, maxLength - suffix.length) + suffix;
  } else {
    return str;
  }
};
