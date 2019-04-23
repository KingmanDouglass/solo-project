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
import Moment from 'react-moment';

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
class Pipeline extends Component {
    
//get all the information from the database as well as retrigger upon delete
    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_TATTOOS' });
}

//when delete is clicked, dispatch request to remove from database
    handleDelete = (tattoo) => {
        this.props.dispatch({ type: 'DELETE_TATTOO', payload: tattoo.name })
}

    handleView = (tattoo) => {
      console.log('need to target specific ID');
      
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
            <TableRow key={tattoo.id}>
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
              <Button variant="contained" color="primary" className={classes.button} onClick={()=>{this.handleEdit ()}}>View</Button>
              </TableCell>
              <TableCell component="th" scope="row">
              <Button variant="contained" color="primary" className={classes.button} onClick={()=>{this.handleDelete()}}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        

        
        
      </Table>
      </Paper>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

    export default connect(mapReduxStateToProps)(withStyles(styles)(Pipeline));
