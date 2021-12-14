import { Fragment, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles, Box } from '@mui/material';
import ReactGA from 'react-ga';
import 'dayjs/locale/zh-tw';
import '../src/utils/locale';

// Context
import { GlobalProvider } from '../src/context/global.state';

import theme from '../src/utils/theme';
import HeadTag from '../src/containers/HeadTag';
import Header from '../src/containers/Header';
import Footer from '../src/containers/Footer';
import Breadcrumb from '../src/components/Breadcrumb';
import { BlindGuide } from '../src/components/Links';

const styles = {
    html: {
        scrollBehavior: 'smooth',
    },
    body: {
        lineHeight: '1.6',
        fontSize: '1em',
        fontFamily: 'Noto Sans TC, Robot, 微軟正黑體, Microsoft JhengHei',
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.bg.primary,
        margin: 0,
        '*': {
            boxSizing: 'border-box',
        },
    },
    a: {
        display: 'inline-block',
        textDecoration: 'none',
    },
    '.web-container': {
        width: '100%',
        maxWidth: '1200px',
        margin: 'auto',
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            paddingTop: '40px',
            paddingBottom: '80px',
        },
    },
    '.web-align': {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    '.web-x-align': {
        left: '50%',
        transform: 'translateX(-50%)',
    },
    '.web-y-align': {
        top: '50%',
        transform: 'translateY(-50%)',
    },
    '.web-clear-box': {
        '&:after': {
            content: '""',
            display: 'block',
            clear: 'both',
        },
    },
    '.web-line-clamp': {
        display: '-webkit-box',
        WebkitLineClamp: theme.lineClamp(),
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    },
    'img': {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover',
        transition: 'all .75s ease',
    },
    [theme.breakpoints.down('md')]: {
        'main > div': {
            padding: '40px 20px',
        },
    },
    [theme.breakpoints.between('md', '1220')]: {
        '.breadcrumb, main, footer': {
            padding: '0 20px',
        },
    },
};

//
const WebSite = ({ Component, pageProps }) => {

    useEffect(() => {

        // GA
        ReactGA.initialize('296818950');
        ReactGA.pageview(window.location.pathname + window.location.search);

    }, []);

    return (

        <Fragment>
            <HeadTag />

            <ThemeProvider theme={theme}>
                <GlobalStyles styles={styles} />

                <GlobalProvider>
                    <Header />
                    <Breadcrumb />

                    <Box
                        component="main"
                        sx={{
                            minHeight: 'calc(100vh - 475px)', // header: 145px, footer: 330px
                            display: 'flex',
                        }}
                    >
                        <Box
                            component="div"
                            className="web-container"
                        >
                            <BlindGuide
                                title="中央內容區塊"
                                accessKey="C"
                                className="inContent"
                            />
                            <Component {...pageProps} />
                        </Box>
                    </Box>
                    <Footer />
                </GlobalProvider>
            </ThemeProvider>
        </Fragment>

    );

};

export default WebSite;

/**
 * GA
 * https://jeserlin.wordpress.com/2019/07/21/ga1/
 */
