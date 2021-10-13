import { GlobalStyles, Grid } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../utils/theme';
import { Links } from '../Links';

const styles = {
    'main > div > section': {
        marginBottom: '100px',
        padding: '0 10px',
        '.section-title': {
            marginBottom: '80px',
        },
    },
    '.breadcrumb': {
        display: 'none',
    },
    [theme.breakpoints.down('md')]: {
        'main > div > section': {
            marginBottom: '10px',
            padding: '20px',
            '.section-title': {
                marginBottom: '40px',
            },
        },
    },
};

// Home Style
const homeStyles = <GlobalStyles styles={styles} />;

const ShowMoreButtonLayout = styled('div')(({ theme }) => ({
    textAlign: 'center',
    marginTop: '60px',
    [theme.breakpoints.down('768')]: {
        marginTop: '30px',
    },
}));

const ItemLayout = styled('div')(() => ({
    display: 'flex',
    marginLeft: '-10px',
    marginRight: '-10px',
    '.itemWrap': {
        flex: '1',
        padding: '0 10px',
    },
    '.item': {
        display: 'block',
    },
    [theme.breakpoints.down('768')]: {
        display: 'block',
        '.itemWrap': {
            marginBottom: '20px',
        },
    },
}));

const ItemPartnerLayout = styled(ItemLayout)(({ theme }) => ({
    maxWidth: '900px',
    fontSize: '2em',
    textAlign: 'center',
    margin: 'auto',
    '*': {
        color: theme.palette.primary.main,
    },
    'svg': {
        fontSize: '2.2em',
    },
    'a': {
        width: '240px',
        border: '1px solid',
        borderBottom: '0',
        borderRadius: '70% 70% 0 0',
        padding: '40px 20px 20px',
        position: 'relative',
    },
    'h1': {
        letterSpacing: '2px',
        margin: '4px 0 0',
    },
    '.nothing': {
        width: 'calc(100% - 60px)',
        borderTop: '2px solid',
        position: 'absolute',
        bottom: '-17px',
        overflow: 'hidden',
        '&:after': {
            content: '""',
            width: '35px',
            height: '35px',
            display: 'block',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '50%',
            margin: '-20px auto 0',
        },
    },
    [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
        '.itemWrap': {
            marginBottom: '60px',
        },
        'svg': {
            fontSize: '1.6em',
        },
        'a': {
            width: '220px',
            paddingTop: '50px',
        },
        'h1': {
            fontSize: '1.25em',
        },
    },
}));

const NewsWrapLayout = styled(Grid)(({ theme }) => ({
    '.MuiGrid-root': {
        padding: '0 25px',
    },
    '.title-box': {
        fontSize: '1.15em',
        color: '#280724',
        textAlign: 'center',
        borderTop: `1px solid ${theme.palette.primary.main}`,
        marginBottom: '80px',
        overflow: 'hidden',
        '&:before': {
            content: '""',
            width: '36px',
            height: '30px',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '50%',
            display: 'block',
            margin: '-18px auto 6px',
        },
        '.title': {
            fontWeight: 'normal',
            color: theme.palette.primary.main,
            borderBottom: '1px solid',
            display: 'inline-block',
            margin: '0 0 4px',
        },
    },
    [theme.breakpoints.down('md')]: {
        '.MuiGrid-root': {
            marginBottom: '40px',
            padding: '0',
        },
        '.title-box': {
            fontSize: '1em',
            marginBottom: '20px',
        },
    },
}));

const NewsItemWrapLayout = styled(Links)(({ theme }) => ({
    color: theme.palette.primary.main,
    display: 'block',
    marginBottom: '56px',
    '.title': {
        minHeight: '76px',
        fontWeight: 'normal',
        color: theme.palette.text.primary,
        marginTop: '0',
        display: '-webkit-box',
        WebkitLineClamp: '2',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    },
    'div': {
        fontSize: '1.15em',
        textAlign: 'right',
        color: theme.palette.text.primary,
        borderTop: `1px solid ${theme.palette.primary.main}`,
        borderBottom: `4px solid ${theme.palette.primary.main}`,
        padding: '12px 0',
    },
    '.isHot': {
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '6px',
        float: 'left',
        padding: '0 36px',
    },
    [theme.breakpoints.down('md')]: {
        marginBottom: '40px',
        '.title': {
            lineHeight: '1.4',
            fontSize: '1.15em',
            WebkitLineClamp: '3',
        },
        'div': {
            fontSize: '0.9em',
        },
        '.isHot': {
            fontSize: '1.2em',
            marginTop: '-4px',
        },
    },
}));

export {
    homeStyles,
    ShowMoreButtonLayout,
    ItemLayout,
    ItemPartnerLayout,
    NewsWrapLayout,
    NewsItemWrapLayout,
};
