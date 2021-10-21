import { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@mui/material';
import dayjs from 'dayjs';

import HeadTag from '../src/containers/HeadTag';
import { Links } from '../src/components/Links';
import Item from '../src/components/Item';

import { ItemLayout } from '../src/components/home/homeLayout';
import {
    MenuLayout,
    ItemsWrapLayout,
} from '../src/components/place/placeLayout';

import { GlobalContext } from '../src/context/global.state';
import useQuery from '../src/utils/useQuery';
import util from '../src/utils/util';

//
const config = {
    '5g': '5G示範場域',
    'tech': '互動科技示範場域',
};

//
const Place = ({ pageData }) => {

    // console.log('pageData:', pageData);

    // Router
    const router = useRouter();
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
                level2: config[query.cate] || pageData.currPageTitle,
                level1Link: '',
            },
        });

    }, []);

    return (

        <Fragment>
            <HeadTag title={`${pageData.title}-${config[query?.cate] || pageData.currPageTitle}`} />

            <MenuLayout>
                <h1 className="title">{config[query?.cate]}</h1>
            </MenuLayout>

            <ItemsWrapLayout>
                <Grid
                    container
                    rowSpacing="40px"
                    columnSpacing="30px"
                >
                    {
                        pageData.data.list.map(({ id, title, imgUrl }) => (

                            <Grid
                                key={id}
                                item
                                xs={12}
                                md={6}
                            >
                                <Item
                                    title={title}
                                    imgUrl={imgUrl}
                                    url={`/place/${id}`}
                                />
                            </Grid>

                        ))
                    }
                </Grid>
            </ItemsWrapLayout>
        </Fragment>

    );

};

export default Place;

export async function getStaticProps () {

    const res = await fetch('http://localhost:1001/json/place.json');
    const data = await res.json();

    if (!data.result) {

        return {
            notFound: true,
        };

    }

    return {
        revalidate: 30,
        props: {
            pageData: {
                title: '場域空間',
                currPageTitle: '5G示範場域',
                data: data.data,
            },
        },
    };

};
