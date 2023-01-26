import styled from "styled-components";
import { Box } from '@mui/material'

export const BoxSC = styled(Box)`
    background-color: var(--azul);
    height: 101px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;

    .img-container {
        display: flex;
        align-items: flex-end;
        font-size: 20px;
        font-weight: 300;
        color: var(--branco);
        gap: 10px;
        user-select: none;
    }

    .btn-container {

        .btn {
            background-color: var(--branco);
            width: 90px;
            height: 45px;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            padding: 20px;
        }
        
        & p {
            color: var(--preto);
            font-size: 18px;
            font-weight: 700;
        }
    }

`