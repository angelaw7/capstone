export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + 1));
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export const wrapText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    const index = text.lastIndexOf(" ", maxLength);
    return text.substring(0, index) + "\n" + text.substring(index + 1);
  }
  return text;
};
