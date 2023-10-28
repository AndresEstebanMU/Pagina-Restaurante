import CarouselHome from "../components/CarouselHome"
import Descripcion from "../components/Descripcion"
import ReservaHome from "../components/ReservaHome"

const Home = () => {
  return (
    <div >
      <CarouselHome />
      <section id="front">
        
        <h1 className="texto-front">WELCOME</h1>
        <br />
        <br />
        <h1 className="texto-front" id="bajada"> "La forma en que comemos decide el mundo en el que vivímos." </h1>
      </section>
      <Descripcion />
      <ReservaHome /> 
       
    </div>
    
  )
}

export default Home