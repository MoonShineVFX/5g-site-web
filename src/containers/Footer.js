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
    color: theme.palette.containerTextColor,
    backgroundColor: theme.palette.containerBgColor,
    textAlign: 'center',
    padding: '76px 0 56px',
    // marginTop: '100px',
    // marginBottom: '40px',
    '.footer-info': {},
    '.footer-social': {
        fontSize: '1.8em',
        'a': {
            color: theme.palette.containerTextColor,
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
        border: '1px solid',
        textAlign: 'left',
        display: 'inline-block',
    }
}));

//
const Footer = () => (

    <FooterLayout>
        <Grid
            container
            components="section"
            className="Model-container footer-info"
        >
            <Grid item xs>
                123
            </Grid>

            <Grid item xs>
                <div className="align-box">
                    456
                </div>
            </Grid>

            <Grid item xs>
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
            <Grid item xs></Grid>
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
