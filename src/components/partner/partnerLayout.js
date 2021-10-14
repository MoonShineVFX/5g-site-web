import { GlobalStyles, Grid } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../utils/theme';
import { Links } from '../Links';

const styles = {
    // 'main > div > section': {
    //     marginBottom: '100px',
    //     padding: '0 10px',
    //     '.section-title': {
    //         marginBottom: '80px',
    //     },
    // },
    // [theme.breakpoints.down('md')]: {
    //     'main > div > section': {
    //         marginBottom: '10px',
    //         padding: '20px',
    //         '.section-title': {
    //             marginBottom: '40px',
    //         },
    //     },
    // },
};

// Partner Style
const partnerStyles = <GlobalStyles styles={styles} />;

const MenusLayout = styled('div')(({ theme }) => ({
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
    // [theme.breakpoints.down('768')]: {
    //     marginTop: '30px',
    // },
}));

const PartnersLayout = styled('div')(({ theme }) => ({
    padding: '0 40px',
    '.item': {
        fontSize: '1.15em',
        // flex: '0 0 calc(100% / 2 - 16px)',
        border: `1px solid ${theme.palette.primary.main}`,
        borderBottomWidth: '4px',
        // margin: '0 8px 20px',
        // padding: '20px 40px',
    },
    '.top': {
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        marginBottom: '20px',
        paddingBottom: '20px',
        'span': {
            display: 'inline-block',
            verticalAlign: 'middle',
        },
    },
    '.thumb': {
        width: '152px',
        height: '114px',
        borderRadius: '40%',
        marginRight: '30px',
        overflow: 'hidden',
    },
    '.name': {
        fontSize: '1.25em',
        color: theme.palette.primary.main,
        margin: '0 0 20px',
    },
    'p': {
        minHeight: '88px',
        display: '-webkit-box',
        WebkitLineClamp: '3',
        WebkitBoxOrient: 'vertical',
        margin: '0',
        overflow: 'hidden',
    },
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 -8px',
        '.item': {
            // fontSize: '1.15em',
            flex: '0 0 calc(100% / 2 - 16px)',
            // border: `1px solid ${theme.palette.primary.main}`,
            // borderBottomWidth: '4px',
            margin: '0 8px 20px',
            padding: '20px 40px',
        },
    },
    [theme.breakpoints.down('md')]: {
        padding: '0 20px',
    },
}));

export {
    partnerStyles,
    MenusLayout,
    PartnersLayout,
};
