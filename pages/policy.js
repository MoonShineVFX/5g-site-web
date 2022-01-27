import { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@mui/material';

import HeadTag from '../src/containers/HeadTag';
import Paginations from '../src/components/Paginations';
import EmptyDataMesg from '../src/components/EmptyDataMesg';
import {
    MenusLayout,
    ItemLayout,
    SelectOptLayout,
    ItemsWrapLayout,
    TagsLayout,
} from '../src/components/news/newsLayout';
import { PolicyItemLayout } from '../src/components/policy/policyLayout';

import { GlobalContext } from '../src/context/global.state';
import useQuery from '../src/utils/useQuery';
import util from '../src/utils/util';
import utilConst from '../src/utils/util.const';

const { policyConfig } = utilConst;

//
const PolicyItem = ({
    data: { id, title, titleSecondary, description, tags },
    tagList,
}) => (

    <PolicyItemLayout
        url={`/policy/${id}`}
        title={title}
        className="item"
    >
        <span className="second-title">{titleSecondary}</span>
        <div className="title">{title}</div>
        <TagsLayout>
            {tags.map((id) => <span key={id}>{util.mappingTags(tagList)[id]}</span>)}
        </TagsLayout>
        <p>{description}</p>
    </PolicyItemLayout>

);

//
const Policy = ({ pageData }) => {

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
                level2: policyConfig[query.cate] || pageData.currPageTitle,
                level1Link: '',
            },
        });

        globalDispatch({ type: 'sidenav', payload: false });
        globalDispatch({ type: 'search_box', payload: { visible: false, value: '' } });
        globalDispatch({ type: 'current_menu', payload: '' });

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
                level2: policyConfig[key],
            },
        });

    };

    return (

        <Fragment>
            <HeadTag title={`${pageData.title}-${policyConfig[query?.cate] || pageData.currPageTitle}`} />

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
                            Object.keys(policyConfig).map((key) => (

                                <ItemLayout
                                    key={key}
                                    title={policyConfig[key]}
                                    url={`/policy?page=1&cate=${key}`}
                                    className={(query?.cate === key) ? 'active' : ''}
                                    onClick={() => handleClickMenu(key)}
                                >
                                    {policyConfig[key]}
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
                        aria-label="選擇類別"
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
                            pageData.data.list.length ? (

                                pageData.data.list.map((data) => (

                                    <PolicyItem
                                        key={data.id}
                                        data={data}
                                        tagList={pageData.data.tags}
                                    />

                                ))

                            ) : <EmptyDataMesg />
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

export default Policy;

export async function getServerSideProps ({ query }) {

    const res = await util.serviceServer({
        method: 'get',
        url: `/web_policies?page=${query.page}&cate=${query.cate}${query.tag ? `&tag=${query.tag}` : ''}`,
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
                title: '政策資源',
                currPageTitle: '中央資源',
                data: data.data,
            },
        },
    };

};
