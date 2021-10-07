import Link from 'next/link';
import PropTypes from 'prop-types';
import Buttons from './Buttons';

//
const Links = ({ url, newPage, children, ...rest }) => (

    <Link href={url}>
        <a
            href={url}
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

Links.defaultProps = {
    url: '',
};

Links.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.any,
};

ButtonLink.propTypes = {
    url: PropTypes.string,
    text: PropTypes.string,
    newPage: PropTypes.bool,
};

export { Links, ButtonLink };
