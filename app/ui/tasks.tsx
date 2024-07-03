import { TaskButton, InvisibleTaskButton } from "./taskbutton";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

function TaskContainer({
  title,
  dueDate,
  project,
}: {
  title: string;
  dueDate: string;
  project: string;
}) {
  return (
    <div className="border-b-2 border-gray-300" id="task__container">
      <div className="flex items-center justify-start" id="top__row">
        <TaskButton />
        <p className="text-lg">{title}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center w-1/2">
          {/* Work around for formatting. Potentially revisit in the future. */}
          <InvisibleTaskButton />
          <CalendarDaysIcon
            className="stroke-orange-500 w-4 h-4"
            strokeWidth={1}
          />
          <p className="text-orange-500 text-sm">{dueDate}</p>
        </div>
        <p className="text-gray-300 text-sm">{project}</p>
      </div>
    </div>
  );
}

export { TaskContainer };
