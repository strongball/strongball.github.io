import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[400],
            contrastText: 'white',
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
