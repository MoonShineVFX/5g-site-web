import { styled } from '@mui/system';
import { Links } from '../components/Links';

const LogoLayout = styled(Links)(({ theme }) => ({
    lineHeight: '1.4',
    textAlign: 'center',
    textDecoration: 'none',
    '.logo-text': {
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

    <LogoLayout className="logoText">
        <h2 className="logo-text">高雄市</h2>
        <div>地方文化特色整合</div>
        <div>5G應用與落地計畫</div>
    </LogoLayout>

);

export default LogoText;
