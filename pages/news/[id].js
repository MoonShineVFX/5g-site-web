import { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@mui/material';
import dayjs from 'dayjs';

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

// 其他新聞 next/prev
const Item = ({
    data: { id, title, createTime },
}) => (

    <Grid item xs={12} md={6}>
        <NewsItemWrapLayout
            url={`/news/${id}`}
            className="item"
        >
            <h2 className="title">{title}</h2>
            <div className="date">
                <span>{util.dateFormat(createTime)}</span>
            </div>
        </NewsItemWrapLayout>
    </Grid>

);

//
const NewsDetail = ({ pageData }) => {

    // Router
    const router = useRouter();

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

    }, []);

    return (

        <Fragment>
            <HeadTag title={`${categoryName}-${title}`} />

            <DetailHeaderLayout>
                <TagsLayout className="detail-tags web-clear-box">
                    {tags.map(({ id, name }) => <span key={id}>{name}</span>)}
                </TagsLayout>
                <h1 className="title">{title}</h1>

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
                            shareUrl={router.asPath}
                        />
                    </Grid>
                </Grid>
            </DetailHeaderLayout>

            <MainContentLayout>
                <div dangerouslySetInnerHTML={{ __html: detail }} />
            </MainContentLayout>

            <OtherNewsWrapLayout>
                <SectionTitle
                    primaryText="其他快訊"
                    secondaryText="More News"
                    showMobile={true}
                />

                <Grid container spacing={5}>
                    {otherNews.map((data) => <Item key={data.id} data={data} />)}
                </Grid>
            </OtherNewsWrapLayout>

            <ShowMoreButtonLayout url={`/news?page=1&cate=${categoryKey}`} />
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
