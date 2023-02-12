import styled from 'styled-components'
import { Box } from '@mui/material';

const base = `
    display: flex;
    flex-direction: column;
    height: 100%;    
`

export const BoxSC = styled(Box)`
    ${base};
    width: 100%;
    background-color: var(--branco);
    min-height: 100vh;
    
    & .lista-container {
        ${base};
        justify-content: center;
        align-items: center;
    }
    
    @media (min-height: 650px) and (min-width: 1200px) {
        height: 100vh;
    }
`