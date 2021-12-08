import { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@mui/material';

import HeadTag from '../../src/containers/HeadTag';
import { Links } from '../../src/components/Links';
import { ItemLayout, TagsLayout } from '../../src/components/news/newsLayout';
import {
    DetailHeaderWrapLayout,
    DetailMenusLayout,
    MainContentLayout,
} from '../../src/components/policy/policyLayout';

import { GlobalContext } from '../../src/context/global.state';
import useQuery from '../../src/utils/useQuery';
import util from '../../src/utils/util';
import utilConst from '../../src/utils/util.const';

const { policyConfig } = utilConst;

//
const PolicyDetail = ({ pageData }) => {

    // Router
    const router = useRouter();
    const query = useQuery();

    const {
        title,
        description,
        categoryKey,
        categoryName,
        tags,
        updateTime,
        applicationWay,
        applicationObject,
        amountQuota,
        contact,
        link,
    } = pageData.data;

    // Context
    const { menu, globalDispatch } = useContext(GlobalContext);

    useEffect(() => {

        globalDispatch({
            type: 'menu',
            payload: {
                ...menu,
                level1: pageData.title,
                level2: categoryName,
                level1Link: `/policy?page=1&cate=${categoryKey}`,
            },
        });

        globalDispatch({ type: 'sidenav', payload: false });
        globalDispatch({ type: 'search_box', payload: false });

    }, []);

    return (

        <Fragment>
            <HeadTag title={`${categoryName}-${title}`} />

            <DetailHeaderWrapLayout>
                <TagsLayout className="detail-tags web-clear-box">
                    {tags.map(({ id, name }) => <span key={id}>{name}</span>)}
                </TagsLayout>

                <DetailMenusLayout container>
                    <Grid
                        item
                        xs={12}
                        md
                        className="info-wrap"
                    >
                        {updateTime && <span className="update-time">最後更新日期 {util.dateFormat(updateTime)}</span>}
                        <h1 className="title">{title}</h1>
                        <p>{description}</p>
                    </Grid>

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
                                        className={`item ${(categoryKey === key) ? 'active' : ''}`}
                                        onClick={() => router.push(`/policy?page=1&cate=${query.cate}`)}
                                    >
                                        {policyConfig[key]}
                                    </ItemLayout>

                                ))
                            }
                        </aside>
                    </Grid>
                </DetailMenusLayout>
            </DetailHeaderWrapLayout>

            <MainContentLayout className="section-information">
                <div className="item">
                    <h3 className="title">申請方式</h3>
                    <p>{applicationWay}</p>
                </div>

                <div className="item">
                    <h3 className="title">申請對象</h3>
                    <p>{applicationObject}</p>
                </div>

                <div className="item">
                    <h3 className="title">資金額度</h3>
                    <p>{amountQuota}</p>
                </div>

                <div className="item">
                    <h3 className="title">諮詢窗口</h3>
                    <div className="contact">
                        <p className="label">{contact.unit}</p>
                        <p>{contact.name}</p>
                        {
                            contact.phone &&
                                <Fragment>
                                    <p className="label">聯絡電話</p>
                                    <p>{contact.phone}</p>
                                </Fragment>
                        }
                        {
                            contact.fax &&
                                <Fragment>
                                    <p className="label">傳真</p>
                                    <p>{contact.fax}</p>
                                </Fragment>
                        }
                        {
                            contact.email &&
                                <Fragment>
                                    <p className="label">E-mail</p>
                                    <p>{contact.email}</p>
                                </Fragment>
                        }
                    </div>
                </div>

                <div className="item">
                    <h3 className="title">網站連結</h3>
                    <p>
                        <Links
                            url={link}
                            title={link}
                            className="link"
                        >
                            {link}
                        </Links>
                    </p>
                </div>
            </MainContentLayout>
        </Fragment>

    );

};

export default PolicyDetail;

export async function getServerSideProps ({ params }) {

    const res = await util.serviceServer({
        method: 'get',
        url: `/web_policies/${params.id}`,
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
                data: data.data,
            },
        },
    };

}
