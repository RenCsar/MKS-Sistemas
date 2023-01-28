import { Box, Typography, Drawer, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useState } from 'react';
import { Anchor } from '../../utils/types';
import { BoxHA, Btn } from './Drawer.Styled';
import Car from '../../assets/car.png'

export const DrawerAside = () => {

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
                    height: '100vh',
                    width: '400px'
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
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );

    return (
        <Box>
            {(['right'] as const).map((anchor) => (
                <Box key={anchor}
                >
                    <Btn onClick={toggleDrawer(anchor, true)} className={'btn'}>
                        <img src={Car} />
                        <Typography component={'p'}>
                            0
                        </Typography>
                    </Btn>
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
