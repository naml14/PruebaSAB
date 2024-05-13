import AddUserComponent from "../components/AddUserComponent";

const AddUser = () => {
  return (
    <>
      <div className="container-fluid mt-4 text-center">
        <h1>Agregar Usuario</h1>
        <div className="mt-4 d-flex justify-content-center">
          <AddUserComponent />
        </div>
      </div>
    </>
  );
};

export default AddUser;
