import { styled } from '@mui/system';
import { MenusLayout } from '../partner/partnerLayout';
//
const MenuLayout = styled(MenusLayout)(({ theme }) => ({
    '.title': {
        fontSize: '2.3em',
        fontWeight: 'normal',
        color: theme.palette.primary.main,
        margin: '24px 0',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5em',
        },
    },
}));

//
const ItemsWrapLayout = styled('section')(({ theme }) => ({
    marginBottom: '100px',
    padding: '20px',
    '.item': {
        display: 'block',
    },
    '.thumb': {
        height: '312px',
        [theme.breakpoints.down('400')]: {
            height: '260px',
        },
    },
    '.title': {
        height: '105px',
        WebkitLineClamp: '2',
    },
}));

/** Detail */
//
const SlideShowLayout = styled('section')(({ theme }) => ({
    margin: '40px 0',
    '.wrap': {
        maxWidth: '940px',
        margin: 'auto',
        paddingBottom: '20px',
        position: 'relative',
        overflow: 'hidden',
    },
    '.slide-show': {
        maxWidth: '778px',
        margin: 'auto',
    },
    '.item': {
        height: '438px',
    },
    '.back-button': {
        width: '130px',
        height: '153px',
        fontSize: '1.15em',
        textAlign: 'right',
        color: '#FFF',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '50%',
        position: 'absolute',
        left: '-40px',
        bottom: '0',
        transition: 'all 0.3s ease',
        opacity: '0.5',
        '&:hover': {
            opacity: '1',
        },
        '&:before': {
            content: '""',
            height: '100%',
            display: 'inline-block',
            verticalAlign: 'middle',
        },
        'span': {
            textAlign: 'center',
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: '22px',
        },
        'svg': {
            fontSize: '1.6em',
        },
    },
}));

//
const SectionLayout = styled('section')(({ theme }) => ({
    marginBottom: '40px',
    paddingBottom: '40px',
    '&:not(.section-traffic)&:not(.section-video)': {
        borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    '*': {
        lineHeight: '2',
        color: theme.palette.primary.main,
    },
    '.label': {
        fontWeight: 'bold',
    },
    '&.section-information': {
        '.title': {
            fontSize: '2.3em',
            fontWeight: 'normal',
        },
        'a': {
            fontSize: '0.8em',
            marginLeft: '4px',
        },
    },
    '.description': {
        borderTop: '1px solid',
        borderBottom: '1px solid',
        padding: '40px 0',
        position: 'relative',
        '&:before': {
            content: '""',
            width: '18px',
            height: '24px',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '0% 70% 70% 0',
            position: 'absolute',
            left: '0',
            top: '-12px',
        },
    },
    '.contact': {
        marginTop: '40px',
        'h2': {
            marginBottom: '12px',
        },
        'p': {
            lineHeight: '1.8',
            margin: '0',
        },
    },
    '&.section-relative': {
        '.title': {
            marginTop: '40px',
            '&:before': {
                content: '""',
                width: '14px',
                height: '24px',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '0% 70% 70% 0',
                display: 'inline-block',
                verticalAlign: '-2px',
                marginRight: '12px',
            },
        },
        'span': {
            lineHeight: '1.2',
            display: 'inline-block',
        },
        '.item': {
            marginBottom: '20px',
            'a': {
                textDecoration: 'underline',
                display: 'block',
            },
        },
        '.items-document': {
            paddingInlineStart: '20px',
            'a': {
                marginLeft: '4px',
            },
        },
    },
    '.items-traffic': {
        '.title': {
            fontSize: '1.15em',
            marginTop: '36px',
            marginBottom: '12px',
        },
        'p': {
            whiteSpace: 'pre-wrap',
        },
    },
    '&.section-video': {
        textAlign: 'center',
        borderTop: `5px solid ${theme.palette.primary.main}`,
        paddingTop: '80px',
    },
}));

export {
    MenuLayout,
    ItemsWrapLayout,
    SlideShowLayout,
    SectionLayout,
};
