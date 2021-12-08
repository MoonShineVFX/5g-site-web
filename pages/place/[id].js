import { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@mui/material';
import { faMapMarkerAlt, faFileAlt, faReply } from '@fortawesome/free-solid-svg-icons';

import HeadTag from '../../src/containers/HeadTag';
import { Links } from '../../src/components/Links';
import FontIcon from '../../src/components/FontIcon';
import SlideShow from '../../src/components/SlideShow';
import Community from '../../src/components/Community';
import { SlideShowLayout, SectionLayout } from '../../src/components/place/placeLayout';

import { GlobalContext } from '../../src/context/global.state';
import util from '../../src/utils/util';
import utilConst from '../../src/utils/util.const';

const { placeConfig } = utilConst;

//
const BackButton = ({ type, className }) => (

    <Links url={`/place?type=${type}`} className={`back-button ${className}`} title="回列表">
        <span>
            <FontIcon icon={faReply} />
            <div>回列表</div>
        </span>
    </Links>

);

// 外連 google map
const Location = ({ title, url }) => (

    <Links url={url} newPage={true} title={`${title} 地圖 位置`}>
        <FontIcon icon={faMapMarkerAlt} />
    </Links>

);

//
const PlaceDetail = ({ pageData }) => {

    // Router
    const router = useRouter();

    const {
        type,
        images,
        title,
        locationUrl,
        description,
        contact,
        websiteName,
        websiteUrl,
        files,
        videoIframe,
        byDrive,
        byMRT,
    } = pageData.data;

    // Context
    const {
        menu,
        slideshowActive,
        globalDispatch,
    } = useContext(GlobalContext);

    useEffect(() => {

        globalDispatch({
            type: 'menu',
            payload: {
                ...menu,
                level1: pageData.title,
                level2: placeConfig[type],
                level1Link: `/place?type=${type}`,
            },
        });

        globalDispatch({ type: 'sidenav', payload: false });
        globalDispatch({ type: 'search_box', payload: false });

    }, []);

    return (

        <Fragment>
            <HeadTag title={title} />

            <SlideShowLayout>
                <div className="wrap">
                    <SlideShow data={images}>
                        {
                            images.map(({ id, imgUrl }, idx) => (

                                <div
                                    key={id}
                                    className={`item ${(idx === slideshowActive) ? 'active' : 'hide'}`}
                                >
                                    <img
                                        src={imgUrl}
                                        alt={id}
                                        title={id}
                                        width="778"
                                        height="438"
                                    />
                                </div>

                            ))
                        }

                        <BackButton type={type} className="mobile" />
                    </SlideShow>

                    <BackButton type={type} className="desktop" />
                </div>
            </SlideShowLayout>

            <SectionLayout className="section-information">
                <Grid container>
                    <Grid item xs={12} md={6} className="grid-info">
                        <h1 className="title">
                            {title}
                            <Location title={title} url={locationUrl} />
                        </h1>

                        <p className="description">{description}</p>

                        <div className="contact">
                            <h2>聯絡資訊</h2>
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
                    </Grid>

                    <Grid item xs={12} md={6} className="grid-socials">
                        <Community
                            title={title}
                            shareUrl={router.asPath}
                        />
                    </Grid>
                </Grid>
            </SectionLayout>

            <SectionLayout className="section-relative">
                <div>
                    <h2 className="title">相關連結</h2>
                    <div className="item">
                        <span>
                            {websiteName}
                            <Links url={websiteUrl} newPage={true} title={websiteName}>{websiteUrl}</Links>
                        </span>
                    </div>
                </div>

                {
                    !!files.length &&
                        <ul className="items-document">
                            {
                                files.map(({ name, url }, idx) => (

                                    <li key={idx}>
                                        <Links url={url} newPage={true}>
                                            <span className="filename">{name}</span>
                                            <FontIcon icon={faFileAlt} />
                                        </Links>
                                    </li>

                                ))
                            }
                        </ul>
                }
            </SectionLayout>

            <SectionLayout className='section-traffic'>
                <h2 className="title">交通資訊</h2>
                <div className="items-traffic">
                    <div className="label">大眾運輸</div>
                    <p>{byMRT}</p>
                </div>
                <div className="items-traffic">
                    <div className="label">自行開車</div>
                    <p>{byDrive}</p>
                </div>
            </SectionLayout>

            {
                videoIframe &&
                    <SectionLayout className="section-video">
                        <div
                            className="video-wrap"
                            dangerouslySetInnerHTML={{ __html: videoIframe }}
                        />
                    </SectionLayout>
            }
        </Fragment>

    );

};

export default PlaceDetail;

export async function getServerSideProps ({ params }) {

    const res = await util.serviceServer({
        method: 'get',
        url: `/web_demo_places/${params.id}`,
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
                title: '場域空間',
                data: data.data,
            },
        },
    };

}
