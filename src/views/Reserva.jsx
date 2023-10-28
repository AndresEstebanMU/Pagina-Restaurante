

import { useState, useEffect } from "react";
import { db } from "../config/Firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { Button } from "react-bootstrap";
import '../../src/App.css'

const Reserva = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    email: "",
    mesa: "",
    fecha: "",
  });

  const [reservas, setReservas] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const capturarInputs = (e) => {
    const { name, value } = e.target;
    setCliente({
      ...cliente,
      [name]: value,
    });
  };

  const reservar = async (e) => {
    e.preventDefault();

    try {
      const collectionRef = collection(db, "Reservas");
      if (editingId) {
        // Si estamos editando, actualizamos en lugar de agregar
        const reservaRef = doc(db, "Reservas", editingId);
        await updateDoc(reservaRef, { ...cliente });
        setEditingId(null);
      } else {
        // Si no estamos editando, agregamos una nueva reserva
        await addDoc(collectionRef, { ...cliente });
      }
      setCliente({
        nombre: "",
        email: "",
        mesa: "",
        fecha: "",
      });
      cargarReservas();
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarReserva = async (id) => {
    try {
      await deleteDoc(doc(db, "Reservas", id));
      cargarReservas();
    } catch (error) {
      console.log(error);
    }
  };

  const editarReserva = (id) => {
    const reservaToEdit = reservas.find((reserva) => reserva.id === id);
    setCliente({ ...reservaToEdit });
    setEditingId(id);
  };

  const cargarReservas = async () => {
    try {
      const collectionRef = collection(db, "Reservas");
      const response = await getDocs(collectionRef);
      const docs = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReservas(docs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cargarReservas();
  }, []);

  return (
    <section>
      <h1>Realizar una Reserva</h1>
      <form onSubmit={reservar}>
        <div>
          <input
            type="text"
            name="nombre"
            placeholder="Ingresa tu nombre!"
            value={cliente.nombre}
            onChange={capturarInputs}
          />
          <input
            type="text"
            name="email"
            placeholder="Ingresa tu email!"
            value={cliente.email}
            onChange={capturarInputs}
          />
          <input
            type="text"
            name="mesa"
            placeholder="Ingresa la mesa!"
            value={cliente.mesa}
            onChange={capturarInputs}
          />
          <input
            type="date"
            name="fecha"
            value={cliente.fecha}
            onChange={capturarInputs}
          />
        </div>
        <button>{editingId ? "Guardar Cambios" : "Reservar"}</button>
      </form>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Cliente</th>
              <th>Email</th>
              <th>Mesa</th>
              <th>Fecha</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.id}</td>
                <td>{reserva.nombre}</td>
                <td>{reserva.email}</td>
                <td>{reserva.mesa}</td>
                <td>{reserva.fecha}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => editarReserva(reserva.id)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => eliminarReserva(reserva.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Reserva;
