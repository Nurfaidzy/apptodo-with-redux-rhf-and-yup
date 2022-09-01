import { useForm } from "react-hook-form";
import ValidasiInput from "./ValidasiInput";
import { yupResolver } from "@hookform/resolvers/yup";
const InputTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidasiInput) });
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: "Mohon masukkan" })}
        />
        <br />
        {errors.title && errors.title.message}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default InputTodo;
