import { Fragment, useContext, useEffect } from 'react';
import { GlobalStyles } from '@mui/material';
import { styled } from '@mui/system';

import theme from '../src/utils/theme';
import HeadTag from '../src/containers/HeadTag';
import { Links } from '../src/components/Links';
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

        globalDispatch({ type: 'sidenav', payload: false });
        globalDispatch({ type: 'search_box', payload: { visible: false, value: '' } });

    }, []);

    return (

        <Fragment>
            <GlobalStyles styles={styles} />
            <HeadTag title={text_sitemap} />

            <section>
                <SiteTitleLayout>{text_sitemap}</SiteTitleLayout>
                <p className="info">
                    本網站依無障礙網頁設計原則建置，網站的主要內容分為四大區塊：<br />
                    1. 上方功能區塊、2. 左方導覽區塊、3. 中央內容區塊、4.右方相關連結區塊
                    <br />
                    <br />
                    本網站的快速鍵﹝Accesskey﹞設定如下：<br />
                    Alt+U：上方導覽連結區，此區塊列有本網站主要連結<br />
                    Alt+C：中央內容區塊，為本頁主要內容區<br />
                    Alt+Z：頁尾網站資訊<br />
                    <br />
                    <br />
                </p>

                <ItemsLayout>
                    {
                        extendMenus.map(({ key, text, subItems }, idx) => (

                            <div
                                key={idx}
                                className="item-wrap"
                            >
                                <div className="inner">
                                    <h2 className="title">
                                        {
                                            ((key === 'privacy') || (key === 'security')) ? (

                                                <Links url={`/${key}`} title={text}>
                                                    {idx + 1}.{text}
                                                </Links>

                                            ) : `${idx + 1}.${text}`
                                        }
                                    </h2>
                                    <div className="sub-items">
                                        {
                                            subItems.map((sub, index) => (

                                                <Links
                                                    key={sub.key}
                                                    url={`/${key ? `${key}${`${(key !== 'news' && key !== 'place' && key !== 'policy') ? '/' : ''}`}` : ''}${sub.key}`}
                                                    title={sub.text}
                                                >
                                                    {idx + 1}-{index + 1} {sub.text}
                                                </Links>

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
