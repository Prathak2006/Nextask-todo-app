import { useState, useEffect, useRef } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
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

    const priorityColor =
        todo.priority === "High"
            ? "text-rose-500 sm:text-gray-900 "
            : todo.priority === "Medium"
                ? "text-amber-500 sm:text-gray-900 "
                : "text-sky-500 sm:text-gray-900 ";


    return (
        <div onDoubleClick={() => setIsEditing(true)}
            className={`bg-white py-2 px-4 rounded mb-3 flex justify-between items-center transition-all duration-300 hover:bg-gray-200 hover:shadow-md dark:text-black ${todo.isDone ? "opacity-60" : ""
                }`}>


            <div className="flex items-center min-w-0 ">
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
                    className=" border-non outline-none focus:outline-none rounded mx-4 " />)
                    : <h3
                        className={`text-lg mx-4 wrap-break-word ${todo.isDone
                                ? "line-through text-gray-900 dark:text-gray-800"
                                : priorityColor
                            }`}
                    >
                        {todo.text}
                    </h3>}
            </div>

            <div className="flex items-center gap-3 ml-auto shrink-0  ">

                <div className=" hidden sm:flex sm:items-center gap-3">
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
                {isEditing ? (<button onClick={saveHandler}><EditNoteIcon /> </button>) : (<button onClick={() => setIsEditing(true)}><EditNoteIcon /> </button>)}
            </div>
        </div>
    );
}