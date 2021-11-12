import { Fragment, useContext, useEffect } from 'react';
import { Grid } from '@mui/material';
import HeadTag from '../src/containers/HeadTag';
import Item from '../src/components/Item';
import EmptyDataMesg from '../src/components/EmptyDataMesg';
import { MenuLayout, ItemsWrapLayout } from '../src/components/place/placeLayout';
import { GlobalContext } from '../src/context/global.state';
import useQuery from '../src/utils/useQuery';
import util from '../src/utils/util';
import utilConst from '../src/utils/util.const';

const { placeConfig } = utilConst;

//
const Place = ({ pageData }) => {

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
                level2: placeConfig[query?.type] || pageData.currPageTitle,
                level1Link: '',
            },
        });

        globalDispatch({ type: 'sidenav', payload: false });

    }, []);

    return (

        <Fragment>
            <HeadTag title={`${pageData.title}-${placeConfig[query?.type] || pageData.currPageTitle}`} />

            <MenuLayout>
                <h1 className="title">{placeConfig[query?.type]}</h1>
            </MenuLayout>

            <ItemsWrapLayout>
                <Grid
                    container
                    rowSpacing="40px"
                    columnSpacing="30px"
                >
                    {
                        pageData.data.list.length ? (

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
                                        width="563"
                                        height="312"
                                        newPage={true}
                                    />
                                </Grid>

                            ))

                        ) : <EmptyDataMesg />
                    }
                </Grid>
            </ItemsWrapLayout>
        </Fragment>

    );

};

export default Place;

export async function getServerSideProps ({ query }) {

    const res = await util.serviceServer({
        method: 'get',
        url: `/web_demo_places?type=${query.type}`,
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
                currPageTitle: '5G示範場域',
                data: data.data,
            },
        },
    };

};
