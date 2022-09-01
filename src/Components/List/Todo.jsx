import { useSelector, useDispatch } from "react-redux";
import { del } from "../../Redux/Action/TodoAction";

const Todo = () => {
  const todos = useSelector((state) => state.lists.todo);
  const dispatch = useDispatch();
  const hapus = (id) => {
    dispatch(del(id));
  };
  return (
    <div>
      <div>Todo</div>
      <div>
        {todos.map((item, index) => (
          <ol key={(index = item.id)}>
            <li>{item.title}</li>
            <li>
              <button onClick={() => hapus(item.id)}>X</button>
            </li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default Todo;
