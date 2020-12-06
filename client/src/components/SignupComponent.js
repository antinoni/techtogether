import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


export default function SignupComponent ({ register, isAuthenticated }) {

	return (
		<Grid container component="main" style={{height: '100vh',}}>
			<CssBaseline />
            <Grid item xs={3} sm={4} md={7} position="absolute" component={Paper} elevation={0} square>
            <img 
                style={{height:"618px",marginLeft:"170px",marginTop:"30px"}}
                src="https://cdn.discordapp.com/attachments/784159930029703189/784777973924364368/signup.png" />
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
                <div style={{
                    width:"350px", 
                    marginTop:"100px",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                    }}>
                    <Avatar style={{
                        backgroundColor: '#99B27F'
                    }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create an account
                    </Typography>
                    <form 
                     style={{
                        width: '100%',
                     }}
                     noValidate>
                        <Grid container spacing={2}>
                            <Grid item sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="repeatpassword"
                                    label="Repeat Password"
                                    name="repeatpassword"
                                    autoComplete="repeatpassword"
                                />
                            </Grid>
                        </Grid>
                        <Button component={Link} to="/profile" 
                        type="submit" 
                        fullWidth 
                        variant="contained" 
                        color="primary" 
                        style={{
                            marginTop: '35px',
                            color: '#ffffff',
                            background: '#D48883',
                            border: 0,
                            color: 'white',
                            height: 48,
                            borderRadius: '0',
                            boxShadow: '0 0 0 0',
                            "&:hover": {
                                background: '#D48883',
                                boxShadow: '0 0 0 0',
                            }
                        }}>
                            Sign Up
                        </Button>
                        <Grid align="center">
                            <Grid item xs={12} >
                                <a href="/login" variant="body2" style={{color: "black",textDecoration:"underlined"}}>
                                    Already have an account? Sign in
                                </a>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
		</Grid>
	);
}