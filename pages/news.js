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
import utilConst from '../src/utils/util.const';

const { newsConfig } = utilConst;

//
const NewsItem = ({
    data: { id, title, description, createTime, tags },
    tagList,
}) => (

    <Links
        url={`/news/${id}`}
        title={title}
        className="item"
        newPage
    >
        <span className="date">{dayjs(createTime).format('YYYY/MM/DD')}</span>
        <h1 className="title">{title}</h1>
        <TagsLayout>
            {tags.map((id) => <span key={id}>{util.mappingTags(tagList)[id]}</span>)}
        </TagsLayout>
        <p>{description}</p>
    </Links>

);

//
const News = ({ pageData }) => {

    // Router
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
                level2: newsConfig[query.cate] || pageData.currPageTitle,
                level1Link: '',
            },
        });

        globalDispatch({ type: 'sidenav', payload: false });
        globalDispatch({ type: 'search_box', payload: false });

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

    // Menu
    const handleClickMenu = (key) => {

        globalDispatch({
            type: 'menu',
            payload: {
                ...menu,
                level2: newsConfig[key],
            },
        });

    };

    return (

        <Fragment>
            <HeadTag title={`${pageData.title}-${newsConfig[query?.cate] || pageData.currPageTitle}`} />

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
                            Object.keys(newsConfig).map((key) => (

                                <ItemLayout
                                    key={key}
                                    title={newsConfig[key]}
                                    url={`/news?page=1&cate=${key}`}
                                    className={(query?.cate === key) ? 'active' : ''}
                                    onClick={() => handleClickMenu(key)}
                                >
                                    {newsConfig[key]}
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
                                    tagList={pageData.data.tags}
                                />

                            ))
                        }
                    </ItemsWrapLayout>

                    {
                        !!(pageData.data.count && (pageData.data.count > 15)) &&
                            <Paginations
                                length={pageData.data.count}
                                currPage={+query?.page}
                                perPage={15}
                                onChange={handleChangePage}
                            />
                    }
                </Grid>
            </MenusLayout>
        </Fragment>

    );

};

export default News;

export async function getServerSideProps ({ query }) {

    const res = await util.serviceServer({
        method: 'get',
        url: `/web_news?page=${query.page}&cate=${query.cate}${query.tag ? `&tag=${query.tag}` : ''}`,
    });

    const { data } = res;

    if (!data.result) {

        return {
            notFound: true,
        };

    }

    return {
        props: {
            pageData: {
                title: '最新消息',
                currPageTitle: '新聞快訊',
                data: data.data,
            },
        },
    };

};
