import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ChatKit from '../ChatKit/ChatMaster'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';


const theme = createMuiTheme({
  palette: {
    primary: yellow,
    // secondary: green,
    // error: red,
    typography: {
      fontFamily: 'Montserrat',
      fontSize: '5rem',
      textColor: 'white'
    },
},
});


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
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
class SelectedUser extends Component {

  

// componentDidMount = () => {
//   this.props.dispatch({ type: 'GET_CURRENT_ID' });
// }

// conditionalRender = () => {
//   if (this.props.currentIdReducer && this.props.currentIdReducer.length === 100) {
//     console.log('what about here?');
    
//       return <div><p>test</p></div>;
//   }
//   else {
//     console.log('did i make it here?');
    
//     return (
//     <div>{this.props.reduxState.currentIdReducer.map(tattoo =>
//     <div>
//     <p>Name: {tattoo.username}</p>
//     <p>Description: {tattoo.description}</p>
//     <p>Email: {tattoo.email}</p>
//     <p>Placement: {tattoo.areas}</p>
//     <p>Ideal Timeframe: {tattoo.ideal_timeframe}</p>
//     <p>Appointment: {tattoo.name}</p>
//     <p>Status: {tattoo.status}</p>
//     </div>
//     )}</div>)
//   }
// }

// conditionalRender = () => {
//   if (this.props.currentIdReducer && this.props.currentIdReducer.length === 100) {
//     console.log('what about here?');
    
//       return <div><p>test</p></div>;
//   }
//   else {
//     console.log('did i make it here?');
    
//     return <div><p>ughhhh</p></div>;
//   }
// }
handleEdit = (event) => {
  console.log('need to target specific ID', event.currentTarget.value);
    // this.props.dispatch({ type: 'DELETE_TATTOO', payload: event.currentTarget.value })
}


render() {
  const { classes } = this.props;
  return (
    
  <div>
  {/* {this.props.currentIdReducer.map(tattoo => */}
    <div className="clientInfo">
      {/* <p>Name: {tattoo.name}</p>
      <p>Description: {tattoo.description}</p>
      <p>Email: {tattoo.email}</p>
      <p>Placement: {tattoo.body_area}</p>
      <p>Ideal Timeframe: {tattoo.ideal_timeframe}</p>
      <p>Deposit: {tattoo.name}</p>
      <p>Appointment: {tattoo.name}</p> */}

      {/* {this.conditionalRender()} */}

      {/* <p>Name: </p>
      <p>Description: </p>
      <p>Email: </p>
      <p>Placement: </p>
      <p>Ideal Timeframe: </p>
      <p>Deposit: </p>
      <p>Appointment: </p> */}

<div>{this.props.reduxState.currentIdReducer.map(tattoo =>
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
    <MuiThemeProvider theme={theme}>
    <Button value={tattoo.user_id} variant="contained" color="primary" className={classes.button} onClick={this.handleEdit}>Edit</Button>
    </MuiThemeProvider>
    </div>
    </Paper>
    )}</div>

    </div>
     {/* )} */}
    {/* <div className="clientPhotos">
        INSERT PHOTOS HERE
    </div> */}
    <ChatKit/>
  </div>
)}};

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(withStyles(styles)(SelectedUser));