import { Fragment } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles, Box } from '@mui/material';
import 'dayjs/locale/zh-tw';
import '../src/utils/locale';

// Context
import { GlobalProvider } from '../src/context/global.state';

import theme from '../src/utils/theme';
import HeadTag from '../src/containers/HeadTag';
import Header from '../src/containers/Header';
import Content from '../src/containers/Content';
import Footer from '../src/containers/Footer';

const styles = {
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
        maxWidth: '1200px',
        margin: 'auto',
        [theme.breakpoints.up('md')]: {
            paddingTop: '40px',
            paddingBottom: '40px',
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
    [theme.breakpoints.up('md')]: {
        'header, main, footer': {
            minWidth: '1200px',
        },
    },
    // [theme.breakpoints.down('md')]: {
    //     '.web-container': {
    //         paddingTop: '20px',
    //     },
    // },
};

//
const WebSite = ({ Component, pageProps }) => {

    return (

        <Fragment>
            <HeadTag />

            <ThemeProvider theme={theme}>
                <GlobalStyles styles={styles} />

                <GlobalProvider>
                    <Header />
                    <Box
                        component="main"
                        sx={{
                            minHeight: 'calc(100vh - 559px)', // header: 145px, footer: 414px
                            display: 'flex',
                        }}
                    >
                        <Box
                            component="div"
                            className="web-container"
                        >
                            <Content>
                                <Component {...pageProps} />
                            </Content>
                        </Box>
                    </Box>
                    <Footer />
                </GlobalProvider>
            </ThemeProvider>
        </Fragment>

    );

};

export default WebSite;
