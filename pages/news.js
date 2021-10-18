import { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@mui/material';
import dayjs from 'dayjs';

import HeadTag from '../src/containers/HeadTag';
import { Links } from '../src/components/Links';
import Paginations from '../src/components/Paginations';

import {
    MenusLayout,
    ItemLayout,
    SelectOptLayout,
    ItemsWrapLayout,
    TagsLayout,
} from '../src/components/news/newsLayout';

import { GlobalContext } from '../src/context/global.state';
import useQuery from '../src/utils/useQuery';
import util from '../src/utils/util';

const config = {
    news: '新聞快訊',
    newsIndustry: '產業訊息',
};

//
const NewsItem = ({
    data: { id, title, description, createTime, tags },
}) => (

    <Links
        url={`/news/${id}`}
        className="item"
    >
        <span className="date">{dayjs(createTime).format('YYYY/MM/DD')}</span>
        <h1 className="title">{title}</h1>
        <TagsLayout>
            {tags.map((id) => <span key={id}>{id}</span>)}
        </TagsLayout>
        <p>{description}</p>
    </Links>

);

//
const News = ({ pageData }) => {

    // console.log('pageData:', pageData);
    const router = useRouter();
    const query = useQuery();

    // Context
    const { menu, globalDispatch } = useContext(GlobalContext);

    useEffect(() => {

        if (!query) return;

        globalDispatch({
            type: 'menu',
            payload: {
                ...menu,
                level1: pageData.title,
                level2: config[query.cate] || pageData.currPageTitle,
                level1Link: '',
            },
        });

    }, []);

    // Click page
    const handleChangePage = (e, page) => {

        // page "..."
        if (page === null) return;

        router.push({
            pathname: router.pathname,
            query: { ...router.query, page },
        });

    };

    // Select option
    const handleChangeOpt = ({ target: { value } }) => {

        let param = (value === '') ? { page: query.page, cate: query.cate } : { ...query, tag: value };

        router.push({
            pathname: router.pathname,
            query: { ...param },
        });

    };

    return (

        <Fragment>
            <HeadTag title={`${pageData.title}-${config[query?.cate] || pageData.currPageTitle}`} />

            <MenusLayout
                container
                component="section"
            >
                <Grid
                    item
                    xs={12}
                    md={2}
                    className="menu-wrap"
                >
                    <aside>
                        {
                            Object.keys(config).map((key) => (

                                <ItemLayout
                                    key={key}
                                    url={`/news?page=1&cate=${key}`}
                                    className={(query?.cate === key) ? 'active' : ''}
                                >
                                    {config[key]}
                                </ItemLayout>

                            ))
                        }
                    </aside>
                </Grid>

                <Grid item xs={12} md>
                    <SelectOptLayout
                        name="selected"
                        value={query?.tag || ''}
                        onChange={handleChangeOpt}
                    >
                        <option value="">全部</option>
                        {
                            pageData.data.tags.map(({ id, name }) => (

                                <option key={id} value={id}>{name}</option>

                            ))
                        }
                    </SelectOptLayout>

                    <ItemsWrapLayout>
                        {
                            pageData.data.list.map((data) => (

                                <NewsItem
                                    key={data.id}
                                    data={data}
                                />

                            ))
                        }
                    </ItemsWrapLayout>

                    <Paginations
                        length={pageData.data.list.length}
                        currPage={+query?.page}
                        perPage={15}
                        onChange={handleChangePage}
                    />
                </Grid>
            </MenusLayout>
        </Fragment>

    );

};

export default News;

export async function getStaticProps () {

    const res = await fetch('http://localhost:1001/json/news.json');
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
