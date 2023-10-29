import FooterReserva from "./FooterReserva"
import Payments from "../../src/components/Payments"


const Footer = () => {
  return (
    <footer> 
      <section id="primeraParte">
        <div id="footerIzq">
          <h6>DIRECCIÓN</h6>
          <p>Calle Málaga 89, Las Condes</p>
          <p>Santiago | Región Metropolitana</p>
          <br />

          <h6>CONTACTO</h6>
          <p><a href="">ventures@restaurante.com</a></p>
          <p>+56943246587</p>
          <p>+56973146579</p>
        </div>



        
        <div className="socialmedia-container">
          <div>
            <h6>SÍGUENOS</h6>
            <div id="rrss">
              <a href="instagram.com" className="insta">
                <img className="logo" src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png" alt="Instagram" width="24px" height="24px"/>
                <img className="logo-color" src="https://upload.wikimedia.org/wikipedia/commons/9/96/Instagram.svg" alt="Instagram" width="24px" height="24px"/>
              </a>
              <a href="facebook.com">
                <img className="logo" src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png" alt="Facebook" width="24px" height="24px"/>
                <img className="logo-color" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png" alt="Facbook" width="24px" height="24px"/>
              </a>
              <a href="twitter.com">
                <img className="logo" src="https://www.svgrepo.com/show/11841/twitter.svg" alt="Twitter" width="24px" height="24px"/>
                <img className="logo-color" src="https://www.svgrepo.com/show/111237/twitter.svg" alt="Twitter" width="24px" height="24px"/>
              </a>
              <a href="tiktok.com">
                <img className="logo" src="https://freelogopng.com/images/all_img/1655890314black-tiktok-logo-png.png" alt="Tiktok" width="20px" height="24px"/>
                <img className="logo-color" src="https://freelogopng.com/images/all_img/1655890216tiktok-logo-png-white.png" alt="Tiktok" width="20px" height="24px"/>
              </a>
            </div>
          </div>
          <br />
          <div>
          <img src="/img/MICHELIN2023_2.png" alt="Michelin" width={'100px'} height={'100px'} />
          </div>
          <br />
          <div>
            <p>RESTAURANTE GUÍA MICHELIN CHILE 2023</p>
            <p><a href="">Política de privacidad</a></p>
          </div>
            
          
        </div>
        <div id="footerDer">
          <FooterReserva />
          <br />
          <Payments />
        </div>
      </section>

      
      <div id="logoFooter">
        <img src="/img/logo figura.jpg" alt="logo con dibujo" className="botonLogo" width={'300px'} />
      </div>


      <div className="footer-container">        
          
            <p><a href="google.com">Acerca</a></p>
            <p>|</p>
            <p><a href="google.com">Política de Privacidad</a></p>
            <p>|</p>
            <p><a href="google.com">Cookies</a></p>
            <p>|</p>
            <p><a href="google.com">Contacto de prensa</a></p>
            <p>|</p>
            <p><a href="google.com">Trabaja con nosotros</a></p>
            <p>|</p>
            <p><a href="google.com">Certificaciones</a></p>
           
      </div>

      <div className="bottom">
        <hr />
        <p>© 2023. Todos los derechos reservados. Esta es una página ficticia creada con fines académicos.</p>
      </div>  
    </footer>
  )
}

export default Footer