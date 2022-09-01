import * as yup from "yup";

const ValidasiInput = yup.object().shape({
  title: yup.string().min(4).required(),
});

export default ValidasiInput;
