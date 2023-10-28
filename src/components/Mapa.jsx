import Iframe from 'react-iframe'

const Mapa = () => {
  return (
    <>
      <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d832.5698857490593!2d-70.58805455472786!3d-33.41595564330686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c57f5d5bcce3%3A0x31f0b46800cdb65f!2sUDD%20Ventures!5e0!3m2!1ses-419!2scl!4v1697073681104!5m2!1ses-419!2scl"
        width="640px"
        height="320px"
        id=""
        className="map"
        display="grid"
        position="relative"
        style="border:0;"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        />
      </>
  )
}

export default Mapa