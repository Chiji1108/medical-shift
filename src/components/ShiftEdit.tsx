"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  addDays,
  addMonths,
  getDate,
  isSameDay,
  isSameMonth,
  isToday,
  subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight, FastForward } from "lucide-react";
import { useEffect, useState } from "react";
import { WeekList } from "./calendar/WeekList";
import { WeekRow } from "./calendar/WeekRow";
import { HStack, VStack } from "./primitives/layout";

export const ShiftEdit = () => {
  const [yearMonth, setYearMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>();

  useEffect(() => {
    if (selectedDate) {
      setYearMonth(selectedDate);
    }
  }, [selectedDate]);

  return (
    <VStack className="mx-auto max-w-screen-md gap-4">
      <VStack>
        <HStack className="justify-between p-4">
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
        </HStack>
        <WeekRow>
          {(date) => (
            <p className="text-xs">
              {date.toLocaleDateString(undefined, {
                weekday: "short",
              })}
            </p>
          )}
        </WeekRow>
        <WeekList yearMonth={yearMonth}>
          {(date) => (
            <VStack
              className={cn(
                {
                  "opacity-40": !isSameMonth(date, yearMonth),
                },
                selectedDate && isSameDay(date, selectedDate)
                  ? "bg-neutral-900 text-white"
                  : isToday(date)
                  ? "bg-neutral-100"
                  : "bg-background",
                "h-20 rounded-lg p-1"
              )}
              onClick={() => {
                setSelectedDate(date);
              }}
            >
              <p className="text-xs">{getDate(date)}</p>
            </VStack>
          )}
        </WeekList>
      </VStack>
      {selectedDate && (
        <VStack className="gap-4 px-4">
          <HStack className="justify-between items-center">
            <p className="text-lg font-bold py-1">
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
          </HStack>
          <Button className="w-full">
            <p>シフト入力パターンを作成</p>
          </Button>
        </VStack>
      )}
    </VStack>
  );
};
