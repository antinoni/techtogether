import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ArrowDropDown, ArrowDropDownCircleOutlined, RadioButtonCheckedOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	root: {
        height: '100vh',
	},
	paper: {
		marginTop: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: '#99B27F'
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(3)
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
	}
}));

const SignupComponent = ({ register, isAuthenticated }) => {
	const classes = useStyles();
	const [ data, setData ] = useState(null);

	const handleSubmit = async e => {
    const {email, password, firstName, lastName, repeatpassword} = data;
    e.preventDefault();
    register({ email, password, firstName, lastName, repeatpassword});
    console.log(`created account  ${email}`);
  }
 

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
            <Grid item xs={3} sm={4} md={7} position="absolute" component={Paper} elevation={0} square>
            <img 
                style={{height:"618px",marginLeft:"170px",marginTop:"30px"}}
                src="https://cdn.discordapp.com/attachments/784159930029703189/784777973924364368/signup.png" />
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
                <div className={classes.paper} style={{width:"350px", marginTop:"100px"}}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create an account
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            firstName: e.target.value
                                        });
                                    }}
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
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            lastName: e.target.value
                                        });
                                    }}
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
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            email: e.target.value
                                        });
                                    }}
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
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            password: e.target.value
                                        });
                                    }}
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
                                    onChange={(e) => {
                                        setData({
                                            ...data,
                                            repeatpassword: e.target.value
                                        });
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            Sign Up
                        </Button>
                        <Grid align="center">
                            <Grid item xs={12} >
                                <Link href="/login" variant="body2" style={{color: "black",textDecoration:"underlined"}}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
		</Grid>
	);
}

export default (SignupComponent);
