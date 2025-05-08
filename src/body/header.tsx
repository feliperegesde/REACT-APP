import React, { useState, MouseEvent, useEffect } from 'react';
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import AlarmIcon from '@mui/icons-material/Alarm';
import ChinaTimeDialog from './ChinaTimeDialog';
import ConfigDialog from './ConfigDialog';
import focusManager from './FocusManager';

function getChinaTime(): string {
  return new Date().toLocaleString("pt-BR", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

const Header: React.FC = () => {
  const linklenovo =
    "https://www.lenovo.com/br/pt/d/promocoes/?cid=br%3Asem%7Cse%7Cgoogle%7Cj-b2c-brand_trafego-awrs-google-search-net%7C%7Clenovo%7C%7C18076414538%7C145816546288%7Ckwd-845751236%7C%7C%7C";

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [alarmDialogOpen, setAlarmDialogOpen] = useState(false);
  const [configDialogOpen, setConfigDialogOpen] = useState(false);
  const [chinaTime, setChinaTime] = useState(getChinaTime());

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
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

  useEffect(() => {
    const headerElements: HTMLElement[] = [];

    const alarmBtn = document.getElementById("header-alarm");
    const dialogBtn = document.getElementById("header-dialog-button");
    const lenovoBtn = document.getElementById("header-lenovo-button");

    if (alarmBtn) headerElements.push(alarmBtn);
    if (dialogBtn) headerElements.push(dialogBtn);
    if (lenovoBtn) headerElements.push(lenovoBtn);

    if (headerElements.length) {
      focusManager.setHeaderElements(headerElements);
    }
  }, []);

  return (
    <div className="topnav">
      <h1 className="title">LENOVO DIAGNOSTICS</h1>

      <IconButton id="header-alarm" color="secondary" onClick={handleOpenAlarmDialog}>
        <AlarmIcon />
      </IconButton>

      <Button
        id="header-dialog-button"
        className="buttonHeader1"
        variant="contained"
        onClick={handleMenuClick}
      >
        Dialog
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{ sx: { borderRadius: 2, mt: 1, minWidth: 160 } }}
      >
        <MenuItem onClick={handleOpenConfigDialog}>Configurações</MenuItem>
        <MenuItem onClick={() => { alert("INFO"); handleMenuClose(); }}>Info</MenuItem>
        <MenuItem onClick={() => { alert("Ajuda"); handleMenuClose(); }}>Ajuda</MenuItem>
      </Menu>

      <Button
        id="header-lenovo-button"
        href={linklenovo}
        className="buttonHeader2"
        variant="contained"
      >
        Lenovo
      </Button>

      <ChinaTimeDialog
        open={alarmDialogOpen}
        onClose={handleCloseAlarmDialog}
        chinaTime={chinaTime}
      />
      <ConfigDialog
        open={configDialogOpen}
        onClose={handleCloseConfigDialog}
      />

      <hr />
    </div>
  );
};

export default Header;




