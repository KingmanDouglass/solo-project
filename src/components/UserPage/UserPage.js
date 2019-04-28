import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { yellow } from '@material-ui/core/colors';
import Image from './opie.png'
import beePic from './beePic.png'
import tattoo from './tattoo.png'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';

const theme = createMuiTheme({
  palette: {
    primary: yellow,

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

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_TATTOOS' });
    // console.log('this.props.reduxState.tattooReducer.id', this.props.reduxState.tattoosReducer.id);
}

// conditionalRender = () => {
//     if (this.props.reduxState.tattoosReducer && this.props.reduxState.tattoosReducer.length === 100) {
//       console.log('what about here? - USER PAGE');
  
//         return <div><p>test</p></div>;
//     }
//     else {
//       console.log('did i make it here? - USER PAGE');
//       const { classes } = this.props;
//       return (
//         <div className="consult">
//         {this.props.reduxState.tattoosReducer.map(tattoo => (
//         <Paper className={classes.card} elevation={1}>
//         <MuiThemeProvider theme={theme}>
//         <p className={classes.consult}>
//             <Button value={tattoo.id} onClick={this.nextPage} variant="contained" color="primary" className={classes.button}>Consult and Schedule</Button>
//         </p>
//           </MuiThemeProvider>
//         </Paper>
//         ))}
//         </div>
//       )
//   }
// }

  nextPage = (event) => {
    console.log('need to bring tattoo ID over to consult form', event.currentTarget.value);
    console.log('this.props', this.props);
    // this.props.history.push(`/form?id=${event.currentTarget.value}`)
    this.props.history.push('/form')
}

    render() {
        const { classes } = this.props;
        return (
            <section className="test">
            {/* <Nav/> */}
           {/* {this.conditionalRender()} */}
           <div className="consult">
            {/* {this.props.reduxState.tattoosReducer.map(tattoo => ( */}
            <Paper className={classes.card} elevation={1}>
            <MuiThemeProvider theme={theme}>
            <p className={classes.consult}>
            <Button value={tattoo.id} onClick={this.nextPage} variant="contained" color="primary" className={classes.button}>Consult and Schedule</Button>
            </p>
            </MuiThemeProvider>
            </Paper>
             {/* ))} */}
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
const mapStateToProps = (reduxState, state) => ({
  user: state.user,
  reduxState
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(UserPage));
