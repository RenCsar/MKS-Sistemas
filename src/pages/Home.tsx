import { Box } from '@mui/system'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { Lista } from '../components/lista de produtos/Lista'
import { BoxSC } from './Home.Style'

export const Home = () => {

    return (
        <BoxSC>
            <Header />
            <Box sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Lista />
            </Box>
            <Footer />
        </BoxSC>
    )
}