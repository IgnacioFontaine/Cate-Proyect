import { Box, Link, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';

function Copyright() {
  return (
    <Typography>
      {"© "}
      <Link href="https://www.instagram.com/grupocate/" target="_blanck"><InstagramIcon /></Link>
      {" " + new Date().getFullYear()}
    </Typography>
  );
}

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     padding: theme.spacing(6),
//   },
// }));

export default function Footer() {

  return (
    <footer >
      <Box sx={{direction:"end", display:"flex", }}>
        <Typography variant="h6">Grupo Juvenil la Catedral</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Todos los derechos reservados
        </Typography>
        <Copyright />
      </Box>
    </footer>
  );
}