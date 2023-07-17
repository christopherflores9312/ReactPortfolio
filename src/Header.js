import React from 'react';
import Navigation from './Navigation';
import { styled } from '@mui/system';

const HeaderWrapper = styled('header')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#31343d',
  padding: 20,
  '@media (max-width:768px)': {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const Title = styled('h1')({
  backgroundColor: '#92ccce',
  padding: 10,
  width: 300,
  textAlign: 'left',
  marginLeft: -20,
  color: '#31343d',
  margin: 0,
  '@media (max-width:768px)': {
    marginLeft: 0,
    textAlign: 'left',
    width: '50%',
    marginBottom: 20,
    fontSize: '3vw',
  },
});

function Header() {
  return (
    <HeaderWrapper>
      <Title>Christopher Flores</Title>
      <Navigation />
    </HeaderWrapper>
  );
}

export default Header;
