import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Footer from '../Footer/Footer'
// import Moment from 'react-moment';

//material ui styles
const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

//displays all the information from the database and does a map to acquire all the tag inputs
class Admin extends Component {
    
//get all the information from the database as well as retrigger upon delete
  componentDidMount = () => {
        this.props.dispatch({ type: 'GET_TATTOOS' });
}

//when delete is clicked, dispatch request to remove from database
    handleDelete = (event) => {
      console.log('need to target specific ID', event.currentTarget.value);
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
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Style</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.props.reduxState.tattoosReducer.map(tattoo => (
            <TableRow key={tattoo.user_id}>
              <TableCell component="th" scope="row">
                {tattoo.username}
              </TableCell>
              {/* <TableCell component="th" scope="row">
                <Moment format="YYYY/MM/DD" date={tattoo.ideal_timeframe}/>
              </TableCell> */}
              <TableCell>
                {tattoo.status}
              </TableCell>
              <TableCell component="th" scope="row">
                {tattoo.styles}
              </TableCell>
              <TableCell component="th" scope="row">
                {tattoo.description}
              </TableCell>
              <TableCell component="th" scope="row">
              <Button value={tattoo.user_id} variant="contained" color="primary" className={classes.button} onClick={this.handleView}>View</Button>
              </TableCell>
              <TableCell component="th" scope="row">
              <Button value={tattoo.user_id} variant="contained" color="primary" className={classes.button} onClick={this.handleDelete}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        

        {/* <Footer /> */}
        
      </Table>
      </Paper>
      
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(withStyles(styles)(Admin));
