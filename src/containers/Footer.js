import { styled } from '@mui/system';
import { Grid, IconButton } from '@mui/material';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import dayjs from 'dayjs';
import LogoText from './LogoText';
import FontIcon from '../components/FontIcon';
import { Links } from '../components/Links';
import utilConst from '../utils/util.const';

const { textConfig: { text_contact_us } } = utilConst;

// 社群 > 改為後台設定
const socials = [
    {
        url: 'https://www.facebook.com/MoonShineAnimation',
        icon: faFacebook,
    },
    {
        url: 'https://www.instagram.com/moonshine.tw/?hl=zh-tw',
        icon: faInstagram,
    },
];

//
const FooterLayout = styled('footer')(({ theme }) => ({
    fontSize: '0.9em',
    color: theme.palette.bg.text,
    backgroundColor: theme.palette.bg.secondary,
    textAlign: 'center',
    '> div': {
        padding: '76px 0 56px',
    },
    '.footer-social': {
        margin: '60px auto 20px',
        fontSize: '1.8em',
        'a': {
            color: theme.palette.bg.text,
            marginRight: '16px',
        },
    },
    '.footer-copyright': {
        textAlign: 'center',
        'p': {
            marginBottom: '0',
        },
    },
    '.align-box': {
        textAlign: 'left',
        paddingLeft: '80px',
    },
    '.align-right': {
        textAlign: 'right',
    },
    '.privacy': {
        fontSize: '14px',
        'p': {
            marginTop: '0',
            marginBottom: '4px',
        },
        'a': {
            // Notes: 頁面尚未做，先讓文字顏色與背景相同
            // color: theme.palette.bg.secondary,
            marginRight: '0',
        },
    },
    [theme.breakpoints.down('md')]: {
        '> div': {
            padding: '40px 20px',
        },
        '.align-box, .align-right': {
            textAlign: 'center',
            paddingLeft: '0',
        },
        '.footer-info > div:not(.logo)': {
            fontSize: '0.8em',
            marginBottom: '20px',
        },
        '.logo': {
            order: '-1',
            marginBottom: '40px',
        },
        '.footer-social': {
            margin: '0',
        },
        '.social': {
            order: '2',
            marginTop: '20px',
        },
        '.privacy': {
            'p': {
                display: 'inline-block',
                margin: '0 15px',
            },
            'a': {
                fontSize: '0.6em',
            },
        },
    },
}));

//
const SponsorGridLayout = styled('p')(({ theme }) => ({
    textAlign: 'left',
    marginTop: '0',
    '.title': {
        color: theme.palette.text.secondary,
    },
    '.withLine:after': {
        content: '""',
        width: '1px',
        height: '16px',
        display: 'inline-block',
        verticalAlign: 'middle',
        backgroundColor: theme.palette.text.secondary,
        margin: '0 10px',
    },
    '&.info': {
        lineHeight: '1.6',
        '.title': {
            display: 'block',
            marginBottom: '6px',
        },
    },
}));

// 回到最上方
const BackToTopLayout = styled(IconButton)(({ theme }) => ({
    width: '50px',
    height: '50px',
    backgroundColor: theme.palette.bg.primary,
    display: 'block',
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    '&:hover': {
        backgroundColor: theme.palette.bg.primary,
    },
    [theme.breakpoints.down('md')]: {
        right: '10px',
    },
}));

//
const Footer = () => {

    // 回到最上方
    const targetScrollToTop = () => window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });

    return (

        <FooterLayout>
            <div className="web-container">
                <Grid
                    container
                    components="section"
                    className="footer-info"
                >
                    <Grid item xs={12} md={4}>
                        <SponsorGridLayout><span className="title withLine">主辦</span>高雄市政府經濟發展局</SponsorGridLayout>
                        <SponsorGridLayout><span className="title withLine">協辦</span>財團法人資訊工業策進會</SponsorGridLayout>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <div className="align-box">
                            <SponsorGridLayout className="info">
                                <span id="contact" className="title">{text_contact_us}</span>
                                802 高雄市苓雅區四維三路2號9樓 <br/>
                                info@5goio.org <br/>
                                Tel: +886 7 3368333 <br/>
                            </SponsorGridLayout>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4} className="align-right logo">
                        <LogoText />
                    </Grid>
                </Grid>

                <Grid
                    container
                    components="section"
                    className="footer-social"
                >
                    <Grid item xs={12} md={4}></Grid>
                    <Grid item xs={12} md={4} className="social">
                        <div className="align-box">
                            {
                                socials.map(({ url, icon }, idx) => (

                                    <Links
                                        key={idx}
                                        href={url}
                                    >
                                        <FontIcon icon={icon} />
                                    </Links>

                                ))
                            }
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} className="align-right privacy">
                        <p><Links url="/security">資安說明</Links></p>
                        <p><Links url="/privacy">隱私權政策</Links></p>
                    </Grid>
                </Grid>

                <Grid
                    container
                    components="section"
                    className="footer-copyright"
                >
                    <Grid item xs>
                        <p>© {dayjs().format('YYYY')} All rights reserved.</p>
                    </Grid>
                </Grid>

                <BackToTopLayout
                    className="btn-backToTop"
                    onClick={targetScrollToTop}
                >
                    <FontIcon icon={faChevronUp} />
                </BackToTopLayout>
            </div>
        </FooterLayout>

    );

};

export default Footer;
