import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://ghastly-shadow-83532.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added Successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <h2 className="my-3">ADD A Service</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="my-5 w-50 mx-auto">
        <input
          className="form-control mb-3"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="name"
        />
        <input
          className="form-control mb-3"
          {...register("details")}
          placeholder="details"
        />
        <input
          className="form-control mb-3"
          {...register("img")}
          placeholder="image link"
        />
        <input
          className="form-control mb-3"
          type="text"
          {...register("price")}
          placeholder="price with some text"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
