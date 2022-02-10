import { Card, CardContent, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import HomePage from './containers/HomePage';
import { blue } from '@mui/material/colors';
const theme = createTheme({
    palette: {
        primary: {
            main: blue[400],
        },
    },
    typography: {
        fontFamily: ['Noto Sans TC', 'Noto Sans SC'].join(','),
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
        },
    },
});
interface Props {}
const App: React.FC<Props> = (props) => {
    // return <HomePage />;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HomePage />
        </ThemeProvider>
    );
};
export default App;
