import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar open={isSidebarOpen} />
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 2,
            transition: "margin-left 0.3s ease",
            marginLeft: isSidebarOpen ? "240px" : "60px",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;

import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleSidebar}
          sx={{ marginRight: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          My Application
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";

interface SidebarProps {
  open: boolean;
}

const drawerWidth = 240;
const collapsedWidth = 60;

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : collapsedWidth,
          transition: "width 0.3s ease",
          overflowX: "hidden",
        },
      }}
    >
      <List
        subheader={
          <ListSubheader component="div" disableSticky>
            GEM
          </ListSubheader>
        }
      >
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/get-token-for-pb">
            <ListItemText primary="Get Token for PB" />
          </ListItemButton>
        </ListItem>
      </List>

      <List
        subheader={
          <ListSubheader component="div" disableSticky>
            GET
          </ListSubheader>
        }
      >
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/tenant-manager">
            <ListItemText primary="Tenant Manager" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import GetTokenForm from "./gem/GetTokenForm";
import TenantManagerForm from "./get/TenantManagerForm";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/get-token-for-pb" element={<GetTokenForm />} />
          <Route path="/tenant-manager" element={<TenantManagerForm />} />
          <Route path="/" element={<TenantManagerForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
