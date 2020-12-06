import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import RestoreIcon from "@material-ui/icons/Restore";
import Grid from "@material-ui/core/Grid";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  paper: {
    marginTop: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#99B27F",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#ffffff",
    background: "#D48883",
    border: 0,
    color: "white",
    height: 48,
    borderRadius: "0",
    boxShadow: "0 0 0 0",
    "&:hover": {
      background: "#D48883",
      boxShadow: "0 0 0 0",
    },
  },
  linkstyle: {
    textDecoration: "none",
    color: "black",
  },
}));

export default function ProfileSettings() {
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [newpassword, setNewPassword] = React.useState("");

  const classes = useStyles();

  const handleChange = (event) => {
    setFirstName(event.target.value);
    setLastName(event.target.value);
    setAddress(event.target.value);
    setCountry(event.target.value);
    setUsername(event.target.value);
    setNewPassword(event.target.value);
  };
  return (
    <div>
      <div className="nav-pro">
        <Grid container spacing={3} direction={"row"}>
          <Grid className="nav-list" item xs={3} sm={3}>
            <h1 style={{ marginLeft: "30px" }}>User Profile</h1>
            <List component="nav">
              <Link to="/profile" className={classes.linkstyle}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <PersonOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="General" />
                </ListItem>
              </Link>
              <Divider />
              <Link to="/profilesettings" className={classes.linkstyle}>
                <ListItem button divider>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <SettingsOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Settings" />
                </ListItem>
              </Link>
              <Link to="/profilearchive" className={classes.linkstyle}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <RestoreIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Archive" />
                </ListItem>
                <Divider light />
              </Link>
            </List>
          </Grid>
          <Grid className="grid-right" container sm={5}>
            <Grid style={{ margin: "10px" }} item xs={12}>
              <h1> Change Profile Information</h1>
              <FormControl style={{ margin: "10px" }} variant="filled">
                <InputLabel htmlFor="component-filled">First Name</InputLabel>
                <FilledInput
                  id="component-filled"
                  value={firstname}
                  onChange={handleChange}
                  label="firstName"
                />
              </FormControl>
              <FormControl style={{ margin: "10px" }} variant="filled">
                <InputLabel htmlFor="component-filled">Last Name</InputLabel>
                <FilledInput
                  id="component-filled"
                  value={lastname}
                  onChange={handleChange}
                  label="lastname"
                />
              </FormControl>
              <FormControl style={{ margin: "10px" }} variant="filled">
                <InputLabel htmlFor="component-filled">Address</InputLabel>
                <FilledInput
                  id="component-filled"
                  value={address}
                  onChange={handleChange}
                  label="address"
                />
              </FormControl>
              <FormControl style={{ margin: "10px" }} variant="filled">
                <InputLabel htmlFor="component-filled">Country</InputLabel>
                <FilledInput
                  id="component-filled"
                  value={country}
                  onChange={handleChange}
                  label="country"
                />
              </FormControl>
            </Grid>
            <Grid style={{ margin: "10px" }} item xs={12}>
              <h1> Change Username</h1>
              <FormControl style={{ margin: "10px" }} variant="filled">
                <InputLabel htmlFor="component-filled">New Username</InputLabel>
                <FilledInput
                  id="component-filled"
                  value={username}
                  onChange={handleChange}
                  label="username"
                />
              </FormControl>
            </Grid>
            <Grid style={{ margin: "10px" }} item xs={12}>
              <h1> Change Password</h1>
              <FormControl style={{ margin: "10px" }} variant="filled">
                <InputLabel htmlFor="component-filled">New Password</InputLabel>
                <FilledInput
                  id="component-filled"
                  value={newpassword}
                  onChange={handleChange}
                  label="newpassword"
                />
              </FormControl>
              <FormControl style={{ margin: "10px" }} variant="filled">
                <InputLabel htmlFor="component-filled">
                  Confirm Password
                </InputLabel>
                <FilledInput
                  id="component-filled"
                  value={newpassword}
                  onChange={handleChange}
                  label="newpassword"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={6} direction={"row"}>
            <Grid item xs={3} sm={3}>
              <Link to="/login">
                <h1>Log Out</h1>
              </Link>
            </Grid>
            <Grid style={{ margin: "10px" }} xs={3} sm={5}>
              <Button
                size="large"
                type="submit"
                variant="contained"
                large
                className={classes.submit}
              >
                SUBMIT
              </Button>{" "}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
