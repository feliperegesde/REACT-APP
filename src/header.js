import { useState } from 'react';
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack
} from '@mui/material';
import AlarmIcon from '@mui/icons-material/Alarm';
import CloseIcon from '@mui/icons-material/Close';

function getChinaTime() {
  return new Date().toLocaleString("pt-BR", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

function Header() {
  const linklenovo = "https://www.lenovo.com/br/pt/d/promocoes/?cid=br%3Asem%7Cse%7Cgoogle%7Cj-b2c-brand_trafego-awrs-google-search-net%7C%7Clenovo%7C%7C18076414538%7C145816546288%7Ckwd-845751236%7C%7C%7C";

  const [anchorEl, setAnchorEl] = useState(null);
  const [alarmDialogOpen, setAlarmDialogOpen] = useState(false);
  const [configDialogOpen, setConfigDialogOpen] = useState(false);
  const [chinaTime, setChinaTime] = useState(getChinaTime());

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenAlarmDialog = () => {
    setChinaTime(getChinaTime());
    setAlarmDialogOpen(true);
  };

  const handleCloseAlarmDialog = () => setAlarmDialogOpen(false);
  const handleOpenConfigDialog = () => {
    setConfigDialogOpen(true);
    handleMenuClose();
  };

  const handleCloseConfigDialog = () => setConfigDialogOpen(false);

  return (
    <div className="topnav">
      <h1 className="title">LENOVO DIAGNOSTICS</h1>

      <IconButton color="secondary" onClick={handleOpenAlarmDialog}>
        <AlarmIcon />
      </IconButton>

      
      <Button className="buttonHeader1" variant="contained" onClick={handleMenuClick}>
        Dialog
      </Button>

   
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: { borderRadius: 2, mt: 1, minWidth: 160 }
        }}
      >
        <MenuItem onClick={handleOpenConfigDialog}>Configurações</MenuItem>
        <MenuItem onClick={() => { alert("INFO"); handleMenuClose(); }}>Info</MenuItem>
        <MenuItem onClick={() => { alert("Ajuda"); handleMenuClose(); }}>Ajuda</MenuItem>
      </Menu>

      <Button href={linklenovo} className="buttonHeader2" variant="contained">
        Lenovo
      </Button>

     
      <Dialog open={alarmDialogOpen} onClose={handleCloseAlarmDialog}>
        <DialogTitle>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <span>Horário da China</span>
            <IconButton onClick={handleCloseAlarmDialog}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <p>Agora são <strong>{chinaTime}</strong> na China </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlarmDialog} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>

   
      <Dialog open={configDialogOpen} onClose={handleCloseConfigDialog}>
        <DialogTitle>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <span>Configurações</span>
            <IconButton onClick={handleCloseConfigDialog}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <p>Aqui você pode ajustar as configurações do sistema 🛠️</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfigDialog} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>

      <hr />
    </div>
  );
}

export default Header;



