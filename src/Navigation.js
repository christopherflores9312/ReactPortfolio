import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/system';

// Create a styled Link component
const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
}));

const Navigation = () => {
  const location = useLocation();

  // Function to map location to tab index
  const getTabValue = (location) => {
    switch (location.pathname) {
      case '/about':
        return 1;
      case '/projects':
        return 2;
      case '/contact':
        return 3;
      default:
        return 0;
    }
  };

  return (
    <AppBar position="static" sx={{ }}>
      <Tabs value={getTabValue(location)} centered>
        <Tab label="Home" component={StyledLink} to="/" />
        <Tab label="About" component={StyledLink} to="/about" />
        <Tab label="Projects" component={StyledLink} to="/projects" />
        <Tab label="Contact" component={StyledLink} to="/contact" />
      </Tabs>
    </AppBar>
  );
};

export default Navigation;
