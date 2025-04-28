import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Stack } from '@mui/material';


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
  const linklenovo="https://www.lenovo.com/br/pt/d/promocoes/?cid=br%3Asem%7Cse%7Cgoogle%7Cj-b2c-brand_trafego-awrs-google-search-net%7C%7Clenovo%7C%7C18076414538%7C145816546288%7Ckwd-845751236%7C%7C%7C&gbraid=0AAAAADtpWiCLXla5pRFK-63SBfyQCaTMQ&gclid=Cj0KCQjwzrzABhD8ARIsANlSWNPem-Jo-n3OjmpetKAGl1WIZ-BCkegwvUsfUzkwRSCwD5jqigcqmRkaAskqEALw_wcB&gad_source=1" 
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alarmDialogOpen, setAlarmDialogOpen] = useState(false);
  const [chinaTime, setChinaTime] = useState(getChinaTime());
    function PopUp(){
        alert("AÇÃO")
    }
  function handleOpenDialog() {
    setDialogOpen(true);
  }

  function handleCloseDialog() {
    setDialogOpen(false);
  }

  function handleOpenAlarmDialog() {
    setChinaTime(getChinaTime()); 
    setAlarmDialogOpen(true);
  }

  function handleCloseAlarmDialog() {
    setAlarmDialogOpen(false);
  }

  return (
    <div className="topnav">
      <h1 className="title">LENOVO DIAGNOSTICS</h1>
      
      <IconButton color="secondary" aria-label="add an alarm" onClick={handleOpenAlarmDialog}>
        <AlarmIcon />
      </IconButton>
      
      <Button className="buttonHeader1" variant="contained" onClick={handleOpenDialog}>
        Dialog
      </Button>
      
      <Button href={linklenovo}className="buttonHeader2" variant="contained">
        Lenovo
      </Button>

   
      <Dialog className="dialog" open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle className='dialogText'>Dialog</DialogTitle>
        <DialogContent>
            <Stack spacing={1}>
            <Button className="configButton" variant="text"onClick={PopUp}>Configs</Button>
            <Button className="configButton" variant="text"onClick={PopUp}>Info</Button>
            <Button className="configButton" variant="text"onClick={PopUp}>Ajuda</Button>
            </Stack>
            
 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>

      
      <Dialog open={alarmDialogOpen} onClose={handleCloseAlarmDialog}>
        <DialogTitle>Horário na China</DialogTitle>
        <DialogContent>
          <p>Agora são <strong>{chinaTime}</strong> na China 🇨🇳</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlarmDialog} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>

      <hr />
    </div>
  );
}

export default Header;

