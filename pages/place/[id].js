import { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@mui/material';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLink, faMapMarkerAlt, faFileAlt, faReply } from '@fortawesome/free-solid-svg-icons';

import HeadTag from '../../src/containers/HeadTag';
import { Links } from '../../src/components/Links';
import FontIcon from '../../src/components/FontIcon';
import SlideShow from '../../src/components/SlideShow';
import Community from '../../src/components/Community';

import {
    SlideShowLayout,
    SectionLayout,
} from '../../src/components/place/placeLayout';

import { GlobalContext } from '../../src/context/global.state';
import util from '../../src/utils/util';
import utilConst from '../../src/utils/util.const';

const { placeConfig } = utilConst;

//
const BackButton = ({ type, className }) => (

    <Links url={`/place?type=${type}`} className={`back-button ${className}`}>
        <span>
            <FontIcon icon={faReply} />
            <div>回列表</div>
        </span>
    </Links>

);

//
const PlaceDetail = ({ pageData }) => {

    // Router
    const router = useRouter();

    // console.log('pageData:', pageData);
    const {
        type,
        images,
        title,
        locationUrl,
        description,
        contact,
        links,
        files,
        byMRT,
        byBus,
        byDrive,
        videoUrl,
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
                level1Link: `/place?cate=${type}`,
            },
        });

    }, []);

    return (

        <Fragment>
            <HeadTag title={title} />

            <SlideShowLayout>
                <div className="wrap">
                    <SlideShow data={images} showArrow={true}>
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
                            <Links url={locationUrl} newPage={true} title={title}>
                                <FontIcon icon={faMapMarkerAlt} />
                            </Links>
                        </h1>

                        <p className="description">{description}</p>

                        <div className="contact">
                            <h2>聯絡資訊</h2>
                            <p className="label">{contact.unit}</p>
                            <p>{contact.name}</p>
                            <p className="label">聯絡電話</p>
                            <p>{contact.phone}</p>
                            <p className="label">傳真</p>
                            <p>{contact.fax}</p>
                            <p className="label">E-mail</p>
                            <p>{contact.email}</p>
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
                    <div>
                        {
                            links.map(({ name, url }, idx) => (

                                <div key={idx} className="item">
                                    <span>
                                        {name}
                                        <Links url={url} newPage={true}>{url}</Links>
                                    </span>
                                </div>

                            ))
                        }
                    </div>
                </div>

                <div>
                    <h2 className="title">相關文件</h2>
                    <ul className="items-document">
                        {
                            files.map(({ name, url }, idx) => (

                                <li key={idx}>
                                    {name}
                                    {/* Betty: 要再確認是實體路徑還是要另外打 ajax 要整個檔案內容 */}
                                    <Links url={url} newPage={true}>
                                        <FontIcon icon={faFileAlt} />
                                    </Links>
                                </li>

                            ))
                        }
                    </ul>
                </div>
            </SectionLayout>

            <SectionLayout className='section-traffic'>
                <h2 className="title">交通資訊</h2>
                <div className="items-traffic">
                    <div>
                        <h4 className="title">捷運</h4>
                        <p>{byMRT}</p>
                    </div>

                    <div>
                        <h4 className="title">公車</h4>
                        <p>{byBus}</p>
                    </div>

                    <div>
                        <h4 className="title">開車</h4>
                        <p>{byDrive}</p>
                    </div>
                </div>
            </SectionLayout>

            {
                // videoUrl &&
                //     <SectionLayout className="section-video">
                //         <iframe src={videoUrl} title={title} />
                //         {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/sqgxcCjD04s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                //     </SectionLayout>
            }
        </Fragment>

    );

};

export default PlaceDetail;

export async function getServerSideProps ({ params }) {

    // const res = await admin.serviceServer({
    //     method: 'get',
    //     url: `/web_demo_places/${params.id}`,
    // });

    // const { data } = res;

    const res = await fetch('http://localhost:1001/json/place/8313.json');
    const data = await res.json();

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
