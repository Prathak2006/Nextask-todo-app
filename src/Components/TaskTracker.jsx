export default function TaskTracker({ filter, setFilter, todos }) {

    const total = todos.length;
    const completed = todos.filter((todo) => todo.isDone).length;
    const pending = total - completed;
    
    return (
        <div className="grid grid-cols-3 gap-4 mb-6 w-full md:w-3/4 mx-auto my-8 ">

            <div
                onClick={() => setFilter("all")}
                className="cursor-pointer bg-[#E8D8A8] p-4 rounded-xl   shadow-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            >
                <h3>{total}</h3>
                <p>Total</p>
            </div>

            <div
                onClick={() => setFilter("pending")}
                className="cursor-pointer bg-[#E7B5B5] p-4 rounded-xl   shadow-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            >
                <h3>{pending}</h3>
                <p>Pending</p>
            </div>
            <div
                onClick={() => setFilter("completed")}
                className="cursor-pointer bg-[#B7DEC1] p-4 rounded-xl   shadow-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-1 "
            >
                <h3>{completed}</h3>
                <p>Completed</p>
            </div>

        </div>
    );
}