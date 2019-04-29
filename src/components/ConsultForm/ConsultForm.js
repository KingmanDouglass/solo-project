import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors';
import UploadFile from '../UploadFile/UploadFile';
import qs from 'query-string'
import { withRouter } from 'react-router'
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
  

//material ui styles
const styles = {
  card: {
    minWidth: 1150,
    minHeight:1180,
    maxWidth: 1150,
    maxHeight:1180,
    margin: 10,
    padding: 10,
    display: "inline-block",
    backgroundColor: 'black',
    color: 'white'
  },
  media: {
    height: 400,
  },
  menu: {
    width: 200,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    // padding: 5,
  },
  description: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: 900,
  },
  name: {
    borderBottom: `10px solid black`,
    fontWeight: 700,
    color: "black",
},
};

class ConsultForm extends Component {
    state = {
        newTattoo: {
            name: '',
            description: '',
            email: '',
            photos: '',
            ideal_timeframe: '',
            area_id: '',
            style_id: '',
            user_id: this.props.reduxState.user.id,
            status: 2
        }
    }

    handleChange = propertyName => event => {
        this.setState({
            newTattoo: {
                ...this.state.newTattoo,
                [propertyName]: event.target.value,
            }
        })
}

componentDidMount = () => {
    this.props.dispatch({ type: 'GET_BODY_PARTS' });
    console.log('GET_BODY_PARTS', this.props.reduxState.bodyPartReducer);
    
    this.props.dispatch({ type: 'GET_STYLES' });
}

addNewTattoo = (event) => {
    console.log('need to post ID', this.state.newTattoo);
      this.props.dispatch({ type: 'ADD_TATTOO', payload: this.state.newTattoo })
      this.props.history.push('/home');
}

    render() {      
        const { classes } = this.props;
        console.log('form rendered')
        return (
            <div className='mainDiv'>
            {/* <Header/> */}
            <Card className={classes.card}>
            <MuiThemeProvider theme={theme}>

                <TextField
                    id="filled-name"
                    label="Name"
                    style={{backgroundColor: 'white'}}
                    multiline
                    rowsMax="4"
                    value={this.state.newTattoo.name}
                    onChange={this.handleChange('name')}
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
        />

                <TextField
                    id="filled-name"
                    label="E-Mail"
                    style={{backgroundColor: 'white'}}
                    multiline
                    rowsMax="4"
                    value={this.state.newTattoo.email}
                    onChange={this.handleChange('email')}
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
        />
{/* <br/>      */}
                <TextField
                    id="filled-name"
                    label="Description"
                    style={{backgroundColor: 'white'}}
                    multiline
                    rowsMax="4"
                    value={this.state.newTattoo.description}
                    onChange={this.handleChange('description')}
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
        />
<br/>
<TextField
                    id="filled-select-currency"
                    select
                    label="Placement"
                    style={{backgroundColor: 'white'}}
                    className={classes.textField}
                    value={this.state.newTattoo.area_id}
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
                    ))}
                </TextField>

                <TextField
                    id="filled-select-currency"
                    select
                    label="Style used"
                    style={{backgroundColor: 'white'}}
                    className={classes.textField}
                    value={this.state.newTattoo.style_id}
                    onChange={this.handleChange('style_id')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                    variant="filled"
                >
                    {this.props.reduxState.styleIdReducer.map(style => (
                        <MenuItem key={style.id} value={style.id}>
                        {style.styles}
                        </MenuItem>
                    ))}
                </TextField>
<br/>

                <TextField
                    label="Ideal Start Date"
                    type="date"
                    style={{backgroundColor: 'white'}}
                    value={this.state.newTattoo.ideal_timeframe}
                    className={classes.textField}
                    onChange={this.handleChange('ideal_timeframe')}
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                        }}
                />
<br/>
                <UploadFile />
 <br/>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.addNewTattoo}>Submit</Button> 
                {/* <Images />          */}
            </MuiThemeProvider>
            </Card>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(ConsultForm)));
