export default function FilterButton({filter,setFilter}) {
  
  return (
    <div className="flex gap-2">

      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 rounded-lg text-sm transition-all
          ${
            filter === "all"
              ? "bg-black text-white hover:shadow-md hover:-translate-y-0.5 duration-200"
              : "bg-gray-100 dark:bg-gray-700 dark:text-white hover:bg-black hover:text-white duration-200 hover:scale-105 "
          }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`px-4 py-2 rounded-lg text-sm transition-all 
          ${
            filter === "pending"
              ? "bg-black text-white hover:shadow-md hover:-translate-y-0.5 duration-200"
              : "bg-gray-100 dark:bg-gray-700 dark:text-white hover:bg-black hover:text-white duration-200 hover:scale-105"
          }`}
      >
        Pending
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-2 rounded-lg text-sm transition-all
          ${
            filter === "completed"
              ? "bg-black text-white hover:shadow-md hover:-translate-y-0.5 duration-200"
              : "bg-gray-100 dark:bg-gray-700 dark:text-white hover:bg-black hover:text-white duration-200 hover:scale-105"
          }`}
      >
        Completed
      </button>

    </div>
  );
}