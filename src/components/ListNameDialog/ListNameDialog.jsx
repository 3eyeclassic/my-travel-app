import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

const ListNameDialog = ({ open, onClose, onSave }) => {
  const [listName, setListName] = useState('');

  const handleSave = () => {
    onSave(listName);
    onClose(); // ダイアログを閉じる
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>リスト名を入力</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="リスト名"
          type="text"
          fullWidth
          variant="standard"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>キャンセル</Button>
        <Button onClick={handleSave}>保存</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ListNameDialog;
