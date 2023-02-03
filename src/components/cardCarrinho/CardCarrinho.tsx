import { Box, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, removeCount, removeProduto } from '../../store/reducers/carrinhoSlice'
import { TProdutos } from '../../utils/types'
import VariantButtonGroup from '../buttonGroup/VariantButtonGroup'
import { BoxSC } from './CardCarrinho.Styled'

const CardCarrinho = (produto: TProdutos) => {

  const carrinho = useSelector((state: any)=> state.carrinho)
  const dispatch = useDispatch()

  return (
    <BoxSC>
      <Box className='img-container'>
        <img src={produto.photo} alt={`Foto de ${produto.name}`} />
      </Box>
      <Box className='name-container'>
        {produto.name}
      </Box>
      <Box>
        {/* <VariantButtonGroup /> */}
        <small>Qtd:</small>
        <Box sx={{
          border: '1px solid #BFBFBF',
          borderRadius: '4px',
          width: '50px',
          height: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '10px'
        }}>          
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '15px', cursor: 'pointer', userSelect: 'none'}} onClick={()=> dispatch(removeCount(produto))}>-</Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRight: '1px solid #BFBFBF',
            borderLeft: '1px solid #BFBFBF',
            padding: '0 2px',
            height: '15px',
          }}>{produto.count}</Box>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '15px', cursor: 'pointer', userSelect: 'none'}} onClick={()=> dispatch(addCount(produto))}>+</Box>
        </Box>
      </Box>
      <Box className='price-container'>
        <p>{`R$${Math.round(produto.price)}`}</p>
      </Box>
      <Box className="btn-close" onClick={()=> dispatch(removeProduto(produto))}>
        x
      </Box>
    </BoxSC>
  )
}

export default CardCarrinho