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
      <Box className='img-container'>
        <img src={produto.photo} alt="foto do produto" className={'foto'} />
      </Box>
      <Box className='title-container'>
        <Box className='name-container'>
          {produto.name}
        </Box>
        <Box className='preco-container'>
          {`R$${Math.round(produto.price).toLocaleString("pt-br", {
            currency: "BRL",
          })}`}
        </Box>
      </Box>
      <Box className='description-container'>
        {produto.description}
      </Box>
      <Box
        className='comprar-container'
        onClick={() => { dispatch(addProduto(produto)) }}
      >
        <img src={Compra} alt="icone-compras" />
        <Typography variant='h6'>
          COMPRAR
        </Typography>
      </Box>
    </BoxSC>
  )
}