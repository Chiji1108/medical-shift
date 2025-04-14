import { getWeeksOfMonth } from "@/lib/date";
import { FC, ReactNode } from "react";
import { WeekRow } from "./WeekRow";

type WeekListProps = {
  yearMonth: Date;
  children: (date: Date) => ReactNode;
};

export const WeekList: FC<WeekListProps> = ({ yearMonth, children }) => {
  const weeks = getWeeksOfMonth(yearMonth);

  return (
    <div className="flex flex-col">
      {weeks.map((week, index) => (
        <WeekRow key={index} date={week}>
          {children}
        </WeekRow>
      ))}
    </div>
  );
};
