import { Box, Typography, Paper, Container } from "@mui/material"


export default function GuestFooter() {
  return (
    <Paper sx={{marginTop: 'calc(10% + 60px)',
    width: '75%',
    position: 'fixed',
    background:"none",
    bottom: 0,
    textAlign: "center",
    
    }} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
          Grupo Juvenil la Catedral
            {/* <div>
            <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" />
            </div> */}
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 1,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2023. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}