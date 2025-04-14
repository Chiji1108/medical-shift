import { Calendar } from "@/components/calendar/Calendar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col h-screen pt-20">
      <header className="fixed top-0 left-0 right-0 flex justify-center z-10">
        <div className="flex-1 flex justify-between items-center rounded-full bg-background border border-border px-4 py-2 max-w-screen-md m-4 shadow-xs">
          <h1 className="text-xl font-bold">Medical Shift</h1>
          <Button variant="ghost">
            <Menu />
          </Button>
        </div>
      </header>
      <div>
        <main>
          <Calendar />
        </main>
      </div>
    </div>
  );
}
