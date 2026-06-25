import { useState, useEffect, useRef } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItem({ todo,
    deleteTodo,
    toggleTodo,
    editTodo }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);
    const editRef = useRef(null);
    const saveHandler = () => {
        if (!editedText.trim()) return;

        editTodo(todo.id, editedText);
        setIsEditing(false);
    };
    useEffect(() => {
        if (isEditing) {
            editRef.current.focus();
            editRef.current.select();
        }
    }, [isEditing]);

    return (
        <div onDoubleClick={() => setIsEditing(true)}
            className={`bg-white py-2 px-4 rounded mb-3 flex justify-between items-center sm:flex-row sm:items-center sm:justify-between transition-all duration-300 hover:bg-gray-200 hover:shadow-md dark:text-black ${todo.isDone ? "opacity-60" : ""}`}>


            <div className="flex items-center w-full sm:w-auto ">
                <input

                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() =>
                        toggleTodo(todo.id)
                    }
                    className=" w-4 h-4  accent-black cursor-pointer"
                />
                {isEditing ? (<input value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            saveHandler();
                        }
                    }}
                    ref={editRef}
                    className=" border-non outline-none focus:outline-none rounded mx-4 " />) : <h3 className={todo.isDone ? "line-through text-red-400 dark:text-red-300  text-lg mx-4  wrap-break-word" : "text-lg mx-4 wrap-break-word  "} >{todo.text}
                </h3>}
            </div>

            <div className="flex gap-3  w-full sm:flex-row sm:w-auto  ">

                <div className="hidden sm:flex sm:items-center gap-3 ">
                    <p className="text-sm ">
                        Priority :{" "}
                        <span
                            className={
                                todo.priority === "High"
                                    ? "text-red-500 font-bold text-sm sm:text-xs"
                                    : todo.priority === "Medium"
                                        ? "text-yellow-500 font-bold text-sm sm:text-xs"
                                        : "text-green-500 font-bold text-sm sm:text-xs"
                            }
                        >
                            {todo.priority}
                        </span>
                    </p>
                    <p className="mx-5 text-xs "> Created At {todo.createdAt}</p>
                </div>

                <button onClick={() => deleteTodo(todo.id)}><DeleteIcon /></button>
                {isEditing ? (<button onClick={saveHandler}>Edit </button>) : (<button onClick={() => setIsEditing(true)}>Edit </button>)}
            </div>
        </div>
    );
}