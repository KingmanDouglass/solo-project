import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { grey, red } from '@material-ui/core/colors';
import UppyComp from '../UppyComp/UppyComp'
// import Header from '../Header/Header'


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
    backgroundColor: 'grey',
    color: 'white'
  },
  media: {
    height: 400,
  },
  menu: {
    width: 200,
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: 200,
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
            description: '',
            photos: '',
            ideal_timeframe: '',
            area_id: '',
            style_id: '',
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

    render() {      
        const { classes } = this.props;
        console.log('form rendered')
        return (
            <div className='mainDiv'>
            {/* <Header/> */}
            <Card className={classes.card}>
            {/* <UppyComp/> */}
            {/* <form className={classes.container} noValidate autoComplete="off"> */}
{/* <br/> */}
                {/* <TextField
                    label="Name"
                    className={classes.textField}
                    value={this.state.newTattoo.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    /> */}

                <TextField
                    id="outlined-multiline-flexible"
                    label="Name"
                    multiline
                    rowsMax="4"
                    value={this.state.newTattoo.name}
                    onChange={this.handleChange('name')}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
        />

                <TextField
                    id="outlined-multiline-flexible"
                    label="E-Mail"
                    multiline
                    rowsMax="4"
                    value={this.state.newTattoo.email}
                    onChange={this.handleChange('email')}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
        />

                {/* <TextField
                    label="E-Mail"
                    className={classes.textField}
                    value={this.state.newTattoo.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                    /> */}
<br/>
                {/* <TextField
                    label="Tatto Description"
                    className={classes.description}
                    value={this.state.newTattoo.description}
                    onChange={this.handleChange('description')}
                    margin="normal"
                    /> */}
                
                <TextField
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    rowsMax="4"
                    value={this.state.newTattoo.description}
                    onChange={this.handleChange('description')}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
        />
<br/>
<TextField
                    select
                    label="Placement"
                    className={classes.textField}
                    value={this.state.newTattoo.area_id}
                    onChange={this.handleChange('area_id')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                >
                    {this.props.reduxState.bodyPartReducer.map(area => (
                        <MenuItem key={area.id} value={area.id}>
                        {area.areas}
                        </MenuItem>
                    ))}
                </TextField>
{/* <br/> */}
                <TextField
                    select
                    label="Style used"
                    className={classes.textField}
                    value={this.state.newTattoo.style_id}
                    onChange={this.handleChange('style_id')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                >
                    {this.props.reduxState.styleIdReducer.map(style => (
                        <MenuItem key={style.id} value={style.id}>
                        {style.styles}
                        </MenuItem>
                    ))}
                </TextField>
<br/>
                {/* <TextField
                    label="Photos"
                    className={classes.textField}
                    value={this.state.newTattoo.photos}
                    onChange={this.handleChange('photos')}
                    margin="normal"
                    /> */}
{/* <br/> */}
                <TextField
                    label="Ideal Start Date"
                    type="date"
                    value={this.state.newTattoo.ideal_timeframe}
                    className={classes.textField}
                    onChange={this.handleChange('ideal_timeframe')}
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                        }}
                />
<br/>
                <UppyComp/>
 <br/>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.addNewTattoo}>Submit</Button>          
                {/* </form> */}
            </Card>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withStyles(styles)(ConsultForm));
