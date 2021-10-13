import { Fragment, useContext } from 'react';
import { Grid } from '@mui/material';
import { faBroadcastTower, faCoffee, faWind } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';

import HeadTag from '../src/containers/HeadTag';
import { Links, ButtonLink } from '../src/components/Links';
import FontIcon from '../src/components/FontIcon';
import SlideShow from '../src/components/SlideShow';
import SectionTitle from '../src/components/SectionTitle';
import Item from '../src/components/Item';
import {
    homeStyles,
    ShowMoreButtonLayout,
    ItemLayout,
    ItemPartnerLayout,
    NewsWrapLayout,
    NewsItemWrapLayout,
} from '../src/components/home/homeLayout';

import { GlobalContext } from '../src/context/global.state';
import util from '../src/utils/util';

// 整理合作夥伴結構
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
const NewsWrap = ({ title, text, data }) => (

    <Grid item xs={12} md={6}>
        <div className="title-box">
            <h1 className="title">{title}</h1>
            <div>{text}</div>
        </div>
        <div>
            {
                data.map((obj) => <NewsItemWrap key={obj.id} data={obj} />)
            }
        </div>
        <ShowMoreButton />
    </Grid>

);

//
const NewsItemWrap = ({ data: { title, isHot, createTime } }) => (

    <NewsItemWrapLayout title={title}>
        <h1 className="title">{title}</h1>
        <div>
            {isHot && <span className="isHot">TOP</span>}
            {dayjs(createTime).format('YYYY.MM.DD (dd)')}
        </div>
    </NewsItemWrapLayout>

);

// 顯示更多按鈕
const ShowMoreButton = ({ url }) => (

    <ShowMoreButtonLayout>
        <ButtonLink ulr={url} />
    </ShowMoreButtonLayout>

);

const Home = ({ pageData }) => {

    // console.log('pageData:', pageData);

    // Context
    const { slideshowActive } = useContext(GlobalContext);

    return (

        <Fragment>
            {homeStyles}
            <HeadTag title={pageData.title} />

            <section>
                <SlideShow data={pageData.data.banners}>
                    {
                        pageData.data.banners.map(({ id, title, imgUrl, imgUrlSmall, link }, idx) => (

                            <div
                                key={id}
                                className={(idx === slideshowActive) ? 'active' : 'hide'}
                            >
                                {title}
                                <Links
                                    url={link}
                                    target="_blank"
                                    title={title}
                                >
                                    <img src={imgUrl} alt={title} />
                                </Links>
                            </div>

                        ))
                    }
                </SlideShow>
            </section>

            <section>
                <SectionTitle
                    primaryText="5G示範場域"
                    secondaryText="Locations"
                />

                <ItemLayout>
                    {
                        pageData.data.demoPlaces.map(({ id, title, imgUrl }) => (

                            <div key={id} className="itemWrap">
                                <Item
                                    title={title}
                                    imgUrl={imgUrl}
                                    url={`/demo_place/${id}`}
                                />
                            </div>

                        ))
                    }
                </ItemLayout>

                <ShowMoreButton />
            </section>

            <section>
                <NewsWrapLayout
                    container
                    component="div"
                >
                    <NewsWrap
                        title="新聞快訊"
                        text="News"
                        data={pageData.data.news.news}
                    />
                    <NewsWrap
                        title="產業訊息"
                        text="Information"
                        data={pageData.data.news.newsIndustries}
                    />
                </NewsWrapLayout>
            </section>

            <section>
                <SectionTitle
                    primaryText="文化科技聯盟"
                    secondaryText="Alliances"
                />

                <ItemPartnerLayout>
                    {
                        pageData.data.partners.map(({ id, name }, idx) => (

                            <div key={id} className="itemWrap">
                                <Links url={`/partner/${id}`}>
                                    <FontIcon icon={arrangePartnerTag(pageData.data.partners)[idx].icon} />
                                    <h1>{name}</h1>
                                    <span className="web-x-align nothing"></span>
                                </Links>
                            </div>

                        ))
                    }
                </ItemPartnerLayout>
            </section>
        </Fragment>

    );

};

export default Home;

export async function getStaticProps () {

    const res = await fetch('http://localhost:1001/json/home.json');
    const data = await res.json();

    if (!data.result) {

        return {
            notFound: true,
        };

    }

    return {
        props: {
            pageData: {
                title: '首頁',
                data: data.data,
            },
        },
    };

};
