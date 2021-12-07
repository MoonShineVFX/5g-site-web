import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

 const HeadSEO = ({ title, description, children }) => (

    <Head>
        <title>{title}</title>
        <meta name="google-site-verification" content="4hl166o0JOhTPLKcoJZ38oMY0LZNg9qIKilsMAwa1-I" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        {children}
    </Head>

);

HeadSEO.defaultProps = {
    title: '高雄市地方文化5G',
    description: '高雄市地方文化5G',
};

HeadSEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.any,
};

export default HeadSEO;
