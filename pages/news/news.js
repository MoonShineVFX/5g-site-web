import {
    Fragment,
    useContext,
    useEffect,
    useState,
} from 'react';

import { useRouter } from 'next/router';
import HeadTag from '../../src/containers/HeadTag';
import { Links } from '../../src/components/Links';
import Paginations from '../../src/components/Paginations';

import {
    newsStyles,
} from '../../src/components/news/newsLayout';

import { GlobalContext } from '../../src/context/global.state';
import util from '../../src/utils/util';

//
const News = ({ pageData }) => {

    // console.log('pageData:', pageData);
    const router = useRouter();

    // Context
    const { menu, globalDispatch } = useContext(GlobalContext);

    // State
    const [type, setType] = useState('all');

    useEffect(() => {

        globalDispatch({
            type: 'menu',
            payload: {
                ...menu,
                level1: pageData.title,
                level2: pageData.currPageTitle,
            },
        });

    }, []);

    // Click menu
    const handleClickMenu = (type) => setType(type);

    // Click page
    const handleChangePage = (e, page) => {

        router.push({
            pathname: '/partner',
            query: { ...router.query, page },
        });

    };

    return (

        <Fragment>
            {newsStyles}
            <HeadTag title={`${pageData.title}-${pageData.currPageTitle}`} />

            {
                // router 一開始是空的
                router.query.page &&
                    <Paginations
                        length={pageData.data.list.length}
                        currPage={+router.query.page}
                        onChange={handleChangePage}
                    />
            }
        </Fragment>

    );

};

export default News;

export async function getStaticProps () {

    const res = await fetch('http://localhost:1001/json/partner.json');
    const data = await res.json();

    if (!data.result) {

        return {
            notFound: true,
        };

    }

    return {
        revalidate: 30,
        props: {
            pageData: {
                title: '最新消息',
                currPageTitle: '新聞快訊',
                data: data.data,
            },
        },
    };

};
