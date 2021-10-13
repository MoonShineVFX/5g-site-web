import { Fragment, useContext, useEffect } from 'react';
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
    partnerStyles,
    ShowMoreButtonLayout,
} from '../src/components/partner/partnerLayout';

import { GlobalContext } from '../src/context/global.state';
import util from '../src/utils/util';

const Partner = ({ pageData }) => {

    // console.log('pageData:', pageData);

    // Context
    const { globalDispatch } = useContext(GlobalContext);

    useEffect(() => {

        globalDispatch({
            type: 'page',
            payload: pageData.title,
        });

    }, []);

    return (

        <Fragment>
            {partnerStyles}
            <HeadTag title={pageData.title} />

            123
        </Fragment>

    );

};

export default Partner;

export async function getStaticProps () {

    const res = await fetch('http://localhost:1001/json/partner.json');
    const data = await res.json();

    if (!data.result) {

        return {
            notFound: true,
        };

    }

    return {
        props: {
            pageData: {
                title: '合作夥伴',
                data: data.data,
            },
        },
    };

};
