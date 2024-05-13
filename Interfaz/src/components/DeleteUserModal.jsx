/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function DeleteUser({ visual, estado, user }) {
  const handleClose = () => visual();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/users/${user.usuario_id}`)
      .then(() => {
        alert("Usuario eliminado");
        window.location.reload();
      })
      .catch(() => {
        alert("Error al eliminar el usuario");
      });
  };

  return (
    <>
      <Modal show={estado} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminación de Usuario: {user.dni}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Está seguro de eliminar el usuario{" "}
          {user.nombre + " " + user.apellido}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteUser;
