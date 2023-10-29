

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
    const confirmar = window.confirm("¿Estás seguro de que deseas eliminar esta reserva?");
    if (confirmar) {
      try {
        await deleteDoc(doc(db, "Reservas", id));
        cargarReservas();
      } catch (error) {
        console.log(error);
      }
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
    <section id="reserva-fondo">
      <h1 className="text-center">Realizar una Reserva</h1>
      <form onSubmit={reservar}>
        <div className="text-center mt-3">
          <input
            type="text"
            name="nombre"
            placeholder="Ingresa tu nombre"
            value={cliente.nombre}
            onChange={capturarInputs}
            className="input-anchos input-separados"
          />  <br></br>
          <input
            type="email"
            name="email"
            placeholder="Ingresa tu email"
            value={cliente.email}
            onChange={capturarInputs}
            className="input-anchos input-separados"
          /> <br></br>
          <input
            type="text"
            name="mesa"
            placeholder="Elige: Mañana, Tarde o Noche"
            value={cliente.mesa}
            onChange={capturarInputs}
            className="input-anchos input-separados"
          />  <br></br>
          <input
            type="date"
            name="fecha"
            value={cliente.fecha}
            onChange={capturarInputs}

          /> <br></br>
        </div>
        <div className="text-center" >
          <button className="boton-reserva">{editingId ? "Guardar Cambios" : "Reservar"}</button>
        </div>
      </form>
      {/* <div className="container mt-3"> */}
      <div className="tabla-centro">
        <table className="tabla-resultados table-titulos">
          <thead>
            <tr>
              <th>ID Reserva</th>
              <th>Cliente</th>
              <th>Email</th>
              <th>Horario</th>
              <th>Fecha</th>
              <th>Modificar</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.id}>
                <td data-titulo="ID Reserva:">{reserva.id}</td>
                <td data-titulo="Nombre:">{reserva.nombre}</td>
                <td data-titulo="email:">{reserva.email}</td>
                <td data-titulo="Horario:">{reserva.mesa}</td>
                <td data-titulo="Fecha:">{reserva.fecha}</td>
                <td>
                  <div>
                  <Button variant="info" onClick={() => editarReserva(reserva.id)}
                  >-Editar-</Button>
                  </div>
                  <div className="container mt-1">
                  <Button variant="danger" onClick={() => eliminarReserva(reserva.id)}
                  >Eliminar</Button>
                  </div>
                 
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
