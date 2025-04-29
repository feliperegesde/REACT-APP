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

interface ChinaTimeDialogProps {
  open: boolean;
  onClose: () => void;
  chinaTime: string;
}

const ChinaTimeDialog: React.FC<ChinaTimeDialogProps> = ({ open, onClose, chinaTime }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <span>Horário da China</span>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
    </DialogTitle>
    <DialogContent>
      <p>Agora são <strong>{chinaTime}</strong> na China</p>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">Ok</Button>
    </DialogActions>
  </Dialog>
);

export default ChinaTimeDialog;

