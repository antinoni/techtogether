import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



export default function Home() {

    const useStyles = makeStyles((theme) => ({
        box1: { 
            backgroundColor:'#D6E0CC',
            padding: '50px'
        }
    }));
    
	const classes = useStyles();

    return (
        <Grid item className={classes.root}>
			<CssBaseline />
            <Grid container name="first-image" style={{backgroundColor: '#99B27F'}}>
                <Grid item xs={3} sm={4} md={7}>
                    <img 
                        style={{marginTop:"-100px"}}
                        src="https://cdn.discordapp.com/attachments/784159930029703189/784776210013093929/maingrandma.png" />
                </Grid>
                <Grid item xs={12} sm={8} md={5} className={classes.box1} elevation={0} square>
                <img src="https://cdn.discordapp.com/attachments/784159525657378829/784740718324219904/helpmehelpyou-01.png" height="80px;" top="5px;"/>
                <h1>Welcome to helpmehelpyou</h1>
                <p>An app where you can connect with people in your area and request help for daily tasks, or help your neighbors do theirs!</p>
                </Grid>
            </Grid>
            <Grid item><h1>HOW DOES IT WORK?</h1></Grid>
            <Grid item style={{}}>
            <img 
                style={{marginTop:"-100px", marginLeft:'-40%'}}
                src="https://cdn.discordapp.com/attachments/784159930029703189/784776212613562398/setup.png" />
            </Grid>
            <Grid item>
            <img 
                style={{marginTop:"-100px", marginLeft:'-40%'}}
                src="https://cdn.discordapp.com/attachments/784159930029703189/784776203970019348/askhelp.png" />
            </Grid>
            <Grid item>
            <img 
                style={{marginTop:"-100px", marginLeft:'-40%'}}
                src="https://cdn.discordapp.com/attachments/784159930029703189/784776207194652713/handshake.png" />
                </Grid>
        </Grid>
    )
}   