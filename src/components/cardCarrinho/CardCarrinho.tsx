import { Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeProduto } from '../../store/reducers/carrinhoSlice'
import { TProdutos } from '../../utils/types'
import ButtonGroup from '../buttonGroup/ButtonGroup'
import { BoxSC } from './CardCarrinho.Styled'

const CardCarrinho = (produto: TProdutos) => {

  const dispatch = useDispatch()

  return (
    <BoxSC>
      <Box className='img-container'>
        <img src={produto.photo} alt={`Foto de ${produto.name}`} />
      </Box>
      <Box className='name-container'>
        {produto.name}
      </Box>
      <Box className='quantidade-container'>
        <Box>        
          <ButtonGroup {...produto} />
        </Box>
        <Box className='price-container'>
          <p>{`R$${(Math.round(produto.price) * produto.count).toLocaleString("pt-br", {
            currency: "BRL",
          })}`}</p>
        </Box>
      </Box>
      <Box className="btn-close" onClick={() => dispatch(removeProduto(produto))}>
        x
      </Box>
    </BoxSC>
  )
}

export default CardCarrinho