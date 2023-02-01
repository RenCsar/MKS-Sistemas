import styled from "styled-components";
import { Box } from '@mui/material'

const base = `
    display: flex;
    justify-content: space-between;
`

export const BoxSC = styled(Box)`
    ${base};
    align-items: center;
    width: 100%;
    height: 101px;
    padding: 0 60px;
    background-color: var(--azul);

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
            ${base};
            background-color: var(--branco);
            width: 90px;
            height: 45px;
            border-radius: 8px;
            padding: 20px;
        }
        
        & p {
            color: var(--preto);
            font-size: 18px;
            font-weight: 700;
        }
    }

    @media (max-width: 400px) {
        flex-direction: column;
        justify-content: space-around;
        height: 120px;
    }

`