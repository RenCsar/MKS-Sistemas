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

    & .lista-container {
        ${base};
        justify-content: center;
        align-items: center;
    }
`