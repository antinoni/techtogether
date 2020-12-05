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
}));

function Profile() {
  const classes = useStyles();
  return (
    <div>
      <div className="nav-pro">
        <Grid container spacing={3} direction={"row"}>
          <Grid className="nav-list" item xs={3} sm={3}>
            <h1 style={{ marginLeft: "30px" }}>User Profile</h1>
            <List component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="General" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <SettingsOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <RestoreIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Archive" />
              </ListItem>
              <Divider light />
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
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Profile;
