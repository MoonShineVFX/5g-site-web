import { GlobalStyles, Grid } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../utils/theme';
import SlideShow from '../SlideShow';
import { Links } from '../Links';

const styles = {
    'main > div > section': {
        marginBottom: '100px',
        '.section-title': {
            marginBottom: '80px',
        },
    },
    '.breadcrumb': {
        display: 'none',
    },
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.down('md')]: {
        'main > div > section': {
            marginBottom: '40px',
            padding: '0',
            '.section-title': {
                marginBottom: '40px',
            },
        },
    },
};

// Home Style
const homeStyles = <GlobalStyles styles={styles} />;

const SlideShowLayout = styled(SlideShow)(({ theme }) => ({
    '.item': {
        height: '428px',
    },
    [theme.breakpoints.up('md')]: {
        padding: '0 30px',
    },
    [theme.breakpoints.down('sm')]: {
        '.item': {
            height: '360px',
        },
    },
    [theme.breakpoints.down('420')]: {
        '.item': {
            height: '300px',
        },
    },
}));

const ItemLayout = styled(Grid)({
    padding: '0 24px',
    '.item': {
        display: 'block',
    },
    '.thumb': {
        height: '191px',
    },
});

const ItemPartnerLayout = styled(Grid)(({ theme }) => ({
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
    '.itemWrap': {
        marginBottom: '80px',
        padding: '0 10px',
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
    [theme.breakpoints.up('md')]: {
        padding: '0 20px',
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
        WebkitLineClamp: theme.lineClamp(2),
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
            WebkitLineClamp: theme.lineClamp(),
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
    SlideShowLayout,
    ItemLayout,
    ItemPartnerLayout,
    NewsWrapLayout,
    NewsItemWrapLayout,
};
