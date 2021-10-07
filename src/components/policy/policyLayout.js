import { styled } from '@mui/system';
import { Links } from '../Links';
import { SectionLayout } from '../place/placeLayout';
import {
    MenusLayout,
    DetailHeaderLayout,
} from '../news/newsLayout';

//
const PolicyItemLayout = styled(Links)(({ theme }) => ({
    '&.item .second-title': {
        color: theme.palette.primary.main,
    },
}));

/** Detail */
//
const DetailHeaderWrapLayout = styled(DetailHeaderLayout)(({ theme }) => ({
    borderBottom: '0',
    marginBottom: '40px',
    paddingBottom: '0',
    '&:before': {
        display: 'none',
    },
    '*': {
        color: theme.palette.primary.main,
    },
    '.detail-tags': {
        marginBottom: '10px',
        [theme.breakpoints.down('md')]: {
            fontSize: '0.9em',
        },
    },
}));

//
const DetailMenusLayout = styled(MenusLayout)(({ theme }) => ({
    '.menu-wrap, a': {
        marginRight: '0',
    },
    '.menu-wrap aside': {
        marginBottom: '0',
    },
    '.info-wrap': {
        fontSize: '1.15em',
        borderLeft: `5px solid ${theme.palette.primary.main}`,
        paddingRight: '80px',
        paddingLeft: '12px',
    },
    '.item.active': {
        fontWeight: 'bold',
        '&:before': {
            display: 'none',
        },
    },
    '.update-time': {
        fontSize: '0.9em',
    },
    '.title': {
        fontSize: '2.1em',
    },
    'p': {
        margin: '10px 0 0',
    },
    [theme.breakpoints.down('md')]: {
        '.info-wrap': {
            paddingRight: '0',
        },
        '.menu-wrap': {
            display: 'none',
        },
        '.title': {
            fontSize: '1.5em',
        },
        'p': {
            fontSize: '0.9em',
        },
    },
}));

//
const MainContentLayout = styled(SectionLayout)(({ theme }) => ({
    fontSize: '1.15em',
    '&.section-information': {
        borderBottom: '0 !important',
        paddingBottom: '0',
        '.title': {
            fontSize: '1.15em',
            fontWeight: 'bold',
            marginBottom: '0',
            '&:before': {
                content: '""',
                width: '14px',
                height: '24px',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '0% 70% 70% 0',
                display: 'inline-block',
                verticalAlign: '-4px',
                marginRight: '12px',
            },
        },
        '.link': {
            fontSize: '1em',
            textDecoration: 'underline',
            marginLeft: '0',
        },
    },
    '.item': {
        marginBottom: '40px',
    },
    'p': {
        whiteSpace: 'break-spaces',
        margin: '0',
    },
    '.contact': {
        marginTop: '0',
    },
    [theme.breakpoints.down('md')]: {
        '&.section-information': {
            '.title': {
                fontSize: '1em',
                '&:before': {
                    verticalAlign: 'middle',
                },
            },
        },
    },
}));

export {
    PolicyItemLayout,
    DetailHeaderWrapLayout,
    DetailMenusLayout,
    MainContentLayout,
};
