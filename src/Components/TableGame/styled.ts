import { styled } from '@stitches/react';

export const Table = styled('table', {
  background: 'gray',
  width: '500px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 0 4px 0',
  boxSizing: 'border-box',
  tBody: {
    width: '100%',
    height: 'min-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    th: {
      background: 'gray',
      width: '100%',
      // height: `calc(500px / ${5})`,
    },
  },
});
export const Td = styled('td', {
  background: 'white',
  '&:hover': {
    cursor: 'pointer',
  },
  '&.blue': {
    background: '#04A9F5',
  },
});
