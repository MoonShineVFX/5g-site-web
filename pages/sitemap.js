import { Fragment, useContext, useEffect } from 'react';
import { GlobalStyles } from '@mui/material';
import { styled } from '@mui/system';

import theme from '../src/utils/theme';
import HeadTag from '../src/containers/HeadTag';
import { GlobalContext } from '../src/context/global.state';
import useQuery from '../src/utils/useQuery';
import utilConst from '../src/utils/util.const';

const {
    navMenus,
    textConfig: {
        text_sitemap,
        text_privacy,
        text_security,
    },
} = utilConst;

const styles = {
    '.breadcrumb .level1': {
        color: theme.palette.primary.main,
    },
};

// Menu 擴充
const extendMenus = [
    ...navMenus,
    {
        key: 'privacy',
        text: text_privacy,
        subItems: [],
    },
    {
        key: 'security',
        text: text_security,
        subItems: [],
    },
];

//
const SiteTitleLayout = styled('h1')(({ theme }) => ({
    color: theme.palette.primary.main,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    marginBottom: '60px',
    paddingBottom: '24px',
}));

//
const ItemsLayout = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: '0 -13px',
    '.item-wrap': {
        flex: '0 0 calc(100% / 5)',
        marginBottom: '100px',
        padding: '0 13px',
    },
    '.inner': {
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '10px',
        padding: '12px 16px',
    },
    '.title': {
        margin: '0 0 4px',
    },
    '.sub-items > div': {
        paddingLeft: '20px',
    },
    [theme.breakpoints.down('md')]: {
        '.item-wrap': {
            flex: '0 0 calc(100% / 2)',
            marginBottom: '20px',
        },
        '.inner': {
            minHeight: '124px',
        },
        '.title': {
            fontSize: '1em',
        },
        '.sub-items > div': {
            fontSize: '0.9em',
            paddingLeft: '0',
        },
    },
    [theme.breakpoints.down('400')]: {
        '.item-wrap': {
            flex: '100%',
        },
        '.inner': {
            minHeight: 'auto',
        },
        '.title': {
            fontSize: '1em',
        },
        '.sub-items > div': {
            fontSize: '0.8em',
        },
    },
}));

//
const Sitemap = () => {

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
                level1: text_sitemap,
                level2: '',
                level1Link: '',
            },
        });

    }, []);

    return (

        <Fragment>
            <GlobalStyles styles={styles} />
            <HeadTag title={text_sitemap} />
            <SiteTitleLayout>{text_sitemap}</SiteTitleLayout>

            <section>
                <ItemsLayout>
                    {
                        extendMenus.map(({ text, subItems }, idx) => (

                            <div
                                key={idx}
                                className="item-wrap"
                            >
                                <div className="inner">
                                    <h2 className="title">{idx + 1}.{text}</h2>
                                    <div className="sub-items">
                                        {
                                            subItems.map((sub, index) => (

                                                <div key={sub.key}>
                                                    {idx + 1}-{index + 1} {sub.text}
                                                </div>

                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </ItemsLayout>
            </section>
        </Fragment>

    );

};

export default Sitemap;
