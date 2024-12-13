import { useSelector } from "react-redux";
import TodoItems from "./TodoItems";

function Todos() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="flex justify-between items-center">
              <TodoItems todo={todo} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
