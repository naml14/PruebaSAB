import UsersListComponent from "../components/UsersListComponent";
import axios from "axios";
import { useState, useEffect } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setUsers(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1 className="text-center mt-4">Lista de Usuarios</h1>
      {error && <p>{error.message}</p>}
      {loading && <p>Cargando...</p>}
      {users && (
        <div className="mt-4 d-flex justify-content-center text-center align-items-center align-content-center ">
          <div className="table-responsive">
            <UsersListComponent users={users} />
          </div>
        </div>
      )}
    </>
  );
};

export default UsersList;
