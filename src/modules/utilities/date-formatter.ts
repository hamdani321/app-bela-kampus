export function formatDate(
  date: string | Date = "2026-11-11 09:55:23.000"
): string {
  return (
    new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Jakarta",
    })
      .format(new Date(date))
      .replace(/\./g, ":") + " WIB"
  );
}
