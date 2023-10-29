import Carousel from 'react-bootstrap/Carousel';

//Carrusel de la pagina 'Nosotros' 
function DarkVariantExample() {
  return (
    <Carousel fade data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 my-auto mx-auto"
          src="/img/platos2/plato2.jpg"
          alt="First slide"
          width="auto"
          height="300px"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 my-auto mx-auto"
          src="/img/platos2/plato3.jpg"
          alt="Second slide"
          width="auto"
          height="300px"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 my-auto mx-auto"
          src="/img/platos2/plato4.jpg"
          alt="Third slide"
          width="auto"
          height="300px"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 my-auto mx-auto"
          src="/img/platos2/plato5.jpg"
          alt="Third slide"
          width="auto"
          height="300px"          
        />        
      </Carousel.Item>      
    </Carousel>
  );
}

export default DarkVariantExample;