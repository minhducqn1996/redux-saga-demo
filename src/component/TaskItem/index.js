import React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  withStyles,
  Fab,
  Icon,
} from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';

const TaskItem = (props) => {
  const { status, task, classes } = props;

  return (
    <Card className={classes.root} key={task.id}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item md={8}>
            <Typography component="h2" color="textSecondary">
              {task.title}
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography component="h2" color="textSecondary">
              {status.label}
            </Typography>
          </Grid>
          <p>{task.description}</p>
        </Grid>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Fab
          color="primary"
          aria-label="Edit"
          className={classes.Fab}
          size="small"
        >
          <Icon fontSize="small">edit</Icon>
        </Fab>
        <Fab
          color="primary"
          aria-label="Edit"
          className={classes.Fab}
          size="small"
        >
          <Icon fontSize="small">delete</Icon>
        </Fab>
      </CardActions>
    </Card>
  );
};

TaskItem.propTypes = {
  status: PropTypes.object,
  task: PropTypes.object,
};

export default withStyles(styles)(TaskItem);
