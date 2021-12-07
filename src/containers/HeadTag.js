import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

 const HeadSEO = ({ title, description, children }) => (

    <Head>
        <title>{title}</title>
        <meta name="google-site-verification" content="05W3_xvcmD687SS2d-SdHjlaJePHv535MkwYYQQ_obk" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <script async src="https://cse.google.com/cse.js?cx=bcabe06a1cb63ec85"></script>
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
