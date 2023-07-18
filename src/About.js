import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import avatar from './avatar.png'; // replace with the path to your image

const StyledAvatar = styled(Avatar)({
  width: '150px',
  height: '150px',
  margin: '0 auto',
});

function About() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="2em"
    >
      <StyledAvatar src={avatar} alt="Christopher Flores" />
      <Typography variant="h3" component="h1">
        Christopher Flores
      </Typography>
      <Typography variant="body1" align="center">
        With a background in IT at a leading telecommunications company, I am a passionate web developer keen on leveraging my experience to build innovative web solutions. 
        I have a proven record of managing complex IT tasks and improving operational efficiency. 
        I'm currently looking to apply my skills and dedication in a full-time web developer role. I am constantly exploring the latest technologies to stay updated and deliver the best solutions to real-world problems.
      </Typography>
    </Box>
  );
}

export default About;
