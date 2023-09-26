import {Box,Typography } from "@mui/material"
import Menu from "../Menu/menu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{height:"90vh", boxShadow:4}}>
      <Box>
        <Box>
          <Box>
            <Box>
              <Typography variant="h1">Grupo Juvenil La Catedral</Typography>
              <Typography variant="h4">Gracias por invitarnos a ser Libres, Felices y Santos</Typography>
            </Box>
            <Box>
              <Menu />
            </Box>
          </Box>
          <Box>
            <Box>
              <Box sx={{ boxShadow: 1 }}>
                <Box>
                  <Typography variant="h3">¿Quiénes Somos?</Typography>
                  <Typography variant="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi eos corporis vitae quia harum possimus deleniti amet
                  voluptatibus soluta saepe, rem consequatur deserunt debitis
                  tempore doloribus hic repellendus error porro? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Incidunt facilis
                  fugit possimus animi dolore, modi repellendus recusandae quae,
                  cupiditate accusamus voluptatum quia deserunt ut vel voluptate
                  voluptatibus. Doloremque, dicta ab!</Typography>
                </Box>
                <Box>
                  <Typography variant="h3">¿Dónde encontrarnos?</Typography>
                  <Typography variant="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi eos corporis vitae quia harum possimus deleniti amet
                  voluptatibus soluta saepe, rem consequatur deserunt debitis
                  tempore doloribus hic repellendus error porro? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Incidunt facilis
                  fugit possimus animi dolore, modi repellendus recusandae quae,
                  cupiditate accusamus voluptatum quia deserunt ut vel voluptate
                  voluptatibus. Doloremque, dicta ab!</Typography>
                </Box>
                <Box>
                  <Typography variant="h3">Nuestras actividades</Typography>
                  <Typography variant="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi eos corporis vitae quia harum possimus deleniti amet
                  voluptatibus soluta saepe, rem consequatur deserunt debitis
                  tempore doloribus hic repellendus error porro? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Incidunt facilis
                  fugit possimus animi dolore, modi repellendus recusandae quae,
                  cupiditate accusamus voluptatum quia deserunt ut vel voluptate
                  voluptatibus. Doloremque, dicta ab!</Typography>
                </Box>
              </Box>
            </Box>
            <Box >
              <Box >
                <Typography>Navegá por los grupos de La Cate:</Typography>
              </Box>
              <Box>
                <button onClick={() => { navigate("/cate") }}>Grupos Cate</button>
                <button onClick={() => { navigate("/iniciate") }}>Grupos Iniciate</button>
                <button onClick={()=>{navigate("/familia")}}>Grupos Familia</button>
              </Box>
            </Box>
            <Box sx={{boxShadow:1}}>
              <Typography variant="h3">Apostolate</Typography>
              <Typography variant="h4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit porro voluptatum id cumque deserunt, quas expedita fuga
                dolore quod alias autem ad iusto accusamus vitae quasi
                cupiditate praesentium facere dignissimos.</Typography>
              <Link
                to="https://www.instagram.com/grupoapostolate/"
                target="_blanck"
              >
                <button>Intagram</button>
              </Link>
            </Box>
            <Box >
              <Box>
                <Box>
                  <Typography variant="h3">Noche de Caridad</Typography>
                  <Typography variant="h4">Todos los lunes (llueva, truene o haga -50°) nos encontramos
                    en la ⛪ Plaza San Martín, a las 🕰️ 19:30hs hasta las
                    21:30hs. Junto con la comunidad de San Juan, repartimos no
                    sólo la comida 🍲 a la gente, sino que llevamos el Evangelio
                    📖 y la oración 📿 a todas las personas que se acercan. Es
                    un momento para compartir con la gente que está en la calle,
                    compartir historias y bailar🕺🏻un rato por qué no.</Typography>
                </Box>
                <Box>
                  <Typography variant="h3">Los Josefinos</Typography>
                  <Typography variant="h4">Nos encontramos en el 📍Centro Manresa (al frente de la
                    Compañía). Desde ahí salimos todos juntos en 🚎 colectivo
                    para Barrio Maldonado, a la Bajada San José (No se puede ir
                    en autos). Oración🙏🏼, desayuno con los chicos 🥖🍞, apoyo
                    escolar 📚 y muchas actividades más😏. Ojalá puedas sumarte
                    🤩, desde el Apostolate te esperamos.</Typography>
                </Box>
                <Box>
                  <Typography variant="h3">La Morada</Typography>
                  <Typography variant="h4">Te invitamos a un apostolado que aunque truene 🌩️ o caiga
                    nieve 🌨️, siempre nos van a estar esperando❤️! La Residencia
                    La Morada es un hogar de ancianos que nos esperan por la
                    tarde para compartir un poco de charla, música, risas y
                    oración!👵🏻👴🏻 Te invitamos a sumarte y que conozcas este
                    apostolado que movió muchos corazones💞🙌🏽 📍Bernardo Vázquez
                    Maceda 345 B° San Fernando 🕕 Todos los miércoles, De 18:00
                    a 19:30</Typography>
                </Box>
                <Box >
                  <Typography variant="h3">Catequesis</Typography>
                  <Typography variant="h4">¡Empezamos con la catequesis! 🙏🏼 Si querés hacer la comunión
                    o confirmación te esperamos el próximo sábado en el colegio
                    San José. Las inscripciones son en la secretaria de la
                    Catedral de martes a viernes de 9 a 15hs.‼️ La Catequesis
                    será los días: 📆 Sábados 🕤 de 9.30 a 11.30 hs 📍 Colegio
                    San José (Independencia 302 ) Muchas gracias!🙌🏽 Cualquier
                    consulta enviar un mensaje!</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
