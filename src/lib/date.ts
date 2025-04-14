import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { ja } from "date-fns/locale";

// Define the style for month and weekday symbols
export type SymbolStyle = "full" | "short" | "veryShort";

/**
 * Returns the month name in the specified style.
 * @param date The date.
 * @param style The display style ('full', 'short', 'veryShort').
 * @returns The month name as a string.
 */
export const getMonthSymbol = (date: Date, style: SymbolStyle): string => {
  switch (style) {
    case "full":
      return format(date, "MMMM", { locale: ja }); // 1月, 2月...
    case "short":
      return format(date, "MMM", { locale: ja }); // 1月, 2月...
    case "veryShort":
      return format(date, "MMMMM", { locale: ja }); // 1月, 2月...
  }
};

/**
 * Returns the weekday name in the specified style.
 * @param date The date.
 * @param style The display style ('full', 'short', 'veryShort').
 * @returns The weekday name as a string.
 */
export const getWeekdaySymbol = (date: Date, style: SymbolStyle): string => {
  switch (style) {
    case "full":
      return format(date, "EEEE", { locale: ja }); // 日曜日, 月曜日...
    case "short":
      return format(date, "EEE", { locale: ja }); // 日, 月...
    case "veryShort":
      return format(date, "EEEEE", { locale: ja }); // 日, 月...
  }
};

// --- Week Related Functions ---

/**
 * Returns an array of dates representing all days in the week containing this date.
 * (assuming week starts on Sunday)
 */
export const getWeekDates = (date: Date): Date[] => {
  const start = startOfWeek(date);
  const end = endOfWeek(date);
  return eachDayOfInterval({ start, end });
};

/**
 * Returns an array containing the first day of each week for the given month.
 * (assuming week starts on Sunday)
 */
export const getWeeksOfMonth = (date: Date): Date[] => {
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  return eachWeekOfInterval({ start, end });
};
