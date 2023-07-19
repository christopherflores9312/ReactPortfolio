import React from 'react';
import { Typography, Container, Avatar, Box } from '@mui/material';
import { styled } from '@mui/system';
import avatar from './avatar.png'; // update with your image path
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
      <Box mb={10}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        sx={{
          backgroundColor: 'background.paper',
          color: 'text.primary',
          padding: '40px',
          borderRadius: '8px',
        }}
      >
        <StyledAvatar src={avatar} alt="Christopher Flores" />
        {/* <StyledAvatar alt="Christopher Flores" /> */}

        <Typography variant="h3" component="h1">
          About Me
        </Typography>
        <StyledTypography variant="body1">
          With a background in IT at a leading telecommunications company, I am a passionate web developer keen on leveraging my experience to build innovative web solutions. I have a proven record of managing complex IT tasks and improving operational efficiency. I'm currently looking to apply my skills and dedication in a full-time web developer role. I am constantly exploring the latest technologies to stay updated and deliver the best solutions to real-world problems.        </StyledTypography>

        <Typography variant="h3" component="h1">
          Projects
        </Typography>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </Box>
    </Container>
  );
}

export default Home;
