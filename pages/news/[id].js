import { Fragment, useContext, useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import HeadTag from '../../src/containers/HeadTag';
import SectionTitle from '../../src/components/SectionTitle';
import Community from '../../src/components/Community';

import { NewsItemWrapLayout } from '../../src/components/home/homeLayout';
import {
    TagsLayout,
    DetailHeaderLayout,
    MainContentLayout,
    OtherNewsWrapLayout,
    ShowMoreButtonLayout,
} from '../../src/components/news/newsLayout';

import { GlobalContext } from '../../src/context/global.state';
import util from '../../src/utils/util';
import utilConst from '../../src/utils/util.const';

const { newsConfig } = utilConst;

// 其他新聞 next/prev
const Item = ({
    data: { id, title, createTime },
}) => (

    <Grid item xs={12} md={6}>
        <NewsItemWrapLayout
            url={`/news/${id}`}
            title={title}
            className="item"
        >
            <div className="title">{title}</div>
            <div className="content date">
                <span>{util.dateFormat(createTime)}</span>
            </div>
        </NewsItemWrapLayout>
    </Grid>

);

//
const NewsDetail = ({ pageData }) => {

    const {
        title,
        detail,
        categoryKey,
        categoryName,
        tags,
        createTime,
        updateTime,
        otherNews,
    } = pageData.data;

    // Context
    const { menu, globalDispatch } = useContext(GlobalContext);

    // State
    const [url, setUrl] = useState('');

    useEffect(() => {

        globalDispatch({
            type: 'menu',
            payload: {
                ...menu,
                level1: pageData.title,
                level2: categoryName,
                level1Link: `/news?page=1&cate=${categoryKey}`,
            },
        });

        globalDispatch({ type: 'sidenav', payload: false });
        globalDispatch({ type: 'search_box', payload: { visible: false, value: '' } });
        setUrl(window.location.href);

    }, []);

    return (

        <Fragment>
            <HeadTag title={`${categoryName}-${title}`} />

            <DetailHeaderLayout>
                <TagsLayout className="detail-tags web-clear-box">
                    {tags.map(({ id, name }) => <span key={id}>{name}</span>)}
                </TagsLayout>
                <div className="title">{title}</div>

                <Grid container>
                    <Grid item xs={12} md={6}>
                        {util.dateFormat(createTime)}
                        {updateTime && <span className="update-time">，更新於 {util.dateFormat(updateTime)}</span>}
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}
                        className="info-socials"
                    >
                        <Community
                            title={title}
                            shareUrl={url}
                        />
                    </Grid>
                </Grid>
            </DetailHeaderLayout>

            <MainContentLayout>
                <div dangerouslySetInnerHTML={{ __html: detail }} />
            </MainContentLayout>

            <OtherNewsWrapLayout>
                <SectionTitle
                    primaryText={(categoryKey === 'news') ? '其他快訊' : '其他訊息'}
                    secondaryText="More News"
                    showMobile={true}
                />

                <Grid container spacing={5}>
                    {otherNews.map((data) => <Item key={data.id} data={data} />)}
                </Grid>
            </OtherNewsWrapLayout>

            <ShowMoreButtonLayout url={`/news?page=1&cate=${categoryKey}`} title={`${newsConfig[categoryKey]}列表頁`} />
        </Fragment>

    );

};

export default NewsDetail;

export async function getServerSideProps ({ params }) {

    const res = await util.serviceServer({
        method: 'get',
        url: `/web_news/${params.id}`,
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
                data: data.data,
            },
        },
    };

}
