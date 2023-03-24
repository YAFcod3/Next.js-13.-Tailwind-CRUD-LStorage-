"use client";
import {
  useEffect,
  //  useState
} from "react";
import { useTasks } from "@component/context/TaskContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function Page({ params }) {
  console.log(params);

  const router = useRouter();

  const { tasks, createTask, updateTask } = useTasks();

  //? REACT HOOK FORM
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // const [task, setTask] = useState({
  //   title: "",
  //   description: "",
  // });

  // const handleChange = (e) => {
  //   setTask({ ...task, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault;
  //   if (params.id) {
  //     updateTask(params.id, task);
  //   } else {
  //     [createTask(task.title, task.description)];
  //   }
  //   router.push("/");
  // };

  const onSubmit = handleSubmit((data) => {
    //e.preventDefault
    if (params.id) {
      // updateTask(params.id, task);
      updateTask(params.id, data);
      toast.success("tarea actualizada exitosamente");
    } else {
      //  [createTask(task.title, task.description)];
      [createTask(data.title, data.description)];
      toast.success("tarea creada exitosamente");
    }
    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);

      if (taskFound) {
        // setTask({ title: taskFound.title, description: taskFound.description });
        setValue("title", taskFound.title);
        setValue("description", taskFound.description);
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <form className="bg-gray-700 p-10"
      onSubmit={onSubmit}>
        <input className="bg-gray-800 py-3 px-4 mb-2 block focus:online-none w-full"
          // name="title"
          placeholder="Write a title"
          {...register("title", { required: true })}
          // onChange={handleChange}
          // value={task.title}
        />
        {errors.title && <span className="block text-red-400 mb-2">Este campo es requerido </span>}

        <textarea 
        className="bg-gray-800 py-3 px-4 mb-2 block focus:online-none w-full"
          // name="description"
          placeholder="Write a description"
          {...register("description", { required: true })}
          // onChange={handleChange}
          // value={task.description}
        />
        {errors.description && <span className="block text-red-400 mb-2">Este campo es requerido </span>}

        <button className="bg-green-500 hover:bg-green-400 py-2 rounded-sm diseabled:opacity-30 px-4">Guardar</button>
      </form>
    </div>
  );
}

export default Page;
