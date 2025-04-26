import { cn } from "@/lib/utils";
import { getDate, isSameDay, isSameMonth, isToday } from "date-fns";
import { FC } from "react";
import { WeekList } from "./WeekList";
import { WeekRow } from "./WeekRow";

interface CalendarBodyProps {
  yearMonth: Date;
  selectedDate?: Date;
  setSelectedDate: (date: Date) => void;
}

export const CalendarBody: FC<CalendarBodyProps> = ({
  yearMonth,
  selectedDate,
  setSelectedDate,
}) => {
  return (
    <>
      <WeekRow>
        {(date) => (
          <p className="text-xs" suppressHydrationWarning>
            {date.toLocaleDateString(undefined, {
              weekday: "short",
            })}
          </p>
        )}
      </WeekRow>
      <WeekList yearMonth={yearMonth}>
        {(date) => (
          <div
            className={cn(
              "flex flex-col h-20 rounded-lg p-1 cursor-pointer",
              {
                "opacity-40": !isSameMonth(date, yearMonth),
              },
              selectedDate && isSameDay(date, selectedDate)
                ? "bg-neutral-900 text-white"
                : isToday(date)
                ? "bg-neutral-100"
                : "bg-background hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
            )}
            onClick={() => {
              setSelectedDate(date);
            }}
          >
            <p className="text-xs">{getDate(date)}</p>
          </div>
        )}
      </WeekList>
    </>
  );
};
