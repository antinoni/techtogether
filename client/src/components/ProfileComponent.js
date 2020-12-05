import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import RestoreIcon from "@material-ui/icons/Restore";

function Profile() {
  return (
    <div>
      <div className="nav-pro">
        <h3>User Profile</h3>
        <List component="nav" aria-label="mailbox folders">
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <PersonOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="General" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemAvatar>
              <Avatar>
                <SettingsOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <RestoreIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Archive" />
          </ListItem>
          <Divider light />
        </List>
      </div>
      <h1> Profile Page</h1>
    </div>
  );
}

export default Profile;
