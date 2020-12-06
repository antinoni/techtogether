import * as React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LensIcon from '@material-ui/icons/Lens';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	root: {
        height: '100vh',
        height:"70vh",
        marginLeft:"20%",
        marginTop:"5%",
        backgroundColor:"#DDC18C", 
        width:"60%"
    },
    formControl: {
        minWidth: 200,
        paddingLeft: -10
    },
    icon: {
        color:"#C8564E",
        position:"absolute",
        display: 'flex',
        alignItems: 'center',
        marginTop: '-1.5%',
        marginLeft:"28%",
        fontSize: "50px"
    }
}));

const Newpost = ({ isAuthenticated }) => {
    const classes = useStyles();
    const [value, setValue] = useState("");

    const handleChange = e => setValue(e.target.value)

    return (
        <Grid container component="main" className={classes.root}>
            <center><LensIcon className={classes.icon} /></center>
            <Grid cointainer>
                <Grid item style={{marginLeft:"170px",marginTop:"25px",fontSize:"30px", fontWeight:"bold",color:"white"}}>
                    <center>Post a new help request</center>
                </Grid>
                <Grid container style={{backgroundColor:"white", padding:"20px",marginLeft:"85px",marginTop: "10px"}}>
                    <Grid container spacing={1}>
                        <Grid item xs={7} style={{borderRadius:"4px"}}>
                            <TextField
                                variant="outlined"
                                autoComplete="title"
                                name="title"
                                required
                                fullWidth
                                id="title"
                                placeholder="Title"
                                style={{backgroundColor:"#fafafa"}}
                            />
                        </Grid>
                        <Grid item style={{borderRadius:"4px"}}>
                            <FormControl required className={classes.formControl}>
                                <InputLabel>Tag</InputLabel>
                                <Select
                                variant="outlined"
                                name="tag"
                                required
                                id="tag"
                                onChange={handleChange}  
                                style={{backgroundColor:"#fafafa"}}                  
                                >
                                <MenuItem value="">
                                    <em>None</em>   
                                </MenuItem>
                                <MenuItem value="health">Health</MenuItem>
                                <MenuItem value="supplies">Supplies</MenuItem>
                                <MenuItem value="services">Services</MenuItem>
                                <MenuItem value="elderly">Elderly Care</MenuItem>
                                <MenuItem value="childcare">Child Care</MenuItem>
                                <MenuItem value="personalcare">Personal Care</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item xs={11} style={{borderRadius:"4px",backgroundColor:"#fafafa",marginTop:"20px"}}>
                            <TextField
                                id="outlined-multiline-static"
                                fullWidth
                                multiline
                                rows={15}
                                placeholder="Explain your request here. Remember, never reveal any personal information you don't want strangers to have!"
                                variant="outlined"
                            />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );

};
    

  export default Newpost
