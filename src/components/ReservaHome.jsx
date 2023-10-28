import Button from "react-bootstrap/esm/Button"
import Mapa from "./Mapa"
import { Link } from "react-router-dom"


const ReservaHome = () => {
  return (
    <section id="reserva">
        <div id="mapaReserva">
            <Mapa />
        </div>
        <div id="aqui">
            <h1>RESERVA AQUÍ</h1>
            <Button variant="dark" as={Link} to="/reserva" className="bresh" >RESERVA MESA</Button>{' '}
            
        </div>
        
    </section>
  )
}

export default ReservaHome

