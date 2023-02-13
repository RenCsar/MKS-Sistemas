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
    height: 60px;
    padding: 0 60px;    
    position: fixed;
    z-index: 9;
    background: rgb(117,65,229);
    background: -moz-linear-gradient(90deg, rgba(117,65,229,1) 35%, rgba(160,134,219,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(117,65,229,1) 35%, rgba(160,134,219,1) 100%);
    background: linear-gradient(90deg, rgba(117,65,229,1) 35%, rgba(160,134,219,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7541e5",endColorstr="#a086db",GradientType=1);
    box-shadow: 0px 2px 8px 0px rgba(0,0,0,.5);

    .img-container {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 300;
        color: var(--branco);
        gap: 10px;
        user-select: none;

        & img {
            height: 50px;
            border-radius: 8px;
            width: 90px;
            height: 50px;
        }

        & .text-marca {
            font-family: 'Dancing Script', cursive;
            font-size: 32px;
            font-weight: 600;
        }
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
        height: 125px;
    }

`