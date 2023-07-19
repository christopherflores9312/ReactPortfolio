import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/system';

// Create a styled Link component
const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontWeight: 'bold',
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
      case '/resume':
        return 4;
      default:
        return 0;
    }
  };

  return (
    <AppBar position="static">
      <Tabs value={getTabValue(location)} centered>
        <Tab
          label="Home"
          component={StyledLink}
          to="/ReactPortfolio"
          style={{ color: getTabValue(location) === 0 ? 'red' : 'inherit' }}
        />
        <Tab
          label="About"
          component={StyledLink}
          to="/about"
          style={{ color: getTabValue(location) === 1 ? 'red' : 'inherit' }}
        />
        <Tab
          label="Projects"
          component={StyledLink}
          to="/projects"
          style={{ color: getTabValue(location) === 2 ? 'red' : 'inherit' }}
        />
        <Tab
          label="Contact"
          component={StyledLink}
          to="/contact"
          style={{ color: getTabValue(location) === 3 ? 'red' : 'inherit' }}
        />
        <Tab
          label="Resume"
          component={StyledLink}
          to="/resume"
          style={{ color: getTabValue(location) === 4 ? 'red' : 'inherit' }}
        />
      </Tabs>
    </AppBar>
  );
};

export default Navigation;
