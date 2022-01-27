import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

 const HeadSEO = ({ title, description, children }) => (

    <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="google-site-verification" content="05W3_xvcmD687SS2d-SdHjlaJePHv535MkwYYQQ_obk" />
        {children}
    </Head>

);

HeadSEO.defaultProps = {
    title: '高雄5G文化科技平台',
    description: '高雄5G文化科技平台',
};

HeadSEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.any,
};

export default HeadSEO;
