export function formatDate(date) {
  let a = new Date(date);
  const format = {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  };
  const formattedDate = a.toLocaleString(undefined, format);
  return formattedDate
}
