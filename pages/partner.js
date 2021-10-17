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
import util from '../src/utils/util';
import useQuery from '../src/utils/useQuery';

//
const MenuItem = ({ type = 'all', text, ...rest }) => (

    <MenuItemLayout
        url={`/partner?page=1&type=${type}`}
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
        target="_blank"
        className="item"
        title={name}
    >
        <div className="top">
            <span className="thumb">
                <img src={imgUrl} alt={name} />
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

    // console.log('pageData:', pageData);
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
                    className={(query?.type === 'all') ? 'active' : ''}
                />

                {
                    pageData.data.tags.map(({ id, name }) => (

                        <MenuItem
                            key={id}
                            type={id}
                            text={name}
                            className={(+query?.type === id) ? 'active' : ''}
                        />

                    ))
                }
            </MenusLayout>

            <PartnersLayout>
                {
                    pageData.data.list.map((data) => (

                        <PartnerItem
                            key={data.id}
                            data={data}
                        />

                    ))
                }
            </PartnersLayout>

            <Paginations
                length={pageData.data.list.length}
                currPage={+query?.page}
                onChange={handleChangePage}
            />
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
        revalidate: 30,
        props: {
            pageData: {
                title: '合作夥伴',
                currPageTitle: '文化科技聯盟',
                data: data.data,
            },
        },
    };

};
