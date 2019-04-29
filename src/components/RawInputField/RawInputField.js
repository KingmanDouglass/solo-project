import React, { Component } from 'react';
import { sendFileToServer } from '../../requests/sendFormToServer';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors';


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
}
class RawInputField extends Component {
  triggerFileSend = event => {
    const file = event.target.files[0];
    console.log('FILE IN TRIGGER FILE SEND!!!!!!!', file);
    sendFileToServer(file);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="location">
        {/* <input type="file" onChange={this.triggerFileSend}/> */}
        <input
  accept="image/*"
  className={classes.input}
  style={{ display: 'none' }}
  id="raised-button-file"
  multiple
  type="file"
  onChange={this.triggerFileSend}
/>
<label htmlFor="raised-button-file">
  <MuiThemeProvider theme={theme}>
  <Button variant="raised" component="span" className={classes.button}>
    Upload Reference Photos
  </Button>
  </MuiThemeProvider>
</label> 
      </div>
    );
  }
}
export default (withStyles(styles)(RawInputField));