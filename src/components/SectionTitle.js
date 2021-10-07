import PropTypes from 'prop-types';
import { styled } from '@mui/system';

//
const SectionTitleWrapLayout = styled('div')(({ theme }) => ({
    textAlign: 'center',
    borderTop: `1px solid ${theme.palette.primary.main}`,
    marginBottom: '40px',
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
    },
}));

//
const SectionTitle = ({ primaryText, secondaryText }) => (

    <SectionTitleWrapLayout className={`section-title ${secondaryText ? '' : 'no-second'}`}>
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
};

SectionTitle.propTypes = {
    primaryText: PropTypes.string,
    secondaryText: PropTypes.string,
};

export default SectionTitle;
