import { Fragment, useContext, useEffect } from 'react';
import { Grid } from '@mui/material';
import { faBroadcastTower, faCoffee, faWind } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';

import HeadTag from '../src/containers/HeadTag';
import { Links } from '../src/components/Links';
import FontIcon from '../src/components/FontIcon';
import SectionTitle from '../src/components/SectionTitle';
import Item from '../src/components/Item';
import ShowMoreButton from '../src/components/ShowMoreButton';
import {
    homeStyles,
    SlideShowLayout,
    ItemLayout,
    ItemPartnerLayout,
    NewsWrapLayout,
    NewsItemWrapLayout,
} from '../src/components/home/homeLayout';

import { GlobalContext } from '../src/context/global.state';
import util from '../src/utils/util';

// 整理策略夥伴結構
const arrangePartnerTag = (data) => data.reduce((acc, { id, name }, idx) => {

    acc[idx] = acc[idx] || {};
    acc[idx].name = name;

    switch (idx) {
        case 1:
            acc[idx].icon = faCoffee;
            break;

        case 2:
            acc[idx].icon = faWind;
            break;

        default:
            acc[idx].icon = faBroadcastTower;
            break;
    }

    return acc;

}, {});

//
const NewsWrap = ({ title, text, cate, data }) => (

    <Grid item xs={12} md={6}>
        <div className="title-box">
            <div className="title">{title}</div>
            <div>{text}</div>
        </div>
        <div>
            {data.map((obj) => <NewsItemWrap key={obj.id} data={obj} />)}
        </div>
        <ShowMoreButton url={`/news?page=1&cate=${cate}`} title={`更多消息-${title}`} />
    </Grid>

);

//
const NewsItemWrap = ({ data: { id, title, isHot, createTime } }) => (

    <NewsItemWrapLayout
        url={`/news/${id}`}
        title={title}
    >
        <div className="title web-line-clamp">{title}</div>
        <div className="content">
            {isHot && <span className="isHot">TOP</span>}
            {dayjs(createTime).format('YYYY.MM.DD (dd)')}
        </div>
    </NewsItemWrapLayout>

);

const Home = ({ pageData }) => {

    // Context
    const { slideshowActive, globalDispatch } = useContext(GlobalContext);

    useEffect(() => {

        globalDispatch({ type: 'sidenav', payload: false });
        globalDispatch({ type: 'search_box', payload: { visible: false, value: '' } });
        globalDispatch({ type: 'current_menu', payload: '' });

    }, []);

    return (

        <Fragment>
            {homeStyles}
            <HeadTag />

            <section>
                <SlideShowLayout data={pageData.data.banners} interval={pageData.data.loopTime * 1000}>
                    {
                        pageData.data.banners.map(({ id, title, imgUrl, link }, idx) => (

                            <div
                                key={id}
                                className={(idx === slideshowActive) ? 'active' : 'hide'}
                            >
                                <Links
                                    url={link}
                                    title={title}
                                    className="item"
                                >
                                    <img
                                        src={imgUrl}
                                        alt={title}
                                        title={title}
                                        width="1140"
                                        height="428"
                                    />
                                </Links>
                            </div>

                        ))
                    }
                </SlideShowLayout>
            </section>

            <section>
                <SectionTitle
                    primaryText="5G示範場域"
                    secondaryText="Locations"
                />

                <ItemLayout container spacing={5}>
                    {
                        pageData.data.demoPlaces.map(({ id, title, imgUrl }) => (

                            <Grid
                                key={id}
                                item
                                xs={12}
                                md={4}
                                className="itemWrap"
                            >
                                <Item
                                    title={title}
                                    imgUrl={imgUrl}
                                    url={`/place/${id}`}
                                    width="368"
                                    height="191"
                                />
                            </Grid>

                        ))
                    }
                </ItemLayout>

                <ShowMoreButton url={`/place?type=5g`} title="更多消息-5G示範場域" />
            </section>

            <section>
                <NewsWrapLayout
                    container
                    component="div"
                >
                    <NewsWrap
                        title="新聞快訊"
                        text="News"
                        cate="news"
                        data={pageData.data.news.news}
                    />
                    <NewsWrap
                        title="產業訊息"
                        text="Information"
                        cate="newsIndustry"
                        data={pageData.data.news.newsIndustries}
                    />
                </NewsWrapLayout>
            </section>

            <section>
                <SectionTitle
                    primaryText="策略夥伴"
                    secondaryText="Alliances"
                />

                <ItemPartnerLayout container>
                    {
                        pageData.data.partnerTags.map(({ id, name }, idx) => (

                            <Grid
                                key={id}
                                item
                                xs={12}
                                md={4}
                                className="itemWrap"
                            >
                                <Links
                                    title={name}
                                    url={`/partner?page=1&tag=${id}`}
                                >
                                    <FontIcon icon={arrangePartnerTag(pageData.data.partnerTags)[idx].icon} />
                                    <div className="title">{name}</div>
                                    <span className="web-x-align nothing"></span>
                                </Links>
                            </Grid>

                        ))
                    }
                </ItemPartnerLayout>
            </section>
        </Fragment>

    );

};

export default Home;

export async function getServerSideProps () {

    const res = await util.serviceServer({ method: 'get', url: '/web_index' });
    const { data } = res;

    if (!data.result) {

        return {
            notFound: true,
        };

    }

    return {
        props: {
            pageData: {
                title: '首頁',
                data: data.data
            },
        },
    };

};
