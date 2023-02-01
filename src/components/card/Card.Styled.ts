import { Box } from "@mui/system";
import styled from "styled-components";

export const BoxSC = styled(Box)`
    background-color: var(--branco);
    width: 217px;
    height: 285px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px 0px rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;  

    .img-container{
        display: flex;
        justify-content: center;
        align-items: center;
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
            background-color: var(--preto);
            color: var(--branco);
            font-size: 15px;
            font-weight: 700;
            padding: 0px 5px;
            height: 26px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .description-container{
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 10px;
    }

    .comprar-container {
        background-color: var(--azul);
        display: flex;
        justify-content: center;
        align-items: center;
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