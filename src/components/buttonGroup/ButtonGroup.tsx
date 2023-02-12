import { Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addCount, removeCount } from '../../store/reducers/carrinhoSlice'
import { TProdutos } from '../../utils/types'
import { BoxSC } from './ButtonGroup.Styled'

const ButtonGroup = (produto: TProdutos) => {

    const dispatch = useDispatch()

    return (
        <BoxSC>
            <Box className='qtd-container'>
                <small>Qtd:</small>
            </Box>
            <Box className='container'>
                <Box
                    className='btn'
                    onClick={() => dispatch(removeCount(produto))}
                >
                    -
                </Box>
                <Box className='count'>
                    {produto.count}
                </Box>
                <Box
                    className='btn'
                    onClick={() => dispatch(addCount(produto))}
                >
                    +
                </Box>
            </Box>
        </BoxSC>
    )
}

export default ButtonGroup
