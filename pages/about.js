import { Fragment, useContext, useEffect } from 'react';
import { styled } from '@mui/system';
import HeadTag from '../src/containers/HeadTag';
import SectionTitle from '../src/components/SectionTitle';
import { GlobalContext } from '../src/context/global.state';
import useQuery from '../src/utils/useQuery';
import util from '../src/utils/util';

//
const DetailWrapLayout = styled('section')(({ theme }) => ({
    '.detail-wrap': {
        marginBottom: '60px',
    },
    [theme.breakpoints.up('md')]: {
        '.section-title': {
            maxWidth: '720px',
            margin: 'auto',
        },
        '.detail-wrap': {
            marginTop: '60px',
        },
    },
    [theme.breakpoints.down('md')]: {
        '.section-title': {
            marginBottom: '0',
        },
    },
}));

//
const About = ({ pageData }) => {

    // Router
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
                level2: pageData.currPageTitle,
                level1Link: '',
            },
        });

    }, []);

    return (

        <Fragment>
            <HeadTag title={`${pageData.title}-${pageData.currPageTitle}`} />

            <DetailWrapLayout>
                <SectionTitle
                    primaryText={pageData.currPageTitle}
                    showMobile={true}
                />
                <div className="detail-wrap" dangerouslySetInnerHTML={{ __html: pageData.data.detail }} />
            </DetailWrapLayout>
        </Fragment>

    );

};

export default About;

export async function getServerSideProps ({ params }) {

    // const res = await util.serviceServer({
    //     method: 'get',
    //     url: `/web_partners/${params.id}`,
    // });

    // const { data } = res;

    const res = await fetch('http://localhost:1001/json/about.json');
    const data = await res.json();

    if (!data.result) {

        return {
            notFound: true,
        };

    }

    return {
        props: {
            pageData: {
                title: '關於我們',
                currPageTitle: '關於本站',
                data: data.data,
            },
        },
    };

};
