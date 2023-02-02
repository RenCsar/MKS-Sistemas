import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined"  size="small" aria-label="small button group" sx={{
        color: 'black',
        outline: 'black'
      }}>
        <Button sx={{color: 'black', border: '1px solid black', width: '20px', height: '20px'}}>-</Button>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid black',
          padding: '5px'
        }}>
          0
        </Box>
        <Button sx={{color: 'black', border: '1px solid black',}}>+</Button>
      </ButtonGroup>
    </Box>
  );
}