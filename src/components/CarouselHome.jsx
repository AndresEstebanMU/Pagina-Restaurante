import { Carousel, CarouselItem } from "react-bootstrap";

//Carrusel del principal del home (banner)
const CarouselHome = () => {
  return (
    <div id="carouselHome">
        <Carousel
          swipeable
          overscrollable
          autoScroll
          fullscreen
          autoScrollRatio={0.2}
      >
          <CarouselItem style={{backgroundColor: ''}}>
            <div className='item-label'>
                <img src="/img/RIC5521-1-2400x1600.jpg" alt="" className="atras" />
            </div>
          </CarouselItem>
          <CarouselItem style={{backgroundColor: ''}}>
            <div className='item-label'>
                <img src="/img/platos2/menu-gourmet.png" alt="" className="atras" />
            </div>
          </CarouselItem>
          
          <CarouselItem style={{backgroundColor: ''}}>
            <div className='item-label'>
                <img src="/img/platos2/fideos.png" alt="" className="atras" />                
            </div>
          </CarouselItem>
        </Carousel>
    </div>
  )
}

export default CarouselHome