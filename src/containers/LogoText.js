import { styled } from '@mui/system';
import { Links } from '../components/Links';

const slogn = {
    text1: '高雄市',
    text2: '地方文化特色整合',
    text3: '5G應用與落地計畫 2.0',
};

const LogoLayout = styled(Links)(({ theme }) => ({
    lineHeight: '1.4',
    textAlign: 'center',
    textDecoration: 'none',
    '.logo-text': {
        fontSize: '1.5em',
        fontWeight: 'normal',
        color: theme.palette.bg.text,
        letterSpacing: '8px',
        margin: '0',
    },
    'div': {
        fontSize: '0.9em',
        color: theme.palette.text.secondary,
    },
}));

const LogoText = () => (

    <LogoLayout
        url="/"
        className="logoText"
        title={`${slogn.text1} ${slogn.text2} ${slogn.text3}`}
    >
        <div className="logo-text">{slogn.text1}</div>
        <div>{slogn.text2}</div>
        <div>{slogn.text3}</div>
    </LogoLayout>

);

export default LogoText;
