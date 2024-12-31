import { Outlet } from "react-router";
import { ThemeProvider, TasksProvider, useHeader } from "./context";

export default function () {
  const { headerText } = useHeader();

  return (
    <ThemeProvider>
      <TasksProvider>
        <div className="bg-slate-300 h-screen p-[3vw]">
          <div className="flex flex-col overflow-hidden h-full max-h-full">
            <h2 className="text-center text-black text-2xl min-h-8 mb-[3vw]">
              {headerText}
            </h2>
            <div className="bg-white dark:bg-gray-900 p-[3vw] h-[calc(100%-6vw)] rounded-lg flex">
              <div className="max-w-[300px] mx-auto flex flex-col items-center gap-4 w-full overflow-auto">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </TasksProvider>
    </ThemeProvider>
  );
}
