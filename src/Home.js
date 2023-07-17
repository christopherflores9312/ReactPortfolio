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
    title: "Project 1",
    image: "/path/to/project1/image",
    deployedUrl: "https://project1.com",
    githubUrl: "https://github.com/username/project1"
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
