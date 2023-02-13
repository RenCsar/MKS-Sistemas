import { BoxSC } from "./Header.Styled"
import { Box, Typography } from '@mui/material'
import Logo from '../../assets/logo.png'
import { DrawerAside } from "../drawer/Drawer"

export const Header = () => {
    return (
        <BoxSC>
            <Box className='img-container'>
                <img src={Logo} alt="logo da empresa" />
                <Typography data-testid="marca" className="text-marca">
                    Shopping
                </Typography>
            </Box>
            <Box className='btn-container'>
                <DrawerAside />
            </Box>
        </BoxSC>
    )
}