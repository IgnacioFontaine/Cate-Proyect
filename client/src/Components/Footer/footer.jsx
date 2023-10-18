import { Box, Typography, Paper, Container } from "@mui/material"

export default function GuestFooter() {
  return (
    <Paper sx={{marginTop: 'calc(10% + 60px)',
    width: '75%',
    position: 'fixed',
    background:"none",
    bottom: 0,
    textAlign: "center",
      display: "flex",
    flexDirection:"column",
    justifyContent:"center"
    
    }} component="footer" square variant="outlined">
      <Container maxWidth="lg" sx={{display:"flex", textAlign:"center"}}>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
            color:"black"
          }}
        >Todos los derechos reservados
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 1,
          }}
        >
          <Typography variant="caption" color="black">
            Copyright ©2023. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}