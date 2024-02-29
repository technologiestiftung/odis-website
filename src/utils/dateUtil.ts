export const formatGermanDate = (date: Date): string => {
  const dateNextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
  const dateFormatted = dateNextDay.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return dateFormatted;
};
