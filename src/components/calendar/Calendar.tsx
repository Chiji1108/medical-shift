"use client";

import { Button } from "@/components/ui/button";
import { getWeekdaySymbol } from "@/lib/date";
import { cn } from "@/lib/utils";
import {
  addMonths,
  format,
  getDate,
  isSameMonth,
  isToday,
  subMonths,
} from "date-fns";
import { ja } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { WeekList } from "./WeekList";
import { WeekRow } from "./WeekRow";

export const Calendar = () => {
  const [yearMonth, setYearMonth] = useState(new Date());

  return (
    <div className="flex flex-col mx-auto max-w-screen-md">
      <div className="flex justify-between p-4">
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
          {format(yearMonth, "yo MMMM", { locale: ja })}
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
      <WeekRow>
        {(date) => (
          <p className="text-xs">{getWeekdaySymbol(date, "veryShort")}</p>
        )}
      </WeekRow>
      <WeekList yearMonth={yearMonth}>
        {(date) => (
          <p
            className={cn(
              {
                "bg-neutral-100": isToday(date),
                "opacity-40": !isSameMonth(date, yearMonth),
              },
              "h-20 rounded-xl text-xs"
            )}
          >
            {getDate(date)}
          </p>
        )}
      </WeekList>
    </div>
  );
};
