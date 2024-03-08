import { columns } from "../components/task/columns";
import { DataTable } from "../components/task/data-table";
import { UserNav } from "../components/task/user-nav-task";
import tasks from "../data/tasks.json";

export default function TaskPage() {
  return (
    <>
      <div className=" h-full flex-1 flex-col space-y-8 p-8 flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
