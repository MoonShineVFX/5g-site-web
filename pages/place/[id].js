import { Fragment, useContext, useEffect, useState } from 'react';
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

    <Links url={url} title="位置地圖">
        <FontIcon icon={faMapMarkerAlt} aria-label="icon" />
    </Links>

);

//
const PlaceDetail = ({ pageData }) => {

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

    // State
    const [url, setUrl] = useState('');

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
        globalDispatch({ type: 'search_box', payload: { visible: false, value: '' } });
        setUrl(window.location.href);

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
                                        alt={`${title}-第${idx+1}張圖`}
                                        title={`${title}-第${idx+1}張圖`}
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
                        <div className="title">
                            {title}
                            <Location title={title} url={locationUrl} />
                        </div>

                        <p className="description">{description}</p>

                        <div className="contact">
                            <div className="title">聯絡資訊</div>
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
                            shareUrl={url}
                        />
                    </Grid>
                </Grid>
            </SectionLayout>

            <SectionLayout className="section-relative">
                {
                    websiteName &&
                        <div>
                            <div className="title">相關連結</div>
                            <div className="item">
                                <span>
                                    <Links url={websiteUrl} title={websiteName}>{websiteName}</Links>
                                </span>
                            </div>
                        </div>
                }

                {
                    !!files.length &&
                        <div>
                            <div className="title">相關文件</div>
                            <div className="item">
                                <ul className="items-document">
                                    {
                                        files.map(({ name, url }, idx) => (

                                            <li key={idx}>
                                                <Links
                                                    url={url}
                                                    title={name}
                                                >
                                                    <span className="filename">{name}</span>
                                                    <FontIcon icon={faFileAlt} />
                                                </Links>
                                            </li>

                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                }
            </SectionLayout>

            <SectionLayout className='section-traffic'>
                <div className="title">交通資訊</div>
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
