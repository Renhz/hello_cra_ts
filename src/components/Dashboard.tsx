import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Box, Divider } from '@mui/material/';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import * as React from 'react';
import { Outlet } from 'react-router-dom';

import BreadcrumbsItems from './items/BreadcrumbsItems';
import SidebarItems, { SidebarHomepage } from './items/SidebarItems';
import { DashboardContext } from './myContext';
import { DashboardAppBar, DashboardDrawer, SwitchDayNight } from './myStyled';

function Dashboard() {
  const [myTheme, setMyTheme] = React.useState<Theme>(
    createTheme({
      palette: {
        mode: localStorage.getItem('colorMode') === 'light' ? 'light' : 'dark',
      },
    })
  );
  const [open, setOpen] = React.useState(true);
  const context = React.useMemo(
    () => ({
      setTheme: setMyTheme,
    }),
    []
  );
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <DashboardContext.Provider value={context}>
      <ThemeProvider theme={myTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <DashboardAppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}>
                <MenuIcon />
              </IconButton>
              <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} />
              <SwitchDayNight />
            </Toolbar>
          </DashboardAppBar>
          <DashboardDrawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: [2],
              }}>
              測試專案
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav" aria-label="main folders">
              <SidebarHomepage />
              <SidebarItems />
            </List>
          </DashboardDrawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}>
            <Toolbar />
            <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }}>
              <Toolbar
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'right',
                  px: 2,
                }}>
                <BreadcrumbsItems />
              </Toolbar>
              <Outlet />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </DashboardContext.Provider>
  );
}

export default Dashboard;
