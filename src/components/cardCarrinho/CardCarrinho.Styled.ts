import styled from "styled-components";
import { Box } from "@mui/material";

export const BoxSC = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--branco);
    width: 300px;
    height: 95px;
    border-radius: 8px;
    position: relative;
    padding: 10px;
    gap: 10px;

    & .img-container {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 60px;
        }
    };

    & .name-container{
        width: 100px;
    };

    & small {
        font-size: 8px;
        position: absolute;
        bottom: 60px
    };

    & .price-container {
        font-weight: 700;
    }

    & .btn-close{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: black;
        border-radius: 50%;
        height: 18px;
        width: 18px;
        padding-bottom: 2px;
        cursor: pointer;
        transition: 0.5s;
        font-size: 12px;
        position: absolute;
        top: -8px;
        right: -8px;

        &:hover {
            transform: scale(1.05);
        }

        &:active {
            transform: scale(0.98);
        }
    }
`