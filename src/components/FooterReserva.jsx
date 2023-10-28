
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function FooterReserva() {
  return (
    <div className='footerReserva'>
      <br />
      <h5>Reserva Aquí</h5>
      <br />
      <Button variant="primary" as={Link} to='/reserva' className='bresh'>Buscar mesa</Button>{' '}
      <br />
    </div>
  );
}

export default FooterReserva;