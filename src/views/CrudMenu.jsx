
import { useState, useEffect } from "react";
import { db } from "../config/Firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Button } from "react-bootstrap";
// import Table from 'react-bootstrap/Table';
import '../../src/App.css'

const CrudMenu = () => {
    const [cliente, setCliente] = useState({
        nombre: "",
        detalle: "",
        precio: "",
        imagen: "",
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
            const collectionRef = collection(db, "Menus");
            if (editingId) {
                // Si estamos editando, actualizamos en lugar de agregar
                const reservaRef = doc(db, "Menus", editingId);
                await updateDoc(reservaRef, { ...cliente });
                setEditingId(null);
            } else {
                // Si no estamos editando, agregamos una nueva reserva
                await addDoc(collectionRef, { ...cliente });
            }
            setCliente({
                nombre: "",
                detalle: "",
                precio: "",
                imagen: "",
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
            const collectionRef = collection(db, "Menus");
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
        <section id="administrador-fondo">
            <h1 className="text-center">Página Reservada para Administradores</h1>
            <h2 className="text-center">Agregar un Plato</h2>
            <form onSubmit={reservar}>
                <div className="text-center mt-3">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre del Plato"
                        value={cliente.nombre}
                        onChange={capturarInputs}
                        className="input-anchos input-separados"
                    /> <br></br>
                    <input
                        type="text"
                        name="detalle"
                        placeholder="Ingresa los Ingredientes"
                        value={cliente.detalle}
                        onChange={capturarInputs}
                        className="input-anchos input-separados"
                    /> <br></br>
                    <input
                        type="text"
                        name="precio"
                        placeholder="Ingresa el Precio"
                        value={cliente.precio}
                        onChange={capturarInputs}
                        className="input-anchos input-separados"
                    /> <br></br>
                    <input
                        type="url"
                        name="imagen"
                        placeholder="Ingresa URL imagen"
                        value={cliente.imagen}
                        onChange={capturarInputs}
                        className="input-anchos  input-separados"
                    />  <br></br>
                </div> 
                <div className="text-center" >
                    <button className="boton-reserva">{editingId ? "Guardar Cambios" : "Agregar Plato"}</button>
                </div>

            </form>
            <div className="tabla-centro">
                <table className="tabla-resultados table-titulos">
                    <thead>
                        <tr>
                            <th>ID Plato</th>
                            <th>Plato</th>
                            <th>Ingredientes</th>
                            <th>Precio</th>
                            <th>URL Imagen</th>
                            <th>Imagen</th>
                            <th>Modificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservas.map((reserva) => (
                            <tr key={reserva.id}>
                                <td data-titulo="Id Plato:">{reserva.id}</td>
                                <td data-titulo="Plato: ">{reserva.nombre}</td>
                                <td data-titulo="Ingredientes: ">{reserva.detalle}</td>
                                <td data-titulo="Precio: $">{reserva.precio}</td>
                                <td data-titulo="URL:">{reserva.imagen}</td>
                                <td><img src={reserva.imagen} alt="Imagen del Plato" style={{ width: "10rem", height: "180px" }} /></td>
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

export default CrudMenu;


