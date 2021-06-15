import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles, Button, TextField } from '@material-ui/core';
import styles from './style';
import PropTypes from 'prop-types';

const TaskForm = (props) => {
  const { onClose, open } = props;

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax={4}
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

TaskForm.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

export default withStyles(styles)(TaskForm);
