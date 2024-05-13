import { useForm } from "react-hook-form";
import axios from "axios";
import "../assets/inputNumber.css";

const AddUserComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit((datos) => {
    axios
      .post("http://localhost:3000/users/", datos)
      .then(() => {
        alert("Usuario agregado");
      })
      .catch(() => {
        alert("Error al agregar el usuario");
      });
    reset();
  });

  return (
    <form className="row g-3 needs-validation" noValidate onSubmit={onSubmit}>
      <div className="col-md-6">
        <label htmlFor="nombre" className="form-label">
          Nombres
        </label>
        <input
          type="text"
          className="form-control"
          {...register("nombre", {
            required: { value: true, message: "Este campo es requerido" },
          })}
        />
        {errors.nombre && (
          <span className="text-danger text-uppercase small">
            {errors.nombre.message}
          </span>
        )}
      </div>
      <div className="col-md-6">
        <label htmlFor="apellido" className="form-label">
          Apellidos
        </label>
        <input
          type="text"
          className="form-control"
          {...register("apellido", {
            required: { value: true, message: "Este campo es requerido" },
          })}
        />
        {errors.apellido && (
          <span className="text-danger text-uppercase small">
            {errors.apellido.message}
          </span>
        )}
      </div>
      <div className="col-md-7">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          {...register("email", {
            required: { value: true, message: "Este campo es requerido" },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Email inválido",
            },
          })}
        />
        {errors.email && (
          <span className="text-danger text-uppercase small">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="col-md-5">
        <label htmlFor="dni" className="form-label">
          DNI
        </label>
        <input
          type="number"
          className="form-control"
          {...register("dni", {
            required: { value: true, message: "Este campo es requerido" },
            minLength: { value: 7, message: "DNI inválido" },
            maxLength: { value: 10, message: "DNI inválido" },
          })}
        />
        {errors.dni && (
          <span className="text-danger text-uppercase small">
            {errors.dni.message}
          </span>
        )}
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </form>
  );
};

export default AddUserComponent;
