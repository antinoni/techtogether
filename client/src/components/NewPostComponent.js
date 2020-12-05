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
    },
    formControl: {
        minWidth: 200,
        paddingLeft: -10
    }
}));

const Newpost = ({ isAuthenticated }) => {
    const classes = useStyles();
    const [value, setValue] = useState("");

    const handleChange = e => setValue(e.target.value)

    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs={12}>
                <div className="panel-body">
                   Post a new help request
                </div>
            </Grid>
            <Grid item xs={10} sm={6} spacing={5}>
                <TextField
                    variant="outlined"
                    autoComplete="title"
                    name="title"
                    required
                    fullWidth
                    id="title"
                    label=""
                    placeholder="Title"
                />
            </Grid>
            <Grid item xs={10} sm={6} spacing={5}>
                <FormControl required className={classes.formControl}>
                    <InputLabel>&nbsp;&nbsp;&nbsp;&nbsp;Tag</InputLabel>
                    <Select
                    variant="outlined"
                    onChange={handleChange}                    
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Health</MenuItem>
                    <MenuItem value={2}>Supplies</MenuItem>
                    <MenuItem value={3}>Services</MenuItem>
                    <MenuItem value={4}>Elderly Care</MenuItem>
                    <MenuItem value={5}>Child Care</MenuItem>
                    <MenuItem value={6}>Personal Care</MenuItem>
                    <MenuItem value={7}>Other</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={8}>
                <div className="panel-body">
                    <TextField
                        id="outlined-multiline-static"
                        label=""
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="Explain your request here. Remember, never reveal any personal information you don't want strangers to have!"
                        variant="outlined"
                    />
                </div>
            </Grid>
        </Grid>
    );

};
    

  export default Newpost
