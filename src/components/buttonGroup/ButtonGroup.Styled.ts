import styled from "styled-components";
import { Box } from "@mui/material";

const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxSC = styled(Box)`
    & .container{
        ${flexCenter}
        border: 1px solid #BFBFBF;
        border-radius: 4px;
        width: 50px;
        height: 20px;
        font-size: 10px
    };

    & .btn{
        ${flexCenter}
        width: 15px;
        cursor: pointer; 
        user-select: none
    };

    & .count {
        ${flexCenter}
        border-right: 1px solid #BFBFBF;
        border-left: 1px solid #BFBFBF;
        padding: 0 5px;
        height: 15px;
        user-select: none;
    }
`