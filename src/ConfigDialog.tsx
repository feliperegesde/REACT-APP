import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ConfigDialogProps {
  open: boolean;
  onClose: () => void;
}

const ConfigDialog: React.FC<ConfigDialogProps> = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <span>Configurações</span>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
    </DialogTitle>
    <DialogContent>
      <p>Aqui você pode ajustar as configurações do sistema 🛠️</p>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">Ok</Button>
    </DialogActions>
  </Dialog>
);

export default ConfigDialog;

