import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './Nav.css';

const styles = {
    name: {
        borderBottom: `10px solid yellow`,
        fontWeight: 700,
        color: "yellow",
    },
    info: {
        fontWeight: 900,
        color: "yellow",
        borderBottom: `3px solid yellow`,
    },
    link: {
      margin: '10px',
    }
  };

  //header being shown across mediums. Displays name and background image
class Nav extends Component {

    render() {
        const { classes } = this.props;
        return (
        <div className="App">
        <header className="App-header">
        <Typography className={classes.name} variant="h2" gutterBottom>
        OPIE SAN
        </Typography>
        <Typography className={classes.info} variant="h5" gutterBottom>
        TATTOOING SINCE 1974
        </Typography>
        
        <Link className={classes.link} to="/">Home</Link>
        <Link className={classes.link} to="/about">About</Link>
        <Link className={classes.link} to="/location">Location</Link>
        <Link className={classes.link} to="/faq">FAQ</Link>
        <Link className={classes.link} to="/PendingAppointment">Pending Appointment</Link>
        </header>
        </div>
        )
    }
}



export default withStyles(styles)(Nav);