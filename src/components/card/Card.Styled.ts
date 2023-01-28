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
    justify-content: space-between; // Provisório em quando não defino os tamanhos dos componentes internos
    
    .comprar-container {
        background-color: var(--azul);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 14px;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;

        & h6 {
            color: var(--branco);
        }
    }
`