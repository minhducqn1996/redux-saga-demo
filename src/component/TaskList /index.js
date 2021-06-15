import React from 'react';
import { withStyles, Grid, Box } from '@material-ui/core';
import styles from '../../container/TaskBoard/styles';
import TaskItem from '../TaskItem';

const TaskList = (props) => {
  const { status, task, classes } = props;

  return (
    <Grid item md={4} xs={12}>
      <Box mt={5} mb={3}>
        <div className={classes.status}>{status.label}</div>
      </Box>
      <div className={classes.wrapperListTask}>
        {task.map((task) => {
          return <TaskItem key={task.id} task={task} status={status} />;
        })}
      </div>
    </Grid>
  );
};

export default withStyles(styles)(TaskList);
