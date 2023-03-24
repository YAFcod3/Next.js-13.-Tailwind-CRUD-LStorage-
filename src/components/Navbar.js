"use client";
import { useTasks } from "@component/context/TaskContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const { tasks } = useTasks();

  const router = useRouter();
  return (
    <header className="flex items-center justify-between bg-gray-800 px-28 py-3 ">
      <Link href="/">
        <h1 className="font-bold text-3x1 text-white">
          App Tareas
          <span className="text-sm text-slate-300 ml-5 ">{tasks.length} Tareas</span>
        </h1>
      </Link>

      <div>
        <button
          className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex items-center"
          onClick={() => router.push("/new")}
        >
          Añadir Tarea
        </button>
      </div>
    </header>
  );
}

export default Navbar;
