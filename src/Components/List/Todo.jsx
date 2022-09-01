import { useSelector } from "react-redux";

const Todo = () => {
  const todos = useSelector((state) => state.lists.todo);
  return (
    <div>
      <div>Todo</div>
      <div>
        {todos.map((item, index) => (
          <ol key={(index = item.id)}>
            <li>{item.title}</li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default Todo;
