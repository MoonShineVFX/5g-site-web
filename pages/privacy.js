import { Fragment, useContext, useEffect } from 'react';
import { GlobalStyles } from '@mui/material';
import { styled } from '@mui/system';

import theme from '../src/utils/theme';
import HeadTag from '../src/containers/HeadTag';
import SectionTitle from '../src/components/SectionTitle';
import { GlobalContext } from '../src/context/global.state';
import useQuery from '../src/utils/useQuery';
import util from '../src/utils/util';

const styles = {
    '.breadcrumb .level1': {
        color: theme.palette.primary.main,
    },
};

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
const Privacy = ({ pageData }) => {

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
                level2: '',
                level1Link: '',
            },
        });

        globalDispatch({ type: 'sidenav', payload: false });
        globalDispatch({ type: 'search_box', payload: { visible: false, value: '' } });
        globalDispatch({ type: 'current_menu', payload: '' });

    }, []);

    return (

        <Fragment>
            <GlobalStyles styles={styles} />
            <HeadTag title={pageData.title} />

            <DetailWrapLayout>
                <SectionTitle
                    primaryText={pageData.title}
                    showMobile={true}
                />
                <div className="detail-wrap" dangerouslySetInnerHTML={{ __html: pageData.data.detail }} />
            </DetailWrapLayout>
        </Fragment>

    );

};

export default Privacy;

export async function getServerSideProps () {

    const res = await util.serviceServer({
        method: 'get',
        url: '/web_privacy',
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
                title: '隱私權政策',
                data: data.data,
            },
        },
    };

};
