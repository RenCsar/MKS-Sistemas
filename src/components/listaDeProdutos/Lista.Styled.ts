import { Box } from '@mui/material'
import styled from 'styled-components'

export const BoxSK = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 22px;
    flex-wrap: wrap;
    max-width: 1150px;
`

export const BoxSC = styled(BoxSK)`
    margin: 75px 100px 15px 100px;
    
    @media (max-width: 400px) {        
        margin: 140px 100px 15px 100px;
    }
`