import { useState } from "react";
import DeleteUserModal from "./DeleteUserModal";
import { Button } from "react-bootstrap";

const UserList = (users) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState({});
  const data = users.users;

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = (data) => {
    setUser(data);
    setModalVisible(true);
  };

  return (
    <>
      <table className="table align-middle">
        <thead className="table-dark">
          <tr>
            <td>DNI</td>
            <td>Nombres</td>
            <td>Apellidos</td>
            <td>Email</td>
            <td>Eliminar</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={user.usuario_id}>
              <td>{user.dni}</td>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="danger" onClick={() => openModal(user)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalVisible && (
        <DeleteUserModal
          user={user}
          estado={modalVisible}
          visual={closeModal}
        />
      )}
    </>
  );
};

export default UserList;
