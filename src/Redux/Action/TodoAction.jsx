export const add = (title) => {
  return {
    type: "TAMBAH",
    payload: title,
  };
};

export const del = (id) => {
  return {
    type: "DELET",
    payload: id,
  };
};
