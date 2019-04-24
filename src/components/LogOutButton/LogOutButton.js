import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { yellow } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    // secondary: green,
    // error: red,
  },
});

const styles = {
  media: {
    height: 400,
  },
  menu: {
    width: 200,
  },
};
class LogOutButton extends Component {

// goToInstagram = (event) => {
//   this.props.history.push('/InitialForm')
// }



    render() {
        const { classes } = this.props;
        return (
  // <button
  //   // This button shows up in multiple locations and is styled differently
  //   // because it's styled differently depending on where it is used, the className
  //   // is passed to it from it's parents through React props
  //   className={props.className}
  //   onClick={() => props.dispatch({ type: 'LOGOUT' })}
  // >
  //   Log Out
  // </button>
<div>
  <MuiThemeProvider theme={theme}>
    {/* <Button className={props.className} onClick={() => props.dispatch({ type: 'LOGOUT' })}>Log Out</Button> */}
    <Button onClick={() => this.props.dispatch({ type: 'LOGOUT' })} variant="contained" color="primary" className={classes.button}>Log Out</Button>
  </MuiThemeProvider>
</div>
);
}
}

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(LogOutButton));