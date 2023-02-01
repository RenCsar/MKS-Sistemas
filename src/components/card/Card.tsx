import { Box, Typography } from '@mui/material'
import { BoxSC } from './Card.Styled'
import Compra from '../../assets/shopping-bag.svg'
import { TProdutos } from '../../utils/types'
import { useDispatch } from 'react-redux'
import { addProduto } from '../../store/reducers/carrinhoSlice'

export const Card = (produto: TProdutos) => {

  const dispatch = useDispatch()

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
      <Box 
      className='comprar-container'
      onClick={()=> {dispatch(addProduto(produto))}}
      >
        <img src={Compra} alt="icone-compras" />
        <Typography variant='h6'>
          COMPRAR
        </Typography>
      </Box>
    </BoxSC>
  )
}