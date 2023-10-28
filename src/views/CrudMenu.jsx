
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
        try {
            await deleteDoc(doc(db, "Menus", id));
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
        <section>
            <h1>Página Reservada para Administradores</h1>
            <h2>Agregar un Plato</h2>
            <form onSubmit={reservar}>
                <div>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre del Plato"
                        value={cliente.nombre}
                        onChange={capturarInputs}
                    />
                    <input
                        type="text"
                        name="detalle"
                        placeholder="Ingresa los Ingredientes"
                        value={cliente.detalle}
                        onChange={capturarInputs}
                    />
                    <input
                        type="text"
                        name="precio"
                        placeholder="Ingresa el Precio"
                        value={cliente.precio}
                        onChange={capturarInputs}
                    />
                    <input
                        type="url"
                        name="imagen"
                        placeholder="Ingresa URL imagen"
                        value={cliente.imagen}
                        onChange={capturarInputs}
                    />
                </div>
                <button>{editingId ? "Guardar Cambios" : "Agregar Plato"}</button>
            </form>
            <div className="container">
                <table className="tabla-resultados">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Plato</th>
                            <th>Ingredientes</th>
                            <th>Precio</th>
                            <th>URL Imagen</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservas.map((reserva) => (
                            <tr key={reserva.id}>
                                <td>{reserva.id}</td>
                                <td>{reserva.nombre}</td>
                                <td>{reserva.detalle}</td>
                                <td>{reserva.precio}</td>
                                <td>{reserva.imagen}</td>
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

export default CrudMenu;
