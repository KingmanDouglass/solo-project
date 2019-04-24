import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { yellow } from '@material-ui/core/colors';
import Image from './opie.png'
import beePic from './beePic.png'
import tattoo from './tattoo.png'
// import bee from './bee.jpg'
// import Nav from '../Nav/Nav'
// import LogOutButton from '../LogOutButton/LogOutButton';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    // secondary: green,
    // error: red,
  },
});

const styles = {
    card: {
      minWidth: 940,
      minHeight:440,
      maxWidth: 940,
      maxHeight:440,
      margin: 10,
      // padding: 10,
      display: "inline-block",
      backgroundImage: `url(${Image})`,
   

    },
    cardtwo: {
        minWidth: 450,
        minHeight:400,
        maxWidth: 450,
        maxHeight:400,
        margin: 10,
        // padding: 10,
        display: "inline-block",
        backgroundImage: `url(${tattoo})`,
        backgroundSize: 230,
      },
      cardthree: {
        minWidth: 450,
        minHeight:400,
        maxWidth: 450,
        maxHeight:400,
        margin: 10,
        // padding: 10,
        display: "inline-block",
        backgroundImage: `url(${beePic})`,
        backgroundSize: 450,
      },
    media: {
      height: 400,
    },
    menu: {
      width: 200,
    },
    name: {
      borderBottom: `10px solid black`,
      fontWeight: 700,
      color: "black",
  },
  consult: {
    minWidth: 940,
    minHeight:440,
    maxWidth: 940,
    maxHeight:440,
    padding: 0,
    lineHeight: '400px'
    // textAlign: center,
},
links: {
  minWidth: 450,
  minHeight:200,
  maxWidth: 450,
  maxHeight:200,
  padding: 0,
  lineHeight: '350px'
  // textAlign: center,
},
  };

//holds the header and the map function
class UserPage extends Component {

  nextPage = (event) => {
    console.log('this.props', this.props);
    this.props.history.push('/form')
}

// goToInstagram = (event) => {
//   this.props.history.push('/InitialForm')
// }



    render() {
        const { classes } = this.props;
        return (
            <section className="test">
            {/* <Nav/> */}
            <div className="consult">
            <Paper className={classes.card} elevation={1}>
            <MuiThemeProvider theme={theme}>
            <p className={classes.consult}>
                <Button onClick={this.nextPage} variant="contained" color="primary" className={classes.button}>Consult and Schedule</Button>
            </p>
              </MuiThemeProvider>
            </Paper>
            </div>
            <div className="links">
            <Paper className={classes.cardtwo} elevation={1}>
              <MuiThemeProvider theme={theme}>
              <p className={classes.links}>
                <Button variant="contained" color="primary" className={classes.button} target="_blank" href="https://beeinktattoo.com/">Visit Bee Ink Tattoo</Button>
              </p>
              </MuiThemeProvider>
            </Paper>
            <Paper className={classes.cardthree} elevation={1}>
              <MuiThemeProvider theme={theme}>
              <p className={classes.links}>
                <Button variant="contained" color="primary" className={classes.button} target="_blank" href="https://www.instagram.com/opie_san/?hl=en">Visit Instagram</Button>
              </p>
                </MuiThemeProvider>
            </Paper>
            </div>
            </section>
        )
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(UserPage));
