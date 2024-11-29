function getMonthName(monthIndex: number): string {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (monthIndex < 0 || monthIndex > 11) {
    throw new Error("Invalid month index. Must be between 0 and 11.");
  }

  return monthNames[monthIndex];
}

export default getMonthName;
