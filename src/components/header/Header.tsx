import { BoxSC } from "./Header.Styled"
import { Box, Typography, Button } from '@mui/material'
import Logo from '../../assets/MKS.png'
import Car from '../../assets/car.png'

export const Header = () => {
    return (
        <BoxSC>
            <Box className='img-container'>
                <img src={Logo}/>
                <Typography>
                    Sistemas
                </Typography>
            </Box>
            <Box className='btn-container'>
                <Button className="btn">
                    <img src={Car}/>
                    <Typography component={'p'}>
                        0
                    </Typography>
                </Button>
            </Box>
        </BoxSC>
    )
}