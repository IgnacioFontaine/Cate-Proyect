import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function FadeMenu() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={()=>navigate("/")}>Home</MenuItem>
        <MenuItem onClick={()=>navigate("/patrulla")}>Patrulla</MenuItem>
        <MenuItem onClick={() => navigate("/familia")}>Egresados</MenuItem>
        <MenuItem onClick={()=>navigate("/apostolate")}>Apostolate</MenuItem>
        <MenuItem onClick={() => navigate("/creargrupo")}>Nuevo Grupo</MenuItem>
        <MenuItem onClick={()=>navigate("/crearpatrullero")}>Nuevo Patrullero</MenuItem>
        <MenuItem onClick={() => navigate("/oracion")}>Oración</MenuItem>
        <MenuItem onClick={()=>navigate("/login")}>Comando</MenuItem>
      </Menu>
    </div>
  );
}
