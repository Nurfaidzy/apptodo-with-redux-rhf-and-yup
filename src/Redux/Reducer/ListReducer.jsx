const data = {
  todo: [
    {
      id: 1,
      title: "this is title",
    },
  ],
};

const ListReducer = (state = data, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TAMBAH":
      const databaru = {
        id: state.todo.length + 1,
        title: payload,
      };
      return {
        ...state,
        todo: [...state.todo, databaru],
      };
    case "DELET":
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

export default ListReducer;
