import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import avatar from './avatar.png'; // replace with the path to your image

const StyledAvatar = styled(Avatar)({
  width: '150px',
  height: '150px',
  margin: '0 auto',
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginTop: theme.spacing(2),
  fontWeight: 'bold', // Add bold font weight
}));

function About() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="top"
      padding="2em"
      height={{ xs: '100%', md: 'calc(100vh - 2rem)' }}
    >
      <StyledAvatar src={avatar} alt="Christopher Flores" />
      <Typography variant="h3" component="h1">
        Christopher Flores
      </Typography>
      <Box
        mb={2}
        sx={{
          backgroundColor: 'background.paper',
          color: 'text.primary',
          padding: '40px',
          borderRadius: '8px',
        }}
      >
        <StyledTypography variant="body1" align="center">
          With a background in IT at a leading telecommunications company, I am a passionate web developer keen on leveraging my experience to build innovative web solutions.
          I have a proven record of managing complex IT tasks and improving operational efficiency.
          I'm currently looking to apply my skills and dedication in a full-time web developer role. I am constantly exploring the latest technologies to stay updated and deliver the best solutions to real-world problems.
        </StyledTypography>
      </Box>
    </Box>
  );
}

export default About;
