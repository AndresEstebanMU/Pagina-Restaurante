import DarkVariantExample from "../components/About-Carrusel"




const About = () => {
  return (
    <section id="about-fondo">
      <div className="about">


        <DarkVariantExample />

        <h1>Nuestro Concepto de Restaurante</h1>
        <br />
        <p>"El sabor es tan importante como sentirse cómodo"</p>
        <p>Giancarlo es quien acerca esta cultura de la hospitalidad a los invitados, ya que si los platos se crean en las encimeras y entre los fuegos de la cocina, la experiencia gastronómica se desarrolla sobre todo entre las mesas del salón. Y en el comedor es Giancarlo quien expresa, con delicada atención, el espíritu de VENTURES. Ya sea en el magnífico vestíbulo acristalado o en los espaciosos dehors, nos cuenta en qué idea de convivencia se basa VENTURES, que los chefs de la brigada introduzcan los platos que salen de la cocina…
          <br />
          <br />
          <br />
          Porque el placer de una gran comida es también descubrir cómo nació el plato, en qué sugerencias se basa, conociendo la historia de los ingredientes que lo componen. Es tener una relación directa con quienes desarrollaron ese plato y lo cocinaron para los comensales.

          Esta filosofía está en la base de la elección de Giancarlo y Riccardo de "llevar el equipo de cocina al comedor": el deseo entusiasta de compartir con los invitados la larga investigación que condujo a la creación de un acuerdo, la introducción de un contraste, la elección de una técnica particular de transformación de materias primas.
          Para que la comida pueda representar un momento de relajación y bienestar; pero también la oportunidad de estimular la imaginación, una invitación al descubrimiento: el ejercicio de esa forma particular de curiosidad que es el gusto.</p>
          <br />
          <br />
          <br />


      </div>
      <div className="aboutImage">
        <img src="/img/esterno-giorno-brigata-al-lavoro.jpg" alt="cocina" />
      </div>
    </section>
  )
}

export default About

// 