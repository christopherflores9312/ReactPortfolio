import React from 'react';
import Project from './Project';
import { Container, Box } from '@mui/material';

const projects = [
  {
    title: "Video Lingo",
    image: "./videolingoscreenshot.png",
    deployedUrl: "https://videolingo-4a86a4dabd29.herokuapp.com/",
    githubUrl: "https://github.com/christopherflores9312/VideoLingo"
  },
  {
    title: "Online Text Editor",
    image: "https://github.com/christopherflores9312/PWA-Text-Editor/raw/main/screenshot.png",
    deployedUrl: "https://pwa-text-editor-9312-b4b9cc7dd634.herokuapp.com/",
    githubUrl: "https://github.com/christopherflores9312/PWA-Text-Editor"
  },
  {
    title: "Online Weather Dashboard",
    image: "https://github.com/christopherflores9312/weather-dashboard/raw/main/assets/img/preview.png",
    deployedUrl: "https://christopherflores9312.github.io/weather-dashboard/",
    githubUrl: "https://github.com/christopherflores9312/weather-dashboard"
  },
  // add more projects as needed
];

function Projects({ title, image, deployedUrl, githubUrl }) {
  return (
    <Container maxWidth="md">
      <Box mb={10}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </Box>
    </Container>
  );
}

export default Projects;
