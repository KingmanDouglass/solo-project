import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import Uppy from '../Uppy/Uppy'
// import Header from '../Header/Header'


//material ui styles
const styles = {
  card: {
    minWidth: 950,
    minHeight:580,
    maxWidth: 950,
    maxHeight:580,
    margin: 10,
    padding: 10,
    display: "inline-block",
 
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
    console.log('GET BODY PARTS', this.props.reduxState.bodyPartReducer);
    
    this.props.dispatch({ type: 'GET_STYLES' });
}

    render() {      
        const { classes } = this.props;
        return (
            <div className='mainDiv'>
            {/* <Header/> */}
            <Card className={classes.card}>
            <form className={classes.container} noValidate autoComplete="off">
            <Uppy/>
<br/>
                <TextField
                    label="Tatto Description"
                    // className={classes.textField}
                    value={this.state.newTattoo.desciption}
                    onChange={this.handleChange('desciption')}
                    margin="normal"
                    />
<br/>
                {/* <TextField
                    label="Photos"
                    className={classes.textField}
                    value={this.state.newTattoo.photos}
                    onChange={this.handleChange('photos')}
                    margin="normal"
                    /> */}
<br/>
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
                        {/* {this.props.reduxState.bodyPartReducer.map(area => (
                            <MenuItem key={area.id} value={area.id}>
                            {area.areas}
                            </MenuItem>
                        ))} */}
                        <MenuItem>
                        Face</MenuItem>
                </TextField>
<br/>
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
                <Button variant="contained" color="primary" className={classes.button} onClick={this.addNewTattoo}>Submit</Button>          
                </form>
            </Card>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withStyles(styles)(ConsultForm));
