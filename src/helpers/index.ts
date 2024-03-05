export function formatDate(date: Date) {
  const userDate = new Date(date);
  const month = userDate.toLocaleDateString("en-US", {
    month: "short",
  });

  return `${userDate.getDate()} ${month} ${userDate.getFullYear()}`;
}
