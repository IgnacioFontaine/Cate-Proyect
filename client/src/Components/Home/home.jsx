import {Box,Typography } from "@mui/material"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  searchCateGroups, searchIniciateGroups} from "../../Redux/actions";
import Card from "../Card/card";
import InstagramIcon from '@mui/icons-material/Instagram';


const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchCateGroups())
    dispatch(searchIniciateGroups())
  }, [dispatch]);
  const gruposCate = useSelector((state) => state.cate_groups)
  const gruposIniciate = useSelector((state) => state.iniciate_groups)
  

  return (
    <Box sx={{height:"90vh", boxShadow:4}}>
      <Box>
        <Box>
          <Box>
            <Box>
              <Box sx={{ boxShadow: 1, margin:2 }}>
                <Box>
                  <Typography variant="h4">¿Quiénes Somos?</Typography>
                  <Typography variant="body1">El grupo juvenil la Catedral es un grupo católico administrado por jóvenes y para jóvenes, este grupo está compuesto por 3 partes que conforman una gran familia! La Cate en la cual se encuentran los grupos cuyos jóvenes están cursando de 4to a 1er año de la Facultad, El Iniciate cuyoos jóvenes cursan de 1ero a 3er año y el Apostolate compuesto por aquellos mayores a 18 años con ganas de Misionar! </Typography>
                </Box>
                <Box >
                  <Typography variant="h4">¿Dónde encontrarnos? <Link
                to="https://www.instagram.com/grupocate/"
                target="_blanck"
              >
                <InstagramIcon fontSize="large" />
                  </Link></Typography>
                  <Typography variant="body2">Podés encontrarnos en redes sociales o en el colegio San José/Santa Teresa en el centro los días sábado, las inscripciones se realizan a principio de año y avisamos via Instagram! </Typography>
                  
                  
                  
                </Box>
                <Box>
                  <Typography variant="h4">Nuestras actividades</Typography>
                  <Typography variant="body2">Nos encontramos en un colegio en el centro los días Sábado para compartir la merienda y conversar un tema en especial, este tema es elegido por los Delegados a cargo de cada grupo, finalizando las actividades con una Misa en La Catedral de Córdoba</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{margin:1}}>
              <Box >
                <Typography>Navegá por todos los grupos de La Cate:</Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{gap:1, boxShadow:1, padding:0.5}}>
                <Typography variant="h3">Grupos Cate:</Typography>
                <Box display={"flex"}>
                {gruposCate? gruposCate.map(group=><Card group={group} key={group.id} />):null}
                </Box>
              </Box>
              <Box sx={{gap:1, boxShadow:1, padding:0.5}}>
                <Typography variant="h3">Grupos Iniciate:</Typography>
                <Box display={"flex"}>
                {gruposIniciate? gruposIniciate.map(group=><Card group={group} key={group.id} />):null}
                </Box>
              </Box>
            </Box>
            <Box>
              <Box sx={{boxShadow:1}}>
              <Typography variant="h3">Apostolate <Link
                to="https://www.instagram.com/grupoapostolate/"
                target="_blanck"
              >
                <InstagramIcon fontSize="large" />
                  </Link></Typography>
              <Typography variant="body1">Grupo misionero, abierto para todo aquel que quiera compartir esto con nosotros, por cualquier consulta no dudes en escribirnos a nuestro instagram, aquí debajo enseñamos nuestras actividades activas en este momento, Sumate!!</Typography>
            </Box> 
            <Box >
              <Box>
                <Box>
                  <Typography variant="h4">Noche de Caridad</Typography>
                  <Typography variant="body2">Todos los lunes (llueva, truene o haga -50°) nos encontramos
                    en la ⛪ Plaza San Martín, a las 🕰️ 19:30hs hasta las
                    21:30hs. Junto con la comunidad de San Juan, repartimos no
                    sólo la comida 🍲 a la gente, sino que llevamos el Evangelio
                    📖 y la oración 📿 a todas las personas que se acercan. Es
                    un momento para compartir con la gente que está en la calle,
                    compartir historias y bailar🕺🏻un rato por qué no.</Typography>
                </Box>
                <Box>
                  <Typography variant="h3">Los Josefinos</Typography>
                  <Typography variant="body2">Nos encontramos en el 📍Centro Manresa (al frente de la
                    Compañía). Desde ahí salimos todos juntos en 🚎 colectivo
                    para Barrio Maldonado, a la Bajada San José (No se puede ir
                    en autos). Oración🙏🏼, desayuno con los chicos 🥖🍞, apoyo
                    escolar 📚 y muchas actividades más😏. Ojalá puedas sumarte
                    🤩, desde el Apostolate te esperamos.</Typography>
                </Box>
                <Box>
                  <Typography variant="h3">La Morada</Typography>
                  <Typography variant="body2">Te invitamos a un apostolado que aunque truene 🌩️ o caiga
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
                  <Typography variant="body2">¡Empezamos con la catequesis! 🙏🏼 Si querés hacer la comunión
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
    </Box>
  );
};

export default Home;
