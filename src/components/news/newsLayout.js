import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import ShowMoreButton from '../ShowMoreButton';
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
        fontWeight: 'bold',
        margin: '0',
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

const TagsLayout = styled('div')(({ theme }) => ({
    color: theme.palette.primary.main,
    'span': {
        fontSize: '0.6em',
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '8px',
        marginRight: '10px',
        padding: '2px 20px',
    },
}))

/* 詳細頁 */
//
const DetailHeaderLayout = styled('section')(({ theme }) => ({
    fontSize: '0.9em',
    color: theme.palette.text.primary,
    borderBottom: '2px solid',
    paddingBottom: '30px',
    position: 'relative',
    '&:before': {
        content: '""',
        width: '23px',
        height: '30px',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '0% 70% 70% 0',
        position: 'absolute',
        left: '0',
        bottom: '-15px',
    },
    '.detail-tags span': {
        fontSize: '1em',
    },
    '.title': {
        fontSize: '3.4em',
        fontWeight: 'normal',
        margin: '0',
    },
    '.info-socials': {
        textAlign: 'right',
    },
    '.socials': {
        marginRight: '-10px',
    },
    [theme.breakpoints.down('md')]: {
        '.detail-tags span': {
            float: 'left',
            marginBottom: '8px',
        },
        '.title': {
            fontSize: '1.7em',
        },
        '.info-socials': {
            marginTop: '20px',
        },
    },
}));

//
const MainContentLayout = styled('section')(({ theme }) => ({
    margin: '100px 0',
    padding: '20px 0',
    [theme.breakpoints.down('md')]: {
        margin: '20px 0',
        'img': {
            width: '100% !important',
            maxWidth: '320px',
        },
    },
}));

//
const OtherNewsWrapLayout = styled('section')(({ theme }) => ({
    '.section-title': {
        marginBottom: '60px',
    },
    [theme.breakpoints.down('md')]: {
        '.section-title': {
            marginBottom: '20px',
        },
        '.item': {
            marginBottom: '20px',
        },
    },
}));

const ShowMoreButtonLayout = styled(ShowMoreButton)(({ theme }) => ({
    margin: '0 0 60px',
    [theme.breakpoints.down('md')]: {
        margin: '20px 0',
    },
}));

export {
    MenusLayout,
    ItemLayout,
    SelectOptLayout,
    ItemsWrapLayout,
    TagsLayout,
    DetailHeaderLayout,
    MainContentLayout,
    OtherNewsWrapLayout,
    ShowMoreButtonLayout,
};
