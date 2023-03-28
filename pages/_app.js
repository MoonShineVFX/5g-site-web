import { Fragment, useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { GlobalStyles, Box } from '@mui/material'
import { styled } from '@mui/system'
import ReactGA from 'react-ga'
import 'dayjs/locale/zh-tw'
import '../src/utils/locale'
import getConfig from 'next/config'
import App from 'next/app'

// Context
import { GlobalProvider } from '../src/context/global.state'

import theme from '../src/utils/theme'
import HeadTag from '../src/containers/HeadTag'
import Header from '../src/containers/Header'
import Footer from '../src/containers/Footer'
import Breadcrumb from '../src/components/Breadcrumb'
import { BlindGuide } from '../src/components/Links'

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
}

// 跳到主要內容
const GoToContentLayout = styled('a')(({theme}) => ({
  width: '1px',
  height: '1px',
  color: theme.palette.text.primary,
  border: '0',
  margin: '-1px',
  padding: '0',
  position: 'absolute',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  '&:focus, &:active': {
    width: 'auto',
    height: 'auto',
    margin: '0',
    position: 'static',
    overflow: 'visible',
    clip: 'auto',
  },
}))

//
const WillBeBackLayout = styled('div')({
  maxWidth: '50%',
  margin: 'calc((100vh - 205px) / 2) auto',
  display: 'flex',
  justifyContent: 'center',
  'h1': {
    fontSize: '50px',
  },
  'p': {
    fontSize: '28px',
    color: 'gray',
  },
})

//
const WillBeBack = () => (

  <WillBeBackLayout>
    <div className="container">
      <h1>網站維護中！</h1>
      <p>很抱歉，網站維護中將暫停服務，造成不便請見諒。</p>
    </div>
  </WillBeBackLayout>

)

//
const WebSite = ({Component, pageProps, isMaintenance}) => {

  useEffect(() => {

    // GA
    ReactGA.initialize('UA-215404912-1')
    ReactGA.pageview(window.location.pathname + window.location.search)

  }, [])

  return (

    <Fragment>
      {
        isMaintenance ?
          <WillBeBack/> :
          <Fragment>
            <HeadTag/>

            <ThemeProvider theme={theme}>
              <GlobalStyles styles={styles}/>

              <GlobalProvider>
                <GoToContentLayout
                  href="#content"
                  title="跳到主要內容"
                >
                  跳到主要內容
                </GoToContentLayout>
                <Header/>
                <Breadcrumb/>

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
                    id="content"
                  >
                    <BlindGuide
                      title="中央內容區塊"
                      accessKey="C"
                      className="inContent"
                    />
                    <Component {...pageProps} />
                  </Box>
                </Box>
                <Footer/>
              </GlobalProvider>
            </ThemeProvider>
          </Fragment>

      }
    </Fragment>


  )

}

WebSite.getInitialProps = async (context) => {
  const ctx = App.getInitialProps(context)
  const { publicRuntimeConfig } = getConfig()
  return { ...ctx, isMaintenance: publicRuntimeConfig.MAINTENANCE_MODE }
}

export default WebSite
