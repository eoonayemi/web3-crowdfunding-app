export const getMilliseconds = (dateString) => {
  const date = new Date(dateString);
  return date.getTime();
};

export const daysUntil = (targetDate) => {
  const futureDate = new Date(targetDate);
  const currentDate = new Date();
  const timeDifference = futureDate.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysLeft;
};
