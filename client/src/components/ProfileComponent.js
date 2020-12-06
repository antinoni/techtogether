import React from "react";
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
import profilePic from "../assets/profilePic.png";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { Link } from "react-router-dom";

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

export default function Profile() {
  const [firstname, setFirstName] = React.useState("Composed TextField");
  const [lastname, setLastName] = React.useState("Composed TextField");
  const [email, setEmail] = React.useState("Composed TextField");
  const [number, setNumber] = React.useState("Composed TextField");
  const [address, setAddress] = React.useState("Composed TextField");
  const [country, setCountry] = React.useState("Composed TextField");

  const classes = useStyles();

  const handleChange = (event) => {
    setFirstName(event.target.value);
    setLastName(event.target.value);
    setEmail(event.target.value);
    setNumber(event.target.value);
    setAddress(event.target.value);
    setCountry(event.target.value);
  };
  return (
    <div>
      <div className="nav-pro">
        <Grid container spacing={3} direction={"row"}>
          <Grid className="nav-list" item xs={3} sm={3}>
            <h1 style={{ marginLeft: "30px" }}>User Profile</h1>
            <List component="nav" aria-label="mailbox folders">
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
            <Grid item xs={6} sm={5}>
              <img
                src={profilePic}
                style={{ marginTop: "30px" }}
                alt="profile picture"
              />
            </Grid>

            <Grid item xs={6} sm={5}>
              <h1>FirstName LastName</h1>
              <p>@username</p>
              <p>General area, Country</p>
            </Grid>
            <Grid item xs={6} sm={5}>
              <FormControl style={{ margin: "10px" }} disabled>
                <InputLabel htmlFor="component-disabled">First Name</InputLabel>
                <Input
                  id="component-disabled"
                  value={firstname}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl style={{ margin: "10px" }} disabled>
                <InputLabel htmlFor="component-disabled">Email</InputLabel>
                <Input
                  id="component-disabled"
                  value={email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl style={{ margin: "10px" }} disabled>
                <InputLabel htmlFor="component-disabled">Address</InputLabel>
                <Input
                  id="component-disabled"
                  value={address}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={5}>
              <FormControl style={{ margin: "10px" }} disabled>
                <InputLabel htmlFor="component-disabled">Last Name</InputLabel>
                <Input
                  id="component-disabled"
                  value={lastname}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl style={{ margin: "10px" }} disabled>
                <InputLabel htmlFor="component-disabled">
                  Phone Number
                </InputLabel>
                <Input
                  id="component-disabled"
                  value={number}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl style={{ margin: "10px" }} disabled>
                <InputLabel htmlFor="component-disabled">Country</InputLabel>
                <Input
                  id="component-disabled"
                  value={country}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={3} direction={"row"}>
          <Grid item xs={3} sm={3}>
            <Link to="/login">
              <h1>Log Out</h1>
            </Link>
          </Grid>
          <Grid style={{ margin: "20px" }} item xs={12} sm={6}>
            <Link to="/profilesettings">
              <p>Edit Profile Information</p>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
