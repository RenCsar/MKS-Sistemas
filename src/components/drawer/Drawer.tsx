import { Box, Typography, Drawer, Button, useTheme, useMediaQuery } from '@mui/material'
import { useState } from 'react';
import { Anchor, TProdutos, TStore } from '../../utils/types';
import { BoxHA, BoxItem } from './Drawer.Styled';
import Car from '../../assets/car.png'
import { useDispatch, useSelector } from 'react-redux';
import { limparCarrinho } from '../../store/reducers/carrinhoSlice';
import CardCarrinho from '../cardCarrinho/CardCarrinho';

export const DrawerAside = () => {

    const produto = useSelector((state: TStore) => state.carrinho);
    const dispatch = useDispatch();

    const values = produto.map((el: TProdutos) => el.price * el.count)
    const subtotal = values.length > 0 ? values.reduce((soma: number, i: number) => soma + i) : 0

    const [state, setState] = useState({
        right: false,
    });

    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
            sx={{
                background: 'var(--primario)',
            }}
        >
            <Box
                sx={{
                    background: 'var(--primario)',
                    minHeight: '100vh',
                    width: smDown? '100vw' : '450px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <BoxHA>
                    <Typography>
                        Carrinho de compras
                    </Typography>
                    <Box
                        className="btn-close"
                        onClick={toggleDrawer(anchor, false)}
                    >
                        X
                    </Box>
                </BoxHA>
                <Box
                    sx={{
                        height: '65vh',
                        overflowY: 'auto'
                    }}
                >
                    <BoxItem>
                        {produto.map((el: TProdutos, index: number) => (
                            <CardCarrinho key={`${el.name}-${index}`} {...el} />
                        ))}
                    </BoxItem>
                </Box>
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            width: '100%',
                            cursor: 'pointer',
                            color: 'var(--branco)',
                            padding: '0px 20px',
                        }}
                    >
                        <Typography
                            variant='subtitle1'
                            onClick={() => dispatch(limparCarrinho())}                           
                        >
                            {`Limpar carrinho (${produto.length})`}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0px 20px',
                            color: 'var(--branco)',
                            fontSize: '28px',
                            fontWeight: '700',
                            height: '50px',
                        }}
                    >
                        <Box>
                            Total:
                        </Box>
                        <Box>
                            {`R$ ${subtotal.toLocaleString("pt-br", {
                                currency: "BRL",
                            })}`}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            background: '#000000',
                            width: '100%',
                            height: '75px',
                            color: 'var(--branco)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '20px',
                            fontWeight: '700'
                        }}
                    >
                        Finalizar Compra
                    </Box>
                </Box>
            </Box>
        </Box>
    );

    return (
        <Box>
            {(['right'] as const).map((anchor) => (
                <Box key={anchor}>
                    <Button
                        onClick={toggleDrawer(anchor, true)}
                        className={'btn'}>
                        <img src={Car} />
                        <Typography component={'p'} sx={{ mt: '6px' }}>
                            {produto.length}
                        </Typography>
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </Box>
            ))}
        </Box>
    )
}