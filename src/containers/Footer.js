import { styled } from '@mui/system';
import { Grid, IconButton } from '@mui/material';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import LogoText from './LogoText';
import FontIcon from '../components/FontIcon';
import { Links, BlindGuide } from '../components/Links';
import utilConst from '../utils/util.const';

const {
    textConfig: {
        text_contact_us,
        text_privacy,
        text_security,
    },
} = utilConst;

// 社群 > 改為後台設定
const socials = [
    {
        url: 'https://edbkcg.kcg.gov.tw',
        icon: faLinkedinIn,
        name: 'ks',
        title: '經發局',
    },
    {
        url: 'https://www.facebook.com/edbkh',
        icon: faFacebook,
        name: 'fb',
        title: 'Facebook',
    },
    {
        url: 'https://www.instagram.com/edbkh',
        icon: faInstagram,
        name: 'ig',
        title: 'Instagram',
    },
];

//
const FooterLayout = styled('footer')(({ theme }) => ({
    fontSize: '0.9em',
    color: theme.palette.bg.text,
    backgroundColor: theme.palette.bg.secondary,
    '> div': {
        padding: '76px 0 56px',
    },
    '.footer-info': {
        position: 'relative',
    },
    '.logoText': {
        marginBottom: '20px',
    },
    '.socialWrap': {
        fontSize: '1.8em',
        'a': {
            color: theme.palette.bg.text,
            marginRight: '20px',
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
        paddingLeft: '50px',
    },
    '.align-right': {
        textAlign: 'right',
    },
    '.privacy': {
        fontSize: '1em',
        'p': {
            marginTop: '0',
            marginBottom: '4px',
        },
        'a': {
            color: theme.palette.bg.text,
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
                    component="section"
                    className="footer-info"
                >
                    <Grid item xs={12} md={4}>
                        <BlindGuide
                            title="下方連結區，此區塊列有[聯絡資訊]、[社群]、[資安說明]、[隱私權政策]等連結"
                            accessKey="Z"
                        />
                        <LogoText />
                        <SponsorGridLayout><span className="title withLine">主辦</span>高雄市政府經濟發展局</SponsorGridLayout>
                        <SponsorGridLayout><span className="title withLine">協辦</span>資暘數位有限公司</SponsorGridLayout>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <div className="align-box">
                            <SponsorGridLayout className="info">
                                <span id="contact" className="title">{text_contact_us}</span>
                                806高雄市前鎮區成功二路25號2樓(數位轉型共創基地) <br/>
                                tracylee@vnrc.tw <br/>
                                Tel: +886 7 3387397 <br/>
                            </SponsorGridLayout>

                            <div className="socialWrap">
                                {
                                    socials.map(({ url, name, title }, idx) => (

                                        <Links
                                            key={idx}
                                            url={url}
                                            title={title}
                                        >
                                            <img
                                                src={`/${name}.png`}
                                                alt={name}
                                                title={title}
                                                width="30"
                                                height="30"
                                            />
                                        </Links>

                                    ))
                                }
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4} className="align-right privacy">
                        <p><Links url="/security" title={text_security}>{text_security}</Links></p>
                        <p><Links url="/privacy" title={text_privacy}>{text_privacy}</Links></p>
                        <p>
                            <a href="https://accessibility.ncc.gov.tw/Applications/Detail?category=20220106151048" title="無障礙網站">
                                <img src="/AA.png" border="0" width="88" height="31" alt="通過AA無障礙網頁檢測" />
                            </a>
                        </p>
                    </Grid>
                </Grid>

                <Grid
                    container
                    components="section"
                    className="footer-copyright"
                >
                    <Grid item xs>
                        <p>Copyright © 高雄市政府經濟發展局 All rights reserved.</p>
                    </Grid>
                </Grid>

                <BackToTopLayout
                    name="backTo"
                    aria-label="回到最上方"
                    value="回到最上方"
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
