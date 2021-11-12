import { createTheme } from '@mui/material/styles';

export default createTheme({
    lineClamp: (line = 3) => line,
    spacing: 4,
    palette: {
        primary: {
            main: '#144274',
        },
        bg: {
            primary: '#F1F2F2',
            secondary: '#0B0F22',
            text: '#ECECEC',
        },
        text: {
            primary: '#000',
            secondary: '#9AE5D9',
        },
    },
});
