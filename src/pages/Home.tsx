import { Box } from '@mui/system'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { Lista } from '../components/listaDeProdutos/Lista'
import { BoxSC } from './Home.Style'

export const Home = () => {

    return (
        <BoxSC>
            <Header />
            <Box className='lista-container'>
                <Lista />
            </Box>
            <Footer />
        </BoxSC>
    )
}