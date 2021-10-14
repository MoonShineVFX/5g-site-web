import Link from 'next/link';
import PropTypes from 'prop-types';
import Buttons from './Buttons';

//
const Links = ({ url, children, ...rest }) => {

    console.log('links rest', rest)
    return (

    <Link href={url}>
        <a href={url} {...rest}>{children}</a>
    </Link>

);
}

//
const ButtonLink = ({ url, text }) => (

    <Links url={url}>
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
};

export { Links, ButtonLink };
