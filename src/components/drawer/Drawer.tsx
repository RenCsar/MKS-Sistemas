import { Box, Typography, Drawer, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useState } from 'react';
import { Anchor } from '../../utils/types';
import { BoxHA } from './Drawer.Styled';
import Car from '../../assets/car.png'
import { useDispatch, useSelector } from 'react-redux';
import { limparCarrinho } from '../../store/reducers/carrinhoSlice';

export const DrawerAside = () => {

    const produto = useSelector((state: any) => state.carrinho);
    const dispatch = useDispatch();

    const [state, setState] = useState({
        right: false,
    });

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
                background: 'var(--azul)',
            }}
        >
            <Box
                sx={{
                    background: 'var(--azul)',
                    minHeight: '100vh',
                    width: '400px',
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
                    height: '70vh',
                    overflowY: 'auto'
                }}
                >                    
                    <List>
                        {produto.map((el: any) => (
                            <ListItem key={el.id} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary={el.description} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box>                    
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            width: '100%',
                            cursor: 'pointer',
                            color: 'var(--branco)',
                            padding: '0px, 20px',                            
                        }}
                    >
                        <Typography
                            variant='subtitle1'
                            onClick={() => { dispatch(limparCarrinho()) }}
                            sx={{
                                textDecoration: 'underline',
                            }}
                        >
                            {`Limpar carrinho (${produto.length})`}
                        </Typography>
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
                <Box key={anchor}
                >
                    <Button onClick={toggleDrawer(anchor, true)} className={'btn'}>
                        <img src={Car} />
                        <Typography component={'p'}>
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