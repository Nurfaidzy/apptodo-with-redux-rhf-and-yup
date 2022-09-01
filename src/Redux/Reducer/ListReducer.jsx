const data = {
  todo: [
    {
      id: 1,
      title: "this is title",
    },
  ],
};

const ListReducer = (state = data, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ListReducer;
