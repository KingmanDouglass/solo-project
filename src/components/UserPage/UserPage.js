import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
// import { red } from '@material-ui/core/colors';
import Image from './opie.png'
// import beeInk from './beeInk.png'
import Nav from '../Nav/Nav'
// import LogOutButton from '../LogOutButton/LogOutButton';


const styles = {
    card: {
      minWidth: 940,
      minHeight:440,
      maxWidth: 940,
      maxHeight:440,
      margin: 10,
      padding: 10,
      display: "inline-block",
      backgroundImage: `url(${Image})`,
   

    },
    cardtwo: {
        minWidth: 450,
        minHeight:200,
        maxWidth: 450,
        maxHeight:200,
        margin: 10,
        padding: 10,
        display: "inline-block",
        // backgroundImage: `url(${beeInk})`,
      },
      cardthree: {
        minWidth: 450,
        minHeight:200,
        maxWidth: 450,
        maxHeight:200,
        margin: 10,
        padding: 10,
        display: "inline-block",
        // backgroundImage: `url(${beeInk})`,
        alignSelf: 'stretch',
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
            <section className="mainDiv">
            {/* <Nav/> */}
            <div className="consult">
            <Card className={classes.card}>
                <Button onClick={this.nextPage} variant="contained" color="primary" className={classes.button}>Consult and Schedule</Button>
            </Card>
            </div>
            <div className="links">
            <Card className={classes.cardtwo}>
                <Button variant="contained" color="primary" className={classes.button} target="_blank" href="https://beeinktattoo.com/">Visit Bee Ink Tattoo's Website</Button>
            </Card>
            <Card className={classes.cardthree}>
                <Button variant="contained" color="primary" className={classes.button} target="_blank" href="https://www.instagram.com/opie_san/?hl=en">Visit Opie's Instagram</Button>
            </Card>
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
