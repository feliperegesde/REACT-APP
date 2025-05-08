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

interface ChinaTimeDialogProps {
  open: boolean;
  onClose: () => void;
  chinaTime: string;
}

const ChinaTimeDialog: React.FC<ChinaTimeDialogProps> = ({ open, onClose, chinaTime }) => {
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

      focusManager.setDialogList(dialogElementsRef.current, 1); // Pode ajustar o índice conforme necessário

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
          <span>Horário da China</span>
          <IconButton onClick={onClose} ref={closeButtonRef}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <p>Agora são <strong>{chinaTime}</strong> na China</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" ref={okButtonRef}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChinaTimeDialog;


