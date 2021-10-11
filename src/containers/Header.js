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
    [theme.breakpoints.down('md')]: {
        '.search': {
            display: 'none',
        },
    },
}));

const HeaderLayout = styled(Toolbar)(({ theme }) => ({
    height: '100px',
    [theme.breakpoints.up('xs')]: {
        '.search': {
            display: 'block',
        },
    },
    [theme.breakpoints.up('sm')]: {
        padding: '0',
    },
    [theme.breakpoints.up('md')]: {
        '.search': {
            display: 'none',
        },
    },
    // [theme.breakpoints.up('lg')]: {
    //     '.header-navbar': {
    //         marginRight: '-20px',
    //     },
    // },
}));

//
const Header = () => (

    <AppBarLayout>
        <HeaderTopLayout>
            <Toolbar className="web-container">
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

        <HeaderLayout className="web-container">
            <LogoText />
            <Box sx={{ flexGrow: 1 }} />
            <Box className="header-navbar">
                <Navbar />

                <span className="search">
                    <FontIcon icon={faSearch} />
                </span>
            </Box>
        </HeaderLayout>
    </AppBarLayout>

);

export default Header;
