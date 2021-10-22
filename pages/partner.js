import { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import HeadTag from '../src/containers/HeadTag';
import { Links } from '../src/components/Links';
import Paginations from '../src/components/Paginations';

import {
    MenusLayout,
    MenuItemLayout,
    PartnersLayout,
} from '../src/components/partner/partnerLayout';

import { GlobalContext } from '../src/context/global.state';
import useQuery from '../src/utils/useQuery';
import util from '../src/utils/util';

//
const MenuItem = ({ tag = 'all', text, ...rest }) => (

    <MenuItemLayout
        url={`/partner?page=1&tag=${tag}`}
        {...rest}
    >
        {text}
    </MenuItemLayout>

);

//
const PartnerItem = ({
    data: {
        imgUrl,
        link,
        name,
        phone,
        email,
        description,
    },
}) => (

    <Links
        url={link}
        className="item"
        title={name}
        newPage={true}
    >
        <div className="top">
            <span className="thumb">
                <img
                    src={imgUrl}
                    alt={name}
                    width="152"
                    height="114"
                />
            </span>
            <span>
                <h2 className="name">{name}</h2>
                <div>{phone}</div>
                <div className="email">{email}</div>
            </span>
        </div>
        <p className="web-line-clamp">{description}</p>
    </Links>

);

//
const Partner = ({ pageData }) => {

    // Router
    const router = useRouter();
    const query = useQuery();

    // Context
    const { menu, globalDispatch } = useContext(GlobalContext);

    useEffect(() => {

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

    // Click page
    const handleChangePage = (e, page) => {

        // ...
        if (page === null) return;

        router.push({
            pathname: router.pathname,
            query: { ...query, page },
        });

    };

    return (

        <Fragment>
            <HeadTag title={`${pageData.title}-${pageData.currPageTitle}`} />

            <MenusLayout>
                <MenuItem
                    text="全部"
                    className={(query?.tag === 'all') ? 'active' : ''}
                />

                {
                    pageData.data.tags.map(({ id, name }) => (

                        <MenuItem
                            key={id}
                            tag={id}
                            text={name}
                            className={(+query?.tag === id) ? 'active' : ''}
                        />

                    ))
                }
            </MenusLayout>

            <PartnersLayout>
                {
                    pageData.data.list.length ? (

                        pageData.data.list.map((data) => (

                            <PartnerItem
                                key={data.id}
                                data={data}
                            />

                        ))

                    ) : '目前沒有資料...'
                }
            </PartnersLayout>

            {
                !!(pageData.data.list.length) &&
                    <Paginations
                        length={pageData.data.count}
                        currPage={+query?.page}
                        onChange={handleChangePage}
                    />
            }
        </Fragment>

    );

};

export default Partner;

export async function getServerSideProps ({ query, res, req }) {

    const response = await util.serviceServer({
        method: 'get',
        url: `/web_partners?page=${query.page}&tag=${query.tag}`,
    });

    // console.log('betty query:', query)
    // console.log('betty res:', res)
    // console.log('betty req:', req)

    const { data } = response;

    if (!data.result) {

        return {
            notFound: true,
        };

    }

    return {
        props: {
            pageData: {
                title: '合作夥伴',
                currPageTitle: '文化科技聯盟',
                data: data.data,
            },
        },
    };

};
