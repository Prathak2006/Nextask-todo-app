import TodoItem from "./TodoItem";
import FilterButton from "./FilterButton";

export default function TodoList({
  todos,
  filter,
  deleteTodo,
  toggleTodo,
  editTodo,
  setFilter }) {
    
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.isDone;
    }
    if (filter === "pending") {
      return !todo.isDone;
    }

    return true;
  });


  return (
    <div className="bg-[#9BC7BC] dark:bg-gray-800 rounded-xl p-4 w-full md:w-3/4 min-h-[50vh] mx-auto  shadow-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-1 dark:text-white">
      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Your Tasks
        </h2>

        <FilterButton
          filter={filter}
          setFilter={setFilter}
        />

      </div>
      {filteredTodos.length === 0 ? (
        <div className="flex justify-center items-center min-h-[40vh]">
          <p className="text-gray-500 dark:text-gray-400">
            No Tasks Found
          </p>
        </div>
      ) : (filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      )))}

    </div>
  )
}