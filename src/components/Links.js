import Link from 'next/link';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import Buttons from './Buttons';

//
const Links = ({ url, newPage, title, children, ...rest }) => (

    <Link href={url}>
        <a
            href={url}
            title={title}
            aria-label={title}
            {...newPage && { target: '_blank'}}
            {...rest}
        >
            {children}
        </a>
    </Link>

);

//
const ButtonLink = ({ url, text, newPage, ...rest }) => (

    <Links url={url} newPage={newPage} {...rest}>
        <Buttons text={text} />
    </Links>

);

//
const BlindGuideLayout = styled(Links)({
    fontSize: '1.2em',
    color: '#FFF',
    padding: '4px',
    position: 'absolute',
    left: '-40px',
    '&.inContent': {
        color: '#000',
    },
});

// 導盲用定位點
const BlindGuide = ({ title, accessKey, ...rest }) => (

    <BlindGuideLayout
        url={`#${accessKey}`}
        id={`A${accessKey}`}
        title={title}
        name={accessKey}
        accessKey={accessKey}
        {...rest}
    >
        :::
    </BlindGuideLayout>

);

Links.defaultProps = {
    url: '',
};

Links.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    newPage: PropTypes.bool,
    children: PropTypes.any,
};

ButtonLink.propTypes = {
    url: PropTypes.string,
    text: PropTypes.string,
    newPage: PropTypes.bool,
};

BlindGuide.propTypes = {
    title: PropTypes.string,
    accessKey: PropTypes.string.isRequired,
};

export { Links, ButtonLink, BlindGuide };
