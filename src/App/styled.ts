import { styled } from '@stitches/react';

export const ContainerApp = styled('div', {
  background: '#ddd',
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '30px',
});

export const WrapGame = styled('div', {
  width: 'min-content',
  height: 'min-content',
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
});

export const AlertsContainer = styled('div', {
  // background: "white",
  width: '350px',
  height: '580px',
  boxSizing: 'border-box',
  padding: '10px',
  '.title': {
    width: '100%',
    height: '45px',
    textAlign: 'center',
    fontWeight: 'normal',
  },
});

export const ListAlert = styled('div', {
  width: '100%',
  height: 'calc(100% - 45px)',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '10px',
  overflowY: 'scroll',
  scrollBehavior: 'smooth',
  scrollbarWidth: '5px',
});

export const Alert = styled('div', {
  background: '#FCF8E3',
  width: '100%',
  minHeight: '60px',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  p: {
    color: '#cebc94',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
});

export const WrapTable = styled('div', {
  // background: "#900",
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
});

export const WrapSelector = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
});

export const Selector = styled('select', {
  width: '60%',
  padding: '10px',
  borderRadius: '8px',
  border: 'none',
  background: 'White',
});

export const Button = styled('button', {
  width: '40%',
  padding: '10px',
  borderRadius: '8px',
  border: 'none',
  background: '#04A9F5',
  color: 'white',
  cursor: 'pointer',
});
