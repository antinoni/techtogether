import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import LoginImage from '../assets/LogInGirl.png'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const useStyles = makeStyles((theme) => ({
	root: {
        height: '100vh',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
        fontStyle: 'normal',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: '#99B27F'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
	},
	submit: {
        margin: theme.spacing(3, 0, 2),
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
    },
    google: {
        margin: theme.spacing(3, 0, 2),
        color: '#ffffff',
        background: '#de5246 ',
        border: 0,
        color: 'white',
        height: 48,
        borderRadius: '0',
        boxShadow: '0 0 0 0',
        "&:hover": {
            background: '#de5246 ',
            boxShadow: '0 0 0 0',
        }
    },
    facebook: {
        margin: theme.spacing(3, 0, 2),
        color: '#ffffff',
        background: '#3b5998',
        border: 0,
        color: 'white',
        height: 48,
        borderRadius: '0',
        boxShadow: '0 0 0 0',
        "&:hover": {
            background: '#3b5998',
            boxShadow: '0 0 0 0',
        }
    },
}));

const LoginComponent = ({ login, isAuthenticated }) => {
	const classes = useStyles();
	const [ data, setData ] = useState(null);
	function handleSubmit(e) {
		e.preventDefault();

    const { role, email, password } = data;
    login(role, email, password);
	}

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={3} sm={4} md={7} position="absolute" component={Paper} elevation={0} square>
            <img 
                style={{marginLeft:"170px",marginTop:"30px"}}
                src="https://media.discordapp.net/attachments/784159930029703189/784777971557859358/login.png?width=466&height=618" />
            </Grid>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
				<div className={classes.paper} style={{width:"350px", marginTop:"100px"}}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Welcome Back!
					</Typography>
					<form className={classes.form} onSubmit={handleSubmit} noValidate>
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
							onChange={(e) => {
								setData({
									...data,
									email: e.target.value
								});
							}}
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
							onChange={(e) => {
								setData({
									...data,
									password: e.target.value
								});
							}}
						/>
                        <Grid container direction={"column"} >
                            <Grid item xs={12} style={{marginBottom:"-30px"}} >
                                <Button 
                                type="submit" 
                                fullWidth 
                                variant="contained" 
                                className={classes.submit}>
                                    Sign In
                                </Button>
                            </Grid>           
                            <Grid item xs={12} style={{marginBottom:"-30px"}}>                
                                <Button 
                                type="submit" 
                                fullWidth 
                                variant="contained" 
                                className={classes.google}
                                style={{
                                    boxShadow: '0 0 0 0',
                                    "&:hover": {
                                        background: 'blue',
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
                                className={classes.facebook}>
                                    Sign In with Facebook
                                </Button>
                            </Grid>
                        </Grid>
						<Grid container>
							<Grid item xs={12} >
                                <Link href="/signup" variant="body2" style={{color: "black",textDecoration:"underlined"}}>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}

export default (LoginComponent);
