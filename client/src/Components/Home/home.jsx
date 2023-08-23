import Cards from "../Cards/cards";
import NavBar from "../NavBar/navBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <div>
            <h1>Grupo Juvenil La Catedral</h1>
            <p>Gracias por invitarnos a ser Libres, Felices y Santos</p>
          </div>
          <div>
            <div>
              <label>Cate</label>
              <p>Aquí van los grupos Cate</p>
            </div>
            <div>
              <label>Iniciate</label>
              <p>Aquí van los grupos Iniciate</p>
            </div>
            <div>
              <label>Familia</label>
              <p>Aquí van los grupos Egresados</p>
            </div>
          </div>
          <div>
            <div>
              <h2>Apostolate</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit porro voluptatum id cumque deserunt, quas expedita fuga
                dolore quod alias autem ad iusto accusamus vitae quasi
                cupiditate praesentium facere dignissimos.
              </p>
              <Link
                to="https://www.instagram.com/grupoapostolate/"
                target="_blanck"
              >
                <button>Intagram</button>
              </Link>
            </div>
            <div>
              <div>
                <div>
                  <h2>Noche de Caridad</h2>
                  <p>
                    Todos los lunes (llueva, truene o haga -50°) nos encontramos
                    en la ⛪ Plaza San Martín, a las 🕰️ 19:30hs hasta las
                    21:30hs. Junto con la comunidad de San Juan, repartimos no
                    sólo la comida 🍲 a la gente, sino que llevamos el Evangelio
                    📖 y la oración 📿 a todas las personas que se acercan. Es
                    un momento para compartir con la gente que está en la calle,
                    compartir historias y bailar🕺🏻un rato por qué no.
                  </p>
                </div>
                <div>
                  <h2>Los Josefinos</h2>
                  <p>
                    nos encontramos en el 📍Centro Manresa (al frente de la
                    Compañía). Desde ahí salimos todos juntos en 🚎 colectivo
                    para Barrio Maldonado, a la Bajada San José (No se puede ir
                    en autos). Oración🙏🏼, desayuno con los chicos 🥖🍞, apoyo
                    escolar 📚 y muchas actividades más😏. Ojalá puedas sumarte
                    🤩, desde el Apostolate te esperamos.
                  </p>
                </div>
                <div>
                  <h2>La Morada</h2>
                  <p>
                    Te invitamos a un apostolado que aunque truene 🌩️ o caiga
                    nieve 🌨️, siempre nos van a estar esperando❤️! La Residencia
                    La Morada es un hogar de ancianos que nos esperan por la
                    tarde para compartir un poco de charla, música, risas y
                    oración!👵🏻👴🏻 Te invitamos a sumarte y que conozcas este
                    apostolado que movió muchos corazones💞🙌🏽 📍Bernardo Vázquez
                    Maceda 345 B° San Fernando 🕕 Todos los miércoles, De 18:00
                    a 19:30
                  </p>
                </div>
                <div>
                  <h2>Catequesis</h2>
                  <p>
                    ¡Empezamos con la catequesis! 🙏🏼 Si querés hacer la comunión
                    o confirmación te esperamos el próximo sábado en el colegio
                    San José. Las inscripciones son en la secretaria de la
                    Catedral de martes a viernes de 9 a 15hs.‼️ La Catequesis
                    será los días: 📆 Sábados 🕤 de 9.30 a 11.30 hs 📍 Colegio
                    San José (Independencia 302 ) Muchas gracias!🙌🏽 Cualquier
                    consulta enviar un mensaje!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Cards />
    </div>
  );
};

export default Home;
