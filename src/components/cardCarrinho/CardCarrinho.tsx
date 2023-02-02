import { Box, Button } from '@mui/material'
import { TProdutos } from '../../utils/types'
import VariantButtonGroup from '../buttonGroup/VariantButtonGroup'
import { BoxSC } from './CardCarrinho.Styled'

const CardCarrinho = (produto: TProdutos) => {
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
        <Box sx={{
          border: '1px solid #BFBFBF',
          borderRadius: '4px',
          width: '50px',
          height: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '15px'}}>-</Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRight: '1px solid black',
            borderLeft: '1px solid black',
            padding: '0 2px',
            height: '15px',

          }}>0</Box>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '15px'}}>+</Box>

        </Box>
      </Box>
    </BoxSC>
  )
}

export default CardCarrinho