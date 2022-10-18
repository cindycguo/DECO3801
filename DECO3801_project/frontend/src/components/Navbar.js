import * as React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TodayIcon from "@mui/icons-material/Today";
import ScheduleIcon from "@mui/icons-material/Schedule";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";

// Adapted from CBI Analytics React tutorial

const drawerWidth = 220;
function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const path = location.pathname


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      <List>
        <ListItem component={Link} to='/' button key={"1"} selected={'/' === path}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        
        <ListItem component={Link} to='/employee' button key={"2"} selected={'/employee' === path}>
          <ListItemIcon>
            <TodayIcon />
          </ListItemIcon>
          <ListItemText primary={"Employee"} />
        </ListItem>

        <ListItem component={Link} to='/notes' button key={"3"} selected={'/notes' === path}>
          <ListItemIcon>
            <TodayIcon />
          </ListItemIcon>
          <ListItemText primary={"Notes"} />
        </ListItem>

        <ListItem component={Link} to='/sessions' button key={"4"} selected={'/sessions' === path}>
          <ListItemIcon>
            <ScheduleIcon />
          </ListItemIcon>
          <ListItemText primary={"Sessions"} />
        </ListItem>
        <ListItem component={Link} to='/newsessions' button key={"5"} selected={'/newsessions' === path}>
          <ListItemIcon>
            <ScheduleIcon />
          </ListItemIcon>
          <ListItemText primary={"New Sessions"} />
        </ListItem>
        <p class="logout-wrap"><a href="accounts/logout" class="logout">Log Out</a></p>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"

        sx={{
          bgcolor : '#3B5998',
          width: "100%",
          zIndex: "999999"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link to='/'> <img src={"/static/images/logo.png"} height="60" alt="Show Me the Mud"/></Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

        <Toolbar />

    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func
};

export default Navbar;