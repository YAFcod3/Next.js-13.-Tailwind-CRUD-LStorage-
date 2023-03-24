"use client";
import TaskCard from "@component/components/TaskCard";
import { useTasks } from "@component/context/TaskContext";

function Home() {
  const { tasks } = useTasks();
  console.log(tasks);

  return (
  <div className="flex justify-center"> 
      <div className="w-7/12">
      {tasks.map((task) => (
       <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  </div>
  );
}

export default Home;
