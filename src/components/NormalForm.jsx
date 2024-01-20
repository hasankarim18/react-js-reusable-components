import { useForm } from "react-hook-form";

export default function NormalForm() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        className="mt-4 border-2 p-2 rounded-md block"
        defaultValue="test"
        {...register("firstName")}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        className="mt-4 border-2 p-2 rounded-md block"
        {...register("lastName", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input
        className="px-4 block py-2 mt-4 bg-green-400 rounded-lg"
        type="submit"
      />
    </form>
  );
}
