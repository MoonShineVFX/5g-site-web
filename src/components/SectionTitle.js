import PropTypes from 'prop-types';
import { styled } from '@mui/system';

//
const SectionTitleWrapLayout = styled('div')(({ theme }) => ({
    textAlign: 'center',
    borderTop: `1px solid ${theme.palette.primary.main}`,
    marginBottom: '40px',
    position: 'relative',
    '.wrap': {
        maxWidth: '256px',
        height: '100px',
        lineHeight: '1.4',
        margin: 'auto',
        padding: '14px 0',
        position: 'relative',
        overflow: 'hidden',
        '&:after': {
            content: '""',
            width: '100%',
            height: '200px',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '50%',
            position: 'absolute',
            left: '0',
            top: '-100px',
            zIndex: '-1',
        },
        '*': {
            fontWeight: 'normal',
            margin: '0',
        },
    },
    '.primary-title': {
        fontSize: '1.6em',
        fontWeight: 'normal',
        color: theme.palette.bg.primary,
        display: 'inline-block',
        marginBottom: '4px',
    },
    '.secondary-title': {
        color: '#280724',
    },
    '&.no-second': {
        '.wrap': {
            '&:before': {
                content: '""',
                height: '100%',
                display: 'inline-block',
                verticalAlign: 'middle',
            },
        },
    },
    '.mobile': {
        display: 'none',
    },
    [theme.breakpoints.down('md')]: {
        '.wrap': {
            maxWidth: '180px',
            height: '70px',
            padding: '10px 0',
            '&:after': {
                height: '140px',
                top: '-70px',
            },
        },
        '.primary-title': {
            fontSize: '1.4em',
            marginBottom: '0',
        },
        '.secondary-title': {
            fontSize: '0.8em',
        },
        '.mobile': {
            display: 'block',
            position: 'absolute',
            top: '0',
            '.primary-title': {
                fontSize: '1.5em',
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.bg.primary,
                borderBottom: `1px solid ${theme.palette.primary.main}`,
                marginTop: '0',
            },
            '.secondary-title': {
                margin: '0',
            },
        },
        '&.m-wrap': {
            borderTop: '0',
            paddingTop: '40px',
            '&.with-second': {
                paddingTop: '60px',
            },
            '.wrap': {
                maxWidth: '35px',
                height: '24px',
                borderRadius: '50%',
                marginTop: '-13px',
                '.primary-title, .secondary-title': {
                    display: 'none',
                },
            },
        },
    },
}));

//
const SectionTitle = ({ primaryText, secondaryText, showMobile }) => (

    <SectionTitleWrapLayout className={`section-title ${secondaryText ? 'with-second' : 'no-second'} ${showMobile ? 'm-wrap' : ''}`}>
        {
            showMobile &&
                <div className={`mobile web-x-align ${secondaryText ? 'with-secondTitle' : ''}`}>
                    {
                        secondaryText && <h3 className="secondary-title">{secondaryText}</h3>
                    }
                    <h1 className="primary-title">{primaryText}</h1>
                </div>
        }

        <div className="wrap">
            <h1 className="primary-title">{primaryText}</h1>
            {
                secondaryText && <h3 className="secondary-title">{secondaryText}</h3>
            }
        </div>
    </SectionTitleWrapLayout>

);

SectionTitle.defaultProps = {
    primaryText: '',
    secondaryText: '',
    showMobile: false,
};

SectionTitle.propTypes = {
    primaryText: PropTypes.string,
    secondaryText: PropTypes.string,
    showMobile: PropTypes.bool,
};

export default SectionTitle;
