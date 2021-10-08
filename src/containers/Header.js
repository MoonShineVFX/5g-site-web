import { styled } from '@mui/system';
import { Toolbar, Box } from '@mui/material';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Links } from '../components/Links';
import Navbar from './Navbar';
import LogoText from './LogoText';
import FontIcon from '../components/FontIcon';

const AppBarLayout = styled('header')(({ theme }) => ({
    maxHeight: '145px',
    backgroundColor: theme.palette.bg.secondary,
    boxShadow: 'none',
    color: theme.palette.bg.text,
    'a': {
        color: theme.palette.bg.text,
        textDecoration: 'none',
    },
}));

const HeaderTopLayout = styled('div')(({ theme }) => ({
    fontSize: '0.9em',
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
    '.search': {
        fontSize: '1.2em',
        marginRight: '40px',
    },
    '.MuiToolbar-root': {
        [theme.breakpoints.up('sm')]: {
            height: '45px',
            minHeight: 'auto',
            lineHeight: '45px',
            padding: '0',
        },
    },
}));

const HeaderLayout = styled(Toolbar)(({ theme }) => ({
    height: '100px',
    [theme.breakpoints.up('sm')]: {
        padding: '0',
    },
}));

//
const Header = () => (

    <AppBarLayout>
        <HeaderTopLayout>
            <Toolbar className="Model-container">
                <Links>聯絡我們</Links>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                    <span className="search">
                        <FontIcon icon={faSearch} />
                    </span>
                    <Links>網站導覽</Links>
                </Box>
            </Toolbar>
        </HeaderTopLayout>

        <HeaderLayout className="Model-container">
            <LogoText />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{
                display: { xs: 'flex', md: 'flex' },
                marginRight: { lg: '-28px' },
            }}>
                <Navbar />
            </Box>
        </HeaderLayout>
    </AppBarLayout>

);

export default Header;
