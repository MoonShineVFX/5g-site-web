import { styled } from '@mui/system';
import { Links } from '../Links';

//
const MenusLayout = styled('section')(({ theme }) => ({
    textAlign: 'center',
    borderTop: `1px solid ${theme.palette.primary.main}`,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    marginBottom: '40px',
    [theme.breakpoints.down('md')]: {
        marginBottom: '20px',
    },
}));

//
const MenuItemLayout = styled(Links)(({ theme }) => ({
    fontSize: '1.5em',
    color: theme.palette.text.primary,
    padding: '20px',
    margin: '0 20px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&.active': {
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
    '&:hover': {
        opacity: '0.85',
    },
    [theme.breakpoints.down('md')]: {
        minWidth: '100px',
        fontSize: '1.15em',
        margin: '0 10px',
        padding: '10px',
        '.active:before': {
            width: '18px',
            height: '26px',
            left: '-9px',
        },
    },
}));

//
const PartnersLayout = styled('section')(({ theme }) => ({
    padding: '0 40px',
    '.item': {
        fontSize: '1.15em',
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.primary.main}`,
        borderBottomWidth: '4px',
        margin: '0 8px 20px',
        padding: '20px 40px',
    },
    '.top': {
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        marginBottom: '20px',
        paddingBottom: '20px',
        display: 'flex',
        alignItem: 'flex-start',
    },
    '.thumb': {
        width: '152px',
        height: '114px',
        borderRadius: '40%',
        marginRight: '24px',
        overflow: 'hidden',
    },
    '.info': {
        flex: '0 0 calc(100% - 152px - 24px)',
    },
    '.name': {
        lineHeight: '1.2',
        color: theme.palette.primary.main,
        margin: '0 0 20px',
    },
    '.title': {
        fontSize: '1.35em',
        margin: '0 0 4px',
        WebkitLineClamp: theme.lineClamp(1),
    },
    '.english-name': {
        WebkitLineClamp: theme.lineClamp(1),
    },
    '.email': {
        textDecoration: 'underline',
    },
    'p': {
        margin: '0',
        wordBreak: 'break-word',
    },
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 -8px',
        '.item': {
            flex: '0 0 calc(100% / 2 - 16px)',
            wordBreak: 'break-word',
        },
        'p': {
            minHeight: '88px',
            WebkitLineClamp: theme.lineClamp(5),
        },
    },
    [theme.breakpoints.down('md')]: {
        padding: '0',
        '.item': {
            fontSize: '0.9em',
            display: 'block',
            margin: '0 0 20px',
            padding: '20px 24px',
        },
        '.name': {
            marginTop: '10px',
            marginBottom: '10px',
        },
        'p': {
            display: 'block',
        },
    },
    [theme.breakpoints.down('sm')]: {
        '.top span': {
            display: 'block',
        },
        '.thumb': {
            margin: '0 auto 20px',
        },
    },
}));

export {
    MenusLayout,
    MenuItemLayout,
    PartnersLayout,
};
