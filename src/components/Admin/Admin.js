import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Footer from '../Footer/Footer'
// import Moment from 'react-moment';

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

//material ui styles
const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
      backgroundColor: 'black',
      color: 'white',
      textColor: 'white'
    },
    info: {
      color: 'white',
      fontSize: 13
    }
  });

//displays all the information from the database and does a map to acquire all the tag inputs
class Admin extends Component {
    
//get all the information from the database as well as retrigger upon delete
  componentDidMount = () => {
        this.props.dispatch({ type: 'GET_TATTOOS' });
}

//when delete is clicked, dispatch request to remove from database
    handleDelete = (event) => {
      console.log('need to target specific ID FOR DELETE', event.currentTarget.value);
        this.props.dispatch({ type: 'DELETE_TATTOO', payload: event.currentTarget.value })
}

    handleView = (event) => {
      console.log('need to target specific ID', event.currentTarget.value);
      this.props.dispatch({ type: 'GET_CURRENT_ID', payload: event.currentTarget.value });
      this.props.history.push('/selecteduser');
        }

    render() {
        const { classes } = this.props;
        return (
        <Paper className={classes.root}>
        <MuiThemeProvider theme={theme}>
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
            <Typography className={classes.info} variant="h5" gutterBottom>
        Client
            </Typography>
            </TableCell>
            <TableCell>
            <Typography className={classes.info} variant="h5" gutterBottom>
        Status
            </Typography>
            </TableCell>
            <TableCell>
            <Typography className={classes.info} variant="h5" gutterBottom>
        Style
            </Typography>
            </TableCell>
            <TableCell>
            <Typography className={classes.info} variant="h5" gutterBottom>
        Description
            </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.props.reduxState.tattoosReducer.map(tattoo => (
            <TableRow key={tattoo.id}>
              <TableCell component="th" scope="row">
              <Typography className={classes.info} variant="h5" gutterBottom>
                {tattoo.username}
                </Typography>
              </TableCell>
              {/* <TableCell component="th" scope="row">
                <Moment format="YYYY/MM/DD" date={tattoo.ideal_timeframe}/>
              </TableCell> */}
              <TableCell>
              <Typography className={classes.info} variant="h5" gutterBottom>
                {tattoo.status}
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
              <Typography className={classes.info} variant="h5" gutterBottom>
                {tattoo.styles}
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
              <Typography className={classes.info} variant="h5" gutterBottom>
                {tattoo.description}
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
              <Button value={tattoo.user_id} variant="contained" color="primary" className={classes.button} onClick={this.handleView}>View</Button>
              </TableCell>
              <TableCell component="th" scope="row">
              <Button value={tattoo.id} variant="contained" color="primary" className={classes.button} onClick={this.handleDelete}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        

        {/* <Footer /> */}
        
      </Table>
      </MuiThemeProvider>
      </Paper>
      
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(withStyles(styles)(Admin));
