import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ChatKit from '../ChatKit/ChatMaster'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import qs from 'query-string'
import { withRouter } from 'react-router'
import Moment from 'react-moment';
import Images from '../Images/Images';


const theme = createMuiTheme({
  palette: {
    primary: yellow,
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
    display: "inline-block",
    background: 'black',
  },
  cardtwo: {
    margin: 10,
    display: "inline-block",
    background: 'black',
  },
  info: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Righteous'
  },
  textField: {
    width: 200,
    color: 'black',
  },
  menu: {
    width: 200,
  }
}

class SelectedUser extends Component {


  state ={
    editCurrent: false,
    changeField: {
        user_id: '',
        name: '',
        description: '',
        email: '',
        area_id: '',
        ideal_timeframe: '',
        status_id: '',

    }
  }
  
  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_BODY_PARTS' });
    console.log('GET_BODY_PARTS', this.props.reduxState.bodyPartReducer);
    this.props.dispatch({ type: 'GET_STYLES' });
    this.props.dispatch({ type: 'GET_STATUS' });
}

handleEdit = (event) => {
  const searchObject = qs.parse(this.props.location.search)
  console.log('searchObject', searchObject.id);
  
  console.log('editing idea');
  this.setState({
    editCurrent: true,
    changeField: {
      user_id: searchObject.id
    }
  })
  console.log('event target', event.currentTarget.value);
  console.log('what is edit currents state???', this.state.editCurrent);
  console.log('what is my current id reducer??', this.props.reduxState.currentIdReducer);
  console.log('state logging', this.state.changeField);
}

handleAdd = (event) => {
  console.log('in handle add to send PUT');
  this.setState({
      editCurrent: false,
  })
  this.props.dispatch({type:'PUT_TATTOO', payload: this.state.changeField});
  this.props.history.push('/admin');
}

goBack = (event) => {
  this.props.history.push('/admin');
}

handleChange = propertyName => {
  return(event) =>{
  this.setState({
    changeField: {
          ...this.state.changeField,
          [propertyName]: event.target.value,
      }
  });
}
}


render() {
  const { classes } = this.props;
  return (
   
  <div>
     <Paper className={classes.cardtwo} elevation={1}>
    <MuiThemeProvider theme={theme}>
    <Button variant="contained" color="primary" className={classes.button} onClick={this.goBack}>Back</Button>
    </MuiThemeProvider>
    </Paper>
    <div className="clientInfo">

<div>{this.props.reduxState.currentIdReducer.map(tattoo =>
  <Paper className={classes.card} elevation={1}>
    <div>
    {/* <Typography className={classes.info} variant="h5" gutterBottom> Name: {this.state.editCurrent === true ? <TextField style={{backgroundColor: 'white'}} onChange={this.handleChange('username')} defaultValue={`${tattoo.username}`}/> : 
    tattoo.username} </Typography> */}
    <Typography className={classes.info} variant="h5" gutterBottom>
    <p className="clientInfo">Name: {tattoo.username}</p>
    </Typography>


    <Typography className={classes.info} variant="h5" gutterBottom> Description: {this.state.editCurrent === true ? <TextField style={{backgroundColor: 'white'}} onChange={this.handleChange('description')} defaultValue={`${tattoo.description}`}/> : 
    tattoo.description} </Typography>

    <Typography className={classes.info} variant="h5" gutterBottom>
    <p className="clientInfo">Email: {tattoo.email}</p>
    </Typography>


    {/* <Typography className={classes.info} variant="h5" gutterBottom> Email: {this.state.editCurrent === true ? <TextField style={{backgroundColor: 'white'}} onChange={this.handleChange('email')} defaultValue={`${tattoo.email}`}/> : 
    tattoo.email} </Typography> */}


    <Typography className={classes.info} variant="h5" gutterBottom> Placement: {this.state.editCurrent === true ? <TextField 
    id="filled-select-currency"
    select
    label="Placement"
    style={{backgroundColor: 'white'}}
    className={classes.textField}
    value={this.state.changeField.area_id}
    onChange={this.handleChange('area_id')}
    SelectProps={{
        MenuProps: {
            className: classes.menu,
        },
    }}
    margin="normal"
    variant="filled"
    >
    {this.props.reduxState.bodyPartReducer.map(area => (
                        <MenuItem key={area.id} value={area.id}>
                        {area.areas}
                        </MenuItem>
                    ))}</TextField> : 
    tattoo.areas} </Typography>
                    

    <Typography className={classes.info} variant="h5" gutterBottom>
    <p className="clientInfo">Ideal Timeframe: <Moment format="MM/DD/YY" date={tattoo.ideal_timeframe}/></p>
    </Typography>

    {/* <Typography className={classes.info} variant="h5" gutterBottom> Ideal Timeframe: {this.state.editCurrent === true ? <TextField style={{backgroundColor: 'white'}} onChange={this.handleChange('ideal_timeframe')} defaultValue={`${tattoo.ideal_timeframe}`}/> : 
    tattoo.ideal_timeframe} </Typography> */}
    {/* <p>Appointment: {this.state.editCurrent === true ? <Typography className={classes.info} variant="h5" gutterBottom onChange={this.handleChange('username')} defaultValue={`${tattoo.username}`}/> : 
    tattoo.username} </p> */}


    <Typography className={classes.info} variant="h5" gutterBottom> Status: {this.state.editCurrent === true ? <TextField 
    id="filled-select-currency"
    select
    label="Status"
    style={{backgroundColor: 'white'}}
    value={this.state.changeField.status_id}
    className={classes.textField}
    onChange={this.handleChange('status_id')}
    SelectProps={{
        MenuProps: {
            className: classes.menu,
        },
    }}
    margin="normal"
    variant="filled"
    >
    {this.props.reduxState.statusReducer.map(status => (
                        <MenuItem key={status.id} value={status.id}>
                        {status.status}
                        </MenuItem>
                    ))}</TextField> : 
    tattoo.status} </Typography>



    <MuiThemeProvider theme={theme}>
      <Edit value={tattoo.user_id} onClick={this.handleEdit}/>
      <SaveIcon value={this.props.reduxState.currentIdReducer.user_id} onClick={this.handleAdd}/>
    </MuiThemeProvider>
    </div>
    <img src = {tattoo.photos}/>
    <Images/>
    </Paper>
    )}</div>



    </div>
    {/* <div className="clientPhotos">
        INSERT PHOTOS HERE
    </div> */}
    <ChatKit/>
  </div>
)}};

const mapReduxStateToProps = (reduxState) => ({
  reduxState
  });

export default withRouter(connect(mapReduxStateToProps)(withStyles(styles)(SelectedUser)));