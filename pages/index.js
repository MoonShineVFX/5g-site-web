import React, { Fragment, useContext } from 'react';
import { GlobalStyles } from '@mui/material';
import {
    SlideShowWrapLayout,
    SlideShowItemLayout,
    SlideshowInfoLayout,
    ItemNewArrivalLayout,
    ItemDocumentLayout,
} from '../src/components/home/homeLayout';

import HeadTag from '../src/containers/HeadTag';
import { Links } from '../src/components/Links';

import { GlobalContext } from '../src/context/global.state';
import util from '../src/utils/util';

const { priceWithCommas } = util;

const styles = {
    'main > div > *': {
        marginBottom: '80px',
    },
};

const Home = ({ pageData }) => {

    // console.log('pageData:', pageData);

    // Style
    const homeStyles = <GlobalStyles styles={styles} />;

    // Context
    const { slideshowActive } = useContext(GlobalContext);

    return (

        <Fragment>
            {homeStyles}
            <HeadTag title={pageData.title} />

            {/* <SlideShowWrapLayout data={pageData.data.banner}>
                {
                    pageData.data.banner.map(({
                        id,
                        title,
                        description,
                        price,
                        imgUrl,
                        status,
                    }, idx) => (

                        <SlideShowItemLayout
                            key={id}
                            className={(idx === slideshowActive) ? 'active' : 'hide'}
                        >
                            <div className="inner">
                                <Links url="login" target="_blank">
                                    <img src={imgUrl} alt={title} />
                                </Links>

                                <SlideshowInfoLayout>
                                    <span className="status">{status}</span>
                                    <h2 className="title">{title}</h2>
                                    <p className="description" title={description}>{description}</p>
                                    <div className="price">{util.priceWithCommas(price)}</div>
                                </SlideshowInfoLayout>
                            </div>
                        </SlideShowItemLayout>

                    ))
                }
            </SlideShowWrapLayout> */}
        </Fragment>

    );

};

export async function getStaticProps () {

    // const res = await util.serviceServer('/json/home/home.json');
    // const { data } = res;

    // const res = await fetch('http://localhost:1001/json/home.json');
    // const data = await res.json();

    // if (!data.result) {

    //     return {
    //         redirect: {
    //             destination: '/',
    //             permanent: true,
    //         },
    //     };

    // }

    return {
        props: {
            pageData: {
                title: '首頁',
                data: { a: '111' },
                // data: data.data,
            },
        },
    };

};

export default Home;
