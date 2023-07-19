import { isBefore, format, parseISO } from "date-fns";

export default function isDateBefore(params) {
  const date = params.split("-");
  const day = Number(date[2]);
  const month = Number(date[1] - 1);
  const year = Number(date[0]);

  const newDate = format(new Date(year, month, day), "yyyy-MM-dd");
  const currentDate = format(new Date(), "yyyy-MM-dd");

  return isBefore(parseISO(newDate), parseISO(currentDate));
}
