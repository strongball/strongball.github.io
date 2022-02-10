import { AppBar, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import React from 'react';

interface Props {}
const MainLayout: React.FC<Props> = (props) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    return (
        <>
            {/* <AppBar elevation={trigger ? 4 : 0}>
                <Toolbar>
                    <Typography variant="h3">Ball</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar /> */}
            {props.children}
        </>
    );
};
export default MainLayout;
