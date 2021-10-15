import { GlobalStyles } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../utils/theme';

const styles = {
    // [theme.breakpoints.down('md')]: {
    //     'main > div': {
    //         padding: '20px 20px 40px',
    //     },
    // },
};

// News Style
const newsStyles = <GlobalStyles styles={styles} />;

//
const MenusLayout = styled('section')(({ theme }) => ({
    textAlign: 'center',
    borderTop: `1px solid ${theme.palette.primary.main}`,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    marginBottom: '40px',
    'a': {
        fontSize: '1.5em',
        color: theme.palette.text.primary,
        padding: '20px',
        margin: '0 20px',
        position: 'relative',
        overflow: 'hidden',
    },
    '.active': {
        color: theme.palette.primary.main,
        '&:before': {
                content: '""',
                width: '28px',
                height: '34px',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '50%',
                position: 'absolute',
                left: '-17px',
                top: '50%',
                transform: 'translateY(-50%)',
        },
    },
    [theme.breakpoints.down('md')]: {
        marginTop: '20px',
        marginBottom: '20px',
        'a': {
            minWidth: '100px',
            fontSize: '1.15em',
            margin: '0 10px',
            padding: '10px',
        },
        '.active:before': {
            width: '18px',
            height: '26px',
            left: '-9px',
        },
    },
}));

export {
    newsStyles,
};
