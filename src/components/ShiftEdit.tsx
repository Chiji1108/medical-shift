"use client";

import { Button } from "@/components/ui/button";
import { addDays } from "date-fns";
import { FastForward } from "lucide-react";
import { useEffect, useState } from "react";
import { CalendarBody } from "./calendar/CalendarBody";
import { CalendarHeader } from "./calendar/CalendarHeader";

export const ShiftEdit = () => {
  const [yearMonth, setYearMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>();

  useEffect(() => {
    if (selectedDate) {
      setYearMonth(selectedDate);
    }
  }, [selectedDate]);

  return (
    <div className="flex flex-col mx-auto max-w-screen-md gap-4">
      <div className="flex flex-col">
        <CalendarHeader yearMonth={yearMonth} setYearMonth={setYearMonth} />
        <CalendarBody
          yearMonth={yearMonth}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      {selectedDate && (
        <div className="flex flex-col gap-4 px-4">
          <div className="flex flex-row justify-between items-center">
            <p className="text-lg font-bold py-1" suppressHydrationWarning>
              {selectedDate.toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "short",
              })}
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedDate(addDays(selectedDate, 1));
              }}
            >
              <FastForward />
              <p className="text-xs">翌日</p>
            </Button>
          </div>
          <Button className="w-full">
            <p>シフト入力パターンを作成</p>
          </Button>
        </div>
      )}
    </div>
  );
};
