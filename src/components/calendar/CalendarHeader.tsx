import { addMonths, subMonths } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";

interface CalendarHeaderProps {
  yearMonth: Date;
  setYearMonth: (date: Date) => void;
}

export const CalendarHeader: FC<CalendarHeaderProps> = ({
  yearMonth,
  setYearMonth,
}) => {
  return (
    <div className="flex flex-row justify-between p-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          setYearMonth(subMonths(yearMonth, 1));
        }}
      >
        <ChevronLeft />
      </Button>
      <p className="text-2xl font-bold">
        {yearMonth.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
        })}
      </p>
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          setYearMonth(addMonths(yearMonth, 1));
        }}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};
