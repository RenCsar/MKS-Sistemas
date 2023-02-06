import { BoxSC } from "./Header.Styled"
import { Box, Typography } from '@mui/material'
import Logo from '../../assets/MKS.png'
import { DrawerAside } from "../drawer/Drawer"

export const Header = () => {
    return (
        <BoxSC>
            <Box className='img-container'>
                <img src={Logo} />
                <Typography data-testid="marca">
                    Sistemas
                </Typography>
            </Box>
            <Box className='btn-container'>
                <DrawerAside />
            </Box>
        </BoxSC>
    )
}