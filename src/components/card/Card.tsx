import { Box, Typography } from '@mui/material'
import { BoxSC } from './Card.Styled'
import Compra from '../../assets/shopping-bag.svg'

export const Card = (props: any) => {
  return (
    <BoxSC>
      <Box>
        IMG
      </Box>
      <Box>
        {props.nome}
      </Box>
      <Box>
        {props.preco}
      </Box>
      <Box>
        {props.descricao}
      </Box>
      <Box className='comprar-container'>
        <img src={Compra} alt="icone-compras" />
        <Typography variant='h6'>
          COMPRAR
        </Typography>
      </Box>
    </BoxSC>
  )
}