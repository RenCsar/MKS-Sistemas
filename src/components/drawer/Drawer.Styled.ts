import styled from 'styled-components';
import { Box } from '@mui/material';

const base = `
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--branco);
`

export const BoxHA = styled(Box)`
    ${base};
    justify-content: space-between;
    padding: 20px;
    
    & p {
        font-size: 27px;
        font-weight: 700;
    }
    
    & .btn-close {
        ${base};
        background-color: black;
        border-radius: 50%;
        height: 38px;
        width: 38px;
        cursor: pointer;
        opacity: 0.75;
        transition: 0.5s;

        &:hover {
            transform: scale(1.05);
            opacity: 1;
        }

        &:active {
            transform: scale(0.98);
        }
    }
`

export const BoxItem = styled(Box)`
    ${base}
    justify-content: start;
    flex-direction: column;
    gap:20px;
    width: 100%;
    color: var(--preto);
    overflow-y: auto;  
    padding: 20px;    
`

export const BoxI = styled(Box)`

    & img {
        width: 20px;
        height: 18px;
    }

`