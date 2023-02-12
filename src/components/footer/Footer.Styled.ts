import styled from "styled-components";
import { Box } from "@mui/material";

export const BoxSC = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 34px;
    background-color: #EEEEEE;

    @media (max-width: 400px){
       word-wrap: break-word;
       padding: 15px;
       text-align: center;
    }
`