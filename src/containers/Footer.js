import { styled } from '@mui/system';
import { Grid } from '@mui/material';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import LogoText from './LogoText';
import FontIcon from '../components/FontIcon';
import { Links } from '../components/Links';

// 串流平台 > 改為後台設定
const socialMedia = [
    {
        url: 'https://www.facebook.com/MoonShineAnimation',
        icon: faFacebook,
    },
    {
        url: 'https://www.instagram.com/moonshine.tw/?hl=zh-tw',
        icon: faInstagram,
    },
];

const FooterLayout = styled('footer')(({ theme }) => ({
    fontSize: '0.9em',
    color: theme.palette.bg.text,
    backgroundColor: theme.palette.bg.secondary,
    textAlign: 'center',
    padding: '76px 0 56px',
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
            marginRight: '0',
        },
    },
}));

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
}))

//
const Footer = () => (

    <FooterLayout>
        <Grid
            container
            components="section"
            className="Model-container footer-info"
        >
            <Grid item xs>
                <SponsorGridLayout><span className="title withLine">主辦</span>高雄市政府經濟發展局</SponsorGridLayout>
                <SponsorGridLayout><span className="title withLine">協辦</span>財團法人資訊工業策進會</SponsorGridLayout>
            </Grid>

            <Grid item xs>
                <div className="align-box">
                    <SponsorGridLayout className="info">
                        <span className="title">聯絡我們</span>
                        802 高雄市苓雅區四維三路2號9樓 <br/>
                        info@5goio.org <br/>
                        Tel: +886 7 3368333 <br/>
                    </SponsorGridLayout>
                </div>
            </Grid>

            <Grid item xs className="align-right">
                <LogoText />
            </Grid>
        </Grid>

        <Grid
            container
            components="section"
            className="Model-container footer-social"
        >
            <Grid item xs></Grid>
            <Grid item xs>
                <div className="align-box">
                    {
                        socialMedia.map(({ url, icon }, idx) => (

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
            <Grid item xs className="align-right privacy">
                <p><Links>資安說明</Links></p>
                <p><Links>隱私權政策</Links></p>
            </Grid>
        </Grid>

        <Grid
            container
            components="section"
            className="Model-container footer-copyright"
        >
            <Grid item xs>
                <p>© 2021 All rights reserved. Moonshine</p>
            </Grid>
        </Grid>
    </FooterLayout>

);

export default Footer;
