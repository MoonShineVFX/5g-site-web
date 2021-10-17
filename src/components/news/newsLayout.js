import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import { MenuItemLayout } from '../partner/partnerLayout';

//
const MenusLayout = styled(Grid)(({ theme }) => ({
    '.menu-wrap': {
        width: '100%',
    },
    'aside': {
        borderTop: `1px solid ${theme.palette.primary.main}`,
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        marginBottom: '40px',
    },
    [theme.breakpoints.up('md')]: {
        '.menu-wrap': {
            maxWidth: '160px',
            marginRight: '60px',
        },
        'aside': {
            padding: '8px 0',
        },
        '.paginations .MuiPagination-ul': {
            justifyContent: 'left',
        },
    },
}));

//
const ItemLayout = styled(MenuItemLayout)(({ theme }) => ({
    fontSize: '1.15em',
    textAlign: 'center',
    padding: '16px',
    [theme.breakpoints.up('xs')]: {
        margin: '0 10px 0 0',
    },
    [theme.breakpoints.up('md')]: {
        display: 'block',
    },
    [theme.breakpoints.down('md')]: {
        padding: '10px 20px',
    },
}));

//
const SelectOptLayout = styled('select')(({ theme }) => ({
    minWidth: '260px',
    fontSize: '1.15em',
    backgroundColor: theme.palette.bg.primary,
    borderColor: theme.palette.primary.main,
    marginBottom: '40px',
    padding: '4px 12px',
    outline: '0',
    transition: 'all 0.3s ease',
    '&:hover': {
        opacity: '0.85',
    },
}));

//
const ItemsWrapLayout = styled('div')(({ theme }) => ({
    fontSize: '1.15em',
    '.item': {
        color: theme.palette.text.primary,
        borderLeft: `5px solid ${theme.palette.primary.main}`,
        display: 'block',
        marginBottom: '40px',
        padding: '4px 12px',
    },
    '.date': {
        fontSize: '0.9em',
        color: theme.palette.primary.main,
    },
    '.title': {
        fontSize: '2em',
        margin: '0',
    },
    '.tags': {
        color: theme.palette.primary.main,
        'span': {
            fontSize: '0.6em',
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: '8px',
            marginRight: '10px',
            padding: '2px 20px',
        },
    },
    'p': {
        marginBottom: '0',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '0.9em',
        '.item:last-child': {
            marginBottom: '0',
        },
        '.date': {
            fontSize: '0.8em',
        },
        '.title': {
            fontSize: '1.7em',
        },
    },
}));

export {
    MenusLayout,
    ItemLayout,
    SelectOptLayout,
    ItemsWrapLayout,
};
