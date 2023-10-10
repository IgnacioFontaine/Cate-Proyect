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
    <Box sx={{height:"120vh", boxShadow:4}}>
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
                <Typography variant="h4">Navegá por todos los grupos de La Cate:</Typography>
              </Box>
            </Box>
            <Box sx={{height:"50vh"}}>
              <Box sx={{gap:1, boxShadow:1, padding:0.5, height:"40vh"}}>
                <Typography variant="h4">Grupos Cate:</Typography>
                <Box display={"flex"}>
                {gruposCate? gruposCate.map(group=><Card group={group} key={group.id} />):null}
                </Box>
              </Box>
              <Box sx={{gap:1, boxShadow:1, padding:0.5, height:"30vh"}}>
                <Typography variant="h4">Grupos Iniciate:</Typography>
                <Box display={"flex"}>
                {gruposIniciate? gruposIniciate.map(group=><Card group={group} key={group.id} />):null}
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
