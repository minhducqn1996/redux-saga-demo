import React, { useState } from 'react';
import { withStyles, Grid, Button } from '@material-ui/core';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import TaskList from './../../component/TaskList ';
import TaskForm from '../../component/TaskForm';
import { STATUSES } from './../../constans';

const listTask = [
  {
    id: 0,
    title: 'Read book',
    description: 'Read material ui book',
    status: 0,
  },
  {
    id: 1,
    title: 'Play football',
    description: 'With my friend',
    status: 2,
  },
  {
    id: 2,
    title: 'Play game',
    description: '',
    status: 1,
  },
];

const TaskBoard = () => {
  const [state, setstate] = useState({
    open: false,
  });

  const renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          let task = listTask.filter((task) => {
            return task.status === status.value;
          });
          return <TaskList key={status.value} task={task} status={status} />;
        })}
      </Grid>
    );
    return xhtml;
  };

  const handleClose = () => {
    return () =>
      setstate((preState) => ({
        ...preState,
        open: false,
      }));
  };

  const openForm = () => {
    return () =>
      setstate((preState) => ({
        ...preState,
        open: true,
      }));
  };

  const rederDialog = () => {
    const { open } = state;
    let xhtml = null;
    xhtml = <TaskForm onClose={handleClose()} open={open} />;
    return xhtml;
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={openForm()}>
        <AddIcon /> Thêm mới công việc
      </Button>
      {renderBoard()}
      {rederDialog()}
    </div>
  );
};

export default withStyles(styles)(TaskBoard);
