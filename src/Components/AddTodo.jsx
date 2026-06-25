
import { useState } from "react";
export default function AddTodo({ addTodo }) {
    const [task, setTask] = useState("");

    const [priority, setPriority] = useState("None");
    
    const submitHandler = (e) => {
        e.preventDefault();
        if (!task.trim()) return;

        addTodo(task , priority);

        setTask("");
    }
    return (

        <form onSubmit={submitHandler} className="flex flex-col gap-3  mb-5 sm:gap-2 sm:mb-3 sm:flex-row " >
            <input type="text" className="border p-3 sm:p-1 flex-1 rounded bg-white text-gray-900 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5  " value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add Task " />
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className="border rounded p-3 sm:p-1 bg-white text-gray-900 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5  ">
               <option value="Priority" className="bg-black text-white">
                    Priority 
                </option>
               
                <option value="High" className="bg-black text-white">
                    High
                </option>

                <option value="Medium" className="bg-black text-white">
                    Medium
                </option>

                <option value="Low" className="bg-black text-white">
                    Low
                </option>
            </select>
            <button type="submit " className=" bg-black text-white  px-5 rounded transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 sm:py-4">Add Task </button>
            
        </form>

    );
}