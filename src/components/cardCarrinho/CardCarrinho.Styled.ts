import styled from "styled-components";
import { Box } from "@mui/material";

export const BoxSC = styled(Box)`
    display: flex;
    align-items: center;
    background-color: var(--branco);
    width: 300px;
    height: 95px;
    border-radius: 8px;

    & .img-container {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 60px;
        }
    }
`