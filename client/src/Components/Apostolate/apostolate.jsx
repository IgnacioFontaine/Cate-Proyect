import {Box,Typography, Grid } from "@mui/material"
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';

const Apostolate = () => {
  return (
    <Box sx={{height:"90vh"}}>
      <Box sx={{mb:5}}>
        <Typography variant="h3">Apostolate <Link
                to="https://www.instagram.com/grupoapostolate/"
                target="_blanck"
              >
                <InstagramIcon fontSize="large" />
                  </Link></Typography>
       <Typography variant="body1">Grupo misionero, abierto para todo aquel que quiera compartir esto con nosotros, por cualquier consulta no dudes en escribirnos a nuestro instagram, aquí debajo enseñamos nuestras actividades activas en este momento, Sumate!!</Typography>
      </Box>
        <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="space-evenly"
          gap={2}
      >
      <Grid item xs={12} alignItems="flex-start" sx={{bgcolor:"orange", borderRadius:5}}>
        <Typography variant="h3">Noche de Caridad</Typography>
        <Typography variant="body2">
          Todos los lunes (llueva, truene o haga -50°) nos encontramos en la ⛪ Plaza San Martín, a las 🕰️ 19:30hs hasta las 21:30hs. Junto con la comunidad de San Juan, repartimos no sólo la comida 🍲 a la gente, sino que llevamos el Evangelio 📖 y la oración 📿 a todas las personas que se acercan. Es un momento para compartir con la gente que está en la calle, compartir historias y bailar🕺🏻un rato por qué no.
        </Typography>
      </Grid>
      <Grid item xs={12} alignItems="flex-end" sx={{bgcolor:"whitesmoke",borderRadius:5}} >
        <Typography variant="h3">Los Josefinos</Typography>
        <Typography variant="body2">
          Nos encontramos en el 📍Centro Manresa (al frente de la Compañía). Desde ahí salimos todos juntos en 🚎 colectivo para Barrio Maldonado, a la Bajada San José (No se puede ir en autos). Oración🙏🏼, desayuno con los chicos 🥖🍞, apoyo escolar 📚 y muchas actividades más😏. Ojalá puedas sumarte 🤩, desde el Apostolate te esperamos.
        </Typography>
      </Grid>
      <Grid item xs={12}  alignItems="flex-start" sx={{bgcolor:"orange",borderRadius:5}}>
        <Typography variant="h3">La Morada</Typography>
        <Typography variant="body2">
          Te invitamos a un apostolado que aunque truene 🌩️ o caiga nieve 🌨️, siempre nos van a estar esperando❤️! La Residencia La Morada es un hogar de ancianos que nos esperan por la tarde para compartir un poco de charla, música, risas y oración!👵🏻👴🏻 Te invitamos a sumarte y que conozcas este apostolado que movió muchos corazones💞🙌🏽 📍Bernardo Vázquez Maceda 345 B° San Fernando 🕕 Todos los miércoles, De 18:00 a 19:30
        </Typography>
      </Grid>
      <Grid item xs={12} alignItems="flex-end" sx={{bgcolor:"whitesmoke",borderRadius:5}}>
        <Typography variant="h3" >Catequesis</Typography>
        <Typography variant="body2">
          ¡Empezamos con la catequesis! 🙏🏼 Si querés hacer la comunión o confirmación te esperamos el próximo sábado en el colegio San José. Las inscripciones son en la secretaria de la Catedral de martes a viernes de 9 a 15hs.‼️ La Catequesis será los días: 📆 Sábados 🕤 de 9.30 a 11.30 hs 📍 Colegio San José (Independencia 302 ) Muchas gracias!🙌🏽 Cualquier consulta enviar un mensaje!
        </Typography>
      </Grid>
    </Grid>
      </Box>)
 }

export default Apostolate;