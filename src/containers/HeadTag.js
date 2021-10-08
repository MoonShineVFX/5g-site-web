import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

 const HeadSEO = ({ title, description, children }) => (

    <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        {children}
    </Head>

);

HeadSEO.defaultProps = {
    title: 'ˋ中華電信5G',
    description: 'ˋ中華電信5G',
};

HeadSEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.any,
};

export default HeadSEO;
