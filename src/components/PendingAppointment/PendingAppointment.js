import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ChatKit from '../ChatKit/ChatMaster'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    minWidth: 940,
    minHeight:430,
    maxWidth: 940,
    maxHeight:430,
    margin: 10,
    // padding: 10,
    display: "inline-block",
    background: 'black',
  },
  info: {
    color: 'white',
    fontSize: 13
  }
}
class PendingAppointment extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_CURRENT_USER', payload: this.props.reduxState.user.id });
  }
  
  render() {
    const { classes } = this.props;
    return (
    <div>
      <div className="clientInfo">
  
  <div>{this.props.reduxState.currentUserReducer.map(tattoo =>
      <Paper className={classes.card} elevation={1}>
      <div>
      <Typography className={classes.info} variant="h5" gutterBottom>
      <p>Name: {tattoo.username}</p>
      </Typography>
      <Typography className={classes.info} variant="h5" gutterBottom>
      <p>Description: {tattoo.description}</p>
      </Typography>
      <Typography className={classes.info} variant="h5" gutterBottom>
      <p>Email: {tattoo.email}</p>
      </Typography>
      <Typography className={classes.info} variant="h5" gutterBottom>
      <p>Placement: {tattoo.areas}</p>
      </Typography>
      <Typography className={classes.info} variant="h5" gutterBottom>
      <p>Ideal Timeframe: {tattoo.ideal_timeframe}</p>
      </Typography>
      <Typography className={classes.info} variant="h5" gutterBottom>
      <p>Appointment: {tattoo.name}</p>
      </Typography>
      <Typography className={classes.info} variant="h5" gutterBottom>
      <p>Status: {tattoo.status}</p>
      </Typography>
      <img src = {tattoo.photos}/>
      </div>
      </Paper>
      )}</div>
  
      </div>
      <ChatKit/>
    </div>
  )}};
  
  const mapReduxStateToProps = (reduxState) => ({
      reduxState
      });
  
  export default connect(mapReduxStateToProps)(withStyles(styles)(PendingAppointment));