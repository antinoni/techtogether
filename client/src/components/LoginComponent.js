import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


export default function LoginComponent({ login, isAuthenticated }) {

	return (
		<Grid container component="main" style={{height: '100vh'}}>
			<CssBaseline />
			<Grid item xs={3} sm={4} md={7} position="absolute" component={Paper} elevation={0} square>
            <img 
                style={{marginLeft:"170px",marginTop:"30px"}}
                src="https://media.discordapp.net/attachments/784159930029703189/784777971557859358/login.png?width=466&height=618" />
            </Grid>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
                <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width:"350px", 
                        marginTop:"100px"
                    }}>
					<Avatar style={{backgroundColor: '#99B27F'}} >
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Welcome Back!
					</Typography>
					<form style={{
                        width: '100%'       
                        }} 
                    noValidate>
						<TextField
                            color ="#ffffff"
							margin="normal"
							required
                            fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
                            fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
                        <Grid container direction={"column"} >
                            <Grid item xs={12} style={{marginBottom:"-30px"}} >
                                <Button  component={Link} to="/profile" 
                                type="submit" 
                                fullWidth 
                                variant="contained" 
                                style={{
                                    marginTop:'15px',
                                    color: '#ffffff',
                                    background: '#D48883',
                                    color: 'white',
                                    height: '48px',
                                    borderRadius: '0',
                                    boxShadow: '0 0 0 0',
                                    "&:hover": {
                                        background: '#D48883',
                                        boxShadow: '0 0 0 0',
                                    }
                                }}>
                                    Sign In
                                </Button>
                            </Grid>           
                            <Grid item xs={12} style={{marginBottom:"-30px"}}>                
                                <Button 
                                type="submit" 
                                fullWidth 
                                variant="contained" 
                                style={{
                                    marginTop:'40px',
                                    color: '#ffffff',
                                    background: '#de5246 ',
                                    color: 'white',
                                    height: '48px',
                                    borderRadius: '0',
                                    boxShadow: '0 0 0 0',
                                    "&:hover": {
                                        background: '#de5246 ',
                                        boxShadow: '0 0 0 0',
                                    }
                                    }}>
                                    Sign In with Google+
                                </Button>
                            </Grid>           
                            <Grid item xs={12}>   
                                <Button 
                                type="submit" 
                                fullWidth 
                                variant="contained"
                                style={{
                                    marginTop: '40px',
                                    color: '#ffffff',
                                    background: '#3b5998',
                                    color: 'white',
                                    height: '48px',
                                    borderRadius: '0',
                                    boxShadow: '0 0 0 0',
                                    "&:hover": {
                                        background: '#3b5998',
                                        boxShadow: '0 0 0 0',
                                    }
                                }}>
                                    Sign In with Facebook
                                </Button>
                            </Grid>
                        </Grid>
						<Grid container>
							<Grid item xs={12} >
                                <a href="/signup" variant="body2" style={{color: "black",textDecoration:"underlined"}}>
									{"Don't have an account? Sign Up"}
								</a>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
