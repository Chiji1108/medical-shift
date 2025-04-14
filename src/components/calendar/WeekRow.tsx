import { getWeekDates } from "@/lib/date";
import { FC, ReactNode } from "react";

type WeekRowProps = {
  date?: Date;
  children: (date: Date) => ReactNode;
};

export const WeekRow: FC<WeekRowProps> = ({ date = new Date(), children }) => {
  return (
    <div className="flex flex-row">
      {getWeekDates(date).map((weekDate, index) => (
        <div
          key={index}
          className="flex-1 items-center justify-center text-center"
        >
          {children(weekDate)}
        </div>
      ))}
    </div>
  );
};
