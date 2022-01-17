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
    '.wrap': {
        width: '940px',
        margin: 'auto',
        position: 'relative',
    },
    '.slide-show': {
        maxWidth: '778px',
        margin: 'auto',
    },
    '.item': {
        height: '438px',
    },
    '.MuiButton-root.MuiButton-text': {
        '&.button-arrow-left': {
            left: '-64px',
        },
        '&.button-arrow-right': {
            right: '-64px',
        },
    },
    '.back-button': {
        borderRadius: '50%',
        position: 'absolute',
        '&:before': {
            content: '""',
            height: '100%',
            display: 'inline-block',
            verticalAlign: 'middle',
        },
        '&:focus, &:active, &:focus-visible': {
            outline: 'dashed',
            outlineColor: 'red',
        },
        'span': {
            textAlign: 'center',
            display: 'inline-block',
            verticalAlign: 'middle',
        },
    },
    [theme.breakpoints.up('md')]: {
        margin: '40px 0',
        '.wrap': {
            paddingBottom: '20px',
            overflow: 'hidden',
        },
        '.back-button': {
            width: '130px',
            height: '140px',
            fontSize: '1.15em',
            textAlign: 'right',
            color: '#FFF',
            backgroundColor: theme.palette.primary.main,
            left: '-36px',
            bottom: '10px',
            transition: 'all 0.3s ease',
            opacity: '0.5',
            '&:hover': {
                opacity: '1',
            },
            'span': {
                marginRight: '24px',
            },
            'svg': {
                fontSize: '1.6em',
            },
        },
        '.mobile': {
            display: 'none',
        }
    },
    [theme.breakpoints.down('1024')]: {
        '.wrap': {
            width: '872px',
        },
        '.slide-show': {
            maxWidth: '710px',
        },
        '.item': {
            height: '400px',
        },
    },
    [theme.breakpoints.down('md')]: {
        marginBottom: '20px',
        '.desktop': {
            display: 'none',
        },
        '.wrap': {
            width: 'calc(100vw - 40px)', // padding 左右
            padding: '0 20px',
        },
        '.slide-show': {
            position: 'relative',
        },
        '.mobile.back-button': {
            width: '86px',
            height: '86px',
            fontSize: '0.9em',
            textAlign: 'center',
            color: theme.palette.primary.main,
            backgroundColor: 'rgba(196, 196, 196, 0.5)',
            right: '12px',
            bottom: '-32px',
        },
        '.MuiButton-root.MuiButton-text': {
            '&.button-arrow-left': {
                left: '-30px',
            },
            '&.button-arrow-right': {
                right: '-30px',
            },
        },
    },
    [theme.breakpoints.down('sm')]: {
        '.item': {
            height: '320px',
        },
        '.mobile.back-button': {
            width: '60px',
            height: '60px',
            fontSize: '0.8em',
            right: '6px',
            bottom: '-12px',
        },
        '.dot': {
            margin: '2px 6px',
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
            marginTop: '0',
        },
        'a': {
            fontSize: '0.8em',
            marginLeft: '4px',
        },
        '.description': {
            wordBreak: 'break-word',
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
                display: 'inline-block',
            },
            '.filename': {
                marginRight: '6px',
                '&:hover': {
                    textDecoration: 'underline',
                },
            },
        },
    },
    '.items-traffic': {
        marginBottom: '20px',
        '.title': {
            fontSize: '1.15em',
            marginTop: '36px',
            marginBottom: '12px',
        },
        'p': {
            whiteSpace: 'pre-wrap',
            marginTop: '0',
        },
    },
    '&.section-video': {
        textAlign: 'center',
        borderTop: `5px solid ${theme.palette.primary.main}`,
        paddingTop: '80px',
        '.video-wrap > *': {
            maxWidth: '100%',
        },
    },
    '.grid-socials': {
        textAlign: 'right',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '0.9em',
        '.grid-info': {
            order: '2',
        },
        'h2': {
            fontSize: '1.25em',
        },
        '&.section-information': {
            '.title': {
                fontSize: '1.7em',
            },
        },
        '&.section-traffic': {
            marginBottom: '0',
        },
    },
}));

export {
    MenuLayout,
    ItemsWrapLayout,
    SlideShowLayout,
    SectionLayout,
};
