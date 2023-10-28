import 'bootstrap/dist/css/bootstrap.min.css';
import Navegation from '../routes/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

// import Largo from './components/Largo';
// import Footer from './components/Footer';

function Layout() {

  return (
    <>
      <Navegation />
      <Outlet />
      <Footer />

    </>
  )
}

export default Layout