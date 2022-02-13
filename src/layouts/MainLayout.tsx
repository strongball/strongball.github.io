import React from 'react';

import { AppBar, Box, Button, IconButton, Toolbar, useScrollTrigger } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

import { Link as RouterLink } from 'react-router-dom';

interface Props {}
const MainLayout: React.FC<Props> = (props) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    return (
        <>
            <AppBar
                sx={{ background: 'white', color: (theme) => theme.palette.text.primary }}
                elevation={trigger ? 2 : 0}
            >
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} />
                    {/* <Button size="large" component={RouterLink} color="inherit" to={{ pathname: '/' }}>
                        關於我
                    </Button> */}
                    {/* <Button size="large" component={RouterLink} color="inherit" to={{ pathname: 'project' }}>
                        作品
                    </Button> */}
                    <IconButton target={'_blank'} href="https://github.com/strongball">
                        <GitHub />
                    </IconButton>
                    {/* <IconButton target={'_blank'} href="https://www.linkedin.com/in/strongball/">
                        <LinkedIn />
                    </IconButton> */}
                </Toolbar>
            </AppBar>
            <Toolbar />
            {props.children}
        </>
    );
};
export default MainLayout;
