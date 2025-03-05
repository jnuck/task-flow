import tasks from "../../assets/tasks.json";

export default function Task() {
  return (
    <div className="flex flex-col ">
      {tasks.map((task) => (
        <div key={task.id} className="bg-amber-600 p-3 m-3 rounded-2xl">
          <p className="text-2xl">{task.title}</p>
          <div className="flex flex-row justify-between">
            <p>{task.priority}</p>
            <p>{task.dueDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
