import styled from 'styled-components';
import { Box } from '@mui/material';

export const BoxHA = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    
    & p {
        color: white;
        font-size: 27px;
        font-weight: 700;
    }
    
    & .btn-close {
        background-color: black;
        border-radius: 50%;
        height: 38px;
        width: 38px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
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