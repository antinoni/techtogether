import React from "react";
import { Link } from "react-router-dom";
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


export default function ProfileArchive() {

  return (
    <div>
      <div className="nav-pro">
        <Grid container spacing={3} direction={"row"}>
          <Grid className="nav-list" item xs={3} sm={3}>
            <h1 style={{ marginLeft: "30px" }}>User Profile</h1>
            <List component="nav">
              <Link to="/profile" 
                style={{
                textDecoration: "none",
                color: "black",
              }}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor: "#99B27F"}}>
                      <PersonOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="General" />
                </ListItem>
              </Link>
              <Divider />
              <Link to="/profilesettings" style={{backgroundColor: "#99B27F"}}>
                <ListItem button divider>
                  <ListItemAvatar>
                    <Avatar  style={{backgroundColor: "#99B27F"}}>
                      <SettingsOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Settings" />
                </ListItem>
              </Link>
              <Link to="/profilearchive"
              style={{
                textDecoration: "none",
                color: "black",
              }}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor: "#99B27F"}}>
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
              <h1> Past Posts</h1>
            </Grid>
            <Grid style={{ margin: "10px" }} item xs={12}>
              <h3> Title of Post</h3>
              <p> Details</p>
              <p> Helped By: User123</p>
              <p>Date: 12/05/20</p>
            </Grid>
          </Grid>
          <Grid container spacing={6} direction={"row"}>
            <Grid item xs={3} sm={3}>
              <Link to="/login">
                <h1>Log Out</h1>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
