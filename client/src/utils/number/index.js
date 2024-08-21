export const isNumber = (data) => {
  if (typeof data === "number") {
    return true;
  } else if (typeof data === "string") {
    const convertedNumber = Number(data);
    return (
      !isNaN(convertedNumber) &&
      data.trim() !== "" &&
      convertedNumber.toString() === data.trim()
    );
  }
  return false;
};
