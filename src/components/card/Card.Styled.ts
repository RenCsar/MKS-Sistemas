import { Box } from "@mui/system";
import styled from "styled-components";

const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxSC = styled(Box)`
    display: flex;
    justify-content: space-between;  
    flex-direction: column;
    width: 217px;
    height: 275px;
    border-radius: 8px;
    background-color: var(--branco);
    box-shadow: 0px 2px 8px 0px rgba(0,0,0,.5);

    .img-container{
        ${flexCenter};
        width: 100%;
        height: 138px;
        
        .foto {
            width: 110px;
        }
    };

    .title-container{
        display: flex;
        justify-content: space-between;
        padding: 0px 10px;
        gap: 5px;
        
        .name-container{
            font-size: 16px;
            width: 124px;
        }
    
        .preco-container {
            ${flexCenter};
            color: var(--branco);
            background-color: var(--preto);
            border-radius: 5px;
            font-size: 15px;
            font-weight: 700;
            padding: 0px 5px;
            height: 26px;
        }
    }

    .description-container{
        ${flexCenter};
        font-size: 10px;
        padding: 0px 10px;
    }

    .comprar-container {
        ${flexCenter};
        background-color: var(--primario);
        gap: 14px;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        cursor: pointer;
        user-select: none;

        & h6 {
            color: var(--branco);
        }
    }
`