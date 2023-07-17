import React from 'react';
import { Typography, Container, Avatar, Box } from '@mui/material';
import { styled } from '@mui/system';
// import avatar from './path_to_your_photo.jpg'; // update with your image path
import Project from './Project';

const StyledAvatar = styled(Avatar)({
  width: '150px',
  height: '150px',
  margin: '0 auto',
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginTop: theme.spacing(2),
}));

// Add your project data here
const projects = [
  {
    title: "Online Text Editor",
    image: "https://github.com/christopherflores9312/PWA-Text-Editor/raw/main/screenshot.png",
    deployedUrl: "https://pwa-text-editor-9312-b4b9cc7dd634.herokuapp.com/",
    githubUrl: "https://github.com/christopherflores9312/PWA-Text-Editor"
  },
  {
    title: "Online Note Taking App",
    image: "https://github.com/christopherflores9312/NoteTaker/raw/main/public/assets/example.jpg",
    deployedUrl: "https://notetaker9312.herokuapp.com/notes",
    githubUrl: "https://github.com/christopherflores9312/NoteTaker"
  },
  {
    title: "Online Weather Dashboard",
    image: "https://github.com/christopherflores9312/weather-dashboard/raw/main/assets/img/preview.png",
    deployedUrl: "https://christopherflores9312.github.io/weather-dashboard/",
    githubUrl: "https://github.com/christopherflores9312/weather-dashboard"
  },
  // add more projects as needed
];

function Home() {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        {/* <StyledAvatar src={avatar} alt="Your Name" /> */}
        <Typography variant="h3" component="h1">
          About Me
        </Typography>
        <StyledTypography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla, nibh id bibendum rutrum, nulla augue vestibulum nulla, eget bibendum erat sapien ac libero. Sed eget turpis nec ipsum mollis pellentesque. Integer vel turpis at sapien facilisis ultricies.
        </StyledTypography>

        {/* Add the following block to render your Project components */}
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </Box>
    </Container>
  );
}

export default Home;
