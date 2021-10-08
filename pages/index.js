import { Fragment, useContext } from 'react';
import { GlobalStyles } from '@mui/material';
import { styled } from '@mui/system';
import { faWifi, faCoffee, faWind } from '@fortawesome/free-solid-svg-icons';

import HeadTag from '../src/containers/HeadTag';
import { Links, ButtonLink } from '../src/components/Links';
import FontIcon from '../src/components/FontIcon';
import SlideShow from '../src/components/SlideShow';
import SectionTitle from '../src/components/SectionTitle';
import Item from '../src/components/Item';

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
            acc[idx].icon = faWifi;
            break;
    }

    return acc;

}, {});

const styles = {
    'main > div > section': {
        marginBottom: '80px',
        padding: '0 10px',
        '.section-title': {
            marginBottom: '80px',
        },
    },
};

const ShowMoreButtonLayout = styled('div')(({ theme }) => ({
    textAlign: 'center',
    marginTop: '60px',
}));

const ItemLayout = styled('div')(() => ({
    display: 'flex',
    marginLeft: '-10px',
    marginRight: '-10px',
    '.itemWrap': {
        flex: '1',
        padding: '0 10px',
    },
    '.item': {
        display: 'block',
    },
}));

const ItemPartnerLayout = styled(ItemLayout)(({ theme }) => ({
    maxWidth: '80%',
    fontSize: '2em',
    textAlign: 'center',
    margin: 'auto',
    '*': {
        color: theme.palette.primary.main,
    },
    'svg': {
        fontSize: '2.2em',
    },
    'a': {
        width: '240px',
        border: '1px solid',
        borderBottom: '0',
        borderRadius: '70% 70% 0 0',
        padding: '40px 20px 20px',
        position: 'relative',
    },
    'h1': {
        letterSpacing: '2px',
        margin: '4px 0 0',
    },
    '.nothing': {
        width: 'calc(100% - 60px)',
        borderTop: '2px solid',
        position: 'absolute',
        bottom: '-17px',
        overflow: 'hidden',
        '&:after': {
            content: '""',
            width: '35px',
            height: '35px',
            display: 'block',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '50%',
            margin: '-20px auto 0',
        },
    },
}));

// 顯示更多按鈕
const ShowMoreButton = ({ url }) => (

    <ShowMoreButtonLayout>
        <ButtonLink ulr={url} />
    </ShowMoreButtonLayout>

);

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

            <section>
                <SlideShow data={pageData.data.banners}>
                    {
                        pageData.data.banners.map(({ id, title, imgUrl, link }, idx) => (

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
                                    <span className="Model-x-align nothing"></span>
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
            redirect: {
                destination: '/',
                permanent: true,
            },
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
