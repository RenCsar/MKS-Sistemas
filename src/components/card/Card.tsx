import { Box, Typography } from '@mui/material'
import { BoxSC } from './Card.Styled'
import Compra from '../../assets/shopping-bag.svg'
import { TProdutos } from '../../utils/types'

export const Card = (produto: TProdutos) => {
  return (
    <BoxSC>
      <Box>
        <img src={produto.photo} alt="foto do produto" className={'foto'} />
      </Box>
      <Box>
        {produto.name}
      </Box>
      <Box>
        {produto.price}
      </Box>
      <Box>
        {produto.description}
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