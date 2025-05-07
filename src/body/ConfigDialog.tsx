import React, { useEffect, useRef } from 'react';
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
import focusManager from './FocusManager';

interface ConfigDialogProps {
  open: boolean;
  onClose: () => void;
}

const ConfigDialog: React.FC<ConfigDialogProps> = ({ open, onClose }) => {
  const dialogElementsRef = useRef<HTMLElement[]>([]);
  const okButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      dialogElementsRef.current = [];

      if (closeButtonRef.current) {
        dialogElementsRef.current.push(closeButtonRef.current);
      }
      if (okButtonRef.current) {
        dialogElementsRef.current.push(okButtonRef.current);
      }

      focusManager.setDialogList(dialogElementsRef.current, 1); // 1 = índice do "Ok"

      // Garante que o foco vá para o botão Ok após renderização
      setTimeout(() => {
        okButtonRef.current?.focus();
      }, 0);
    } else {
      focusManager.resetDialogList();
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <span>Configurações</span>
          <IconButton onClick={onClose} ref={closeButtonRef}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <p>Aqui você pode ajustar as configurações do sistema 🛠️</p>
      </DialogContent>
      <DialogActions>
        <Button
          ref={okButtonRef}
          onClick={onClose}
          color="primary"
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfigDialog;




