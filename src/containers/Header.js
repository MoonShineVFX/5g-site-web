import { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Toolbar, Box, useMediaQuery } from '@mui/material';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
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
    [theme.breakpoints.between('md', '1220')]: {
        '> div': {
            padding: '0 20px',
            overflow: 'initial',
        },
    },
}));

const HeaderTopLayout = styled('div')(({ theme }) => ({
    fontSize: '0.9em',
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
    'a': {
        // Notes: 頁面尚未做，先讓文字顏色與背景相同
        color: theme.palette.bg.secondary,
    },
    '.search': {
        fontSize: '1.2em',
        marginRight: '40px',
        // Notes: 頁面尚未做，先讓文字顏色與背景相同
        color: theme.palette.bg.secondary,
    },
    '.MuiToolbar-root': {
        height: '45px',
        minHeight: 'auto',
        lineHeight: '45px',
        padding: '0',
    },
    [theme.breakpoints.down('md')]: {
        padding: '0 20px',
        '.search': {
            display: 'none',
        },
    },
}));

const HeaderLayout = styled(Toolbar)(({ theme }) => ({
    height: '100px',
    [theme.breakpoints.up('1220')]: {
        padding: '0',
    },
    [theme.breakpoints.between('md', '1220')]: {
        overflow: 'hidden',
        '.grid-right': {
            marginRight: '-20px',
        },
    },
    [theme.breakpoints.up('md')]: {
        '.search, .menu, .grid-center .logoText': {
            display: 'none',
        },
        '.grid-left .logoText': {
            display: 'block',
        },
    },
    [theme.breakpoints.down('md')]: {
        padding: '0',
        '.search, .menu, .grid-center .logoText': {
            display: 'block',
        },
        '.grid-left .logoText': {
            display: 'none',
        },
        '.nav-menu-wrap': {
            display: 'none',
        },
        'svg': {
            fontSize: '1.6em',
        },
        '.menu, .search': {
            padding: '20px',
        },
    },
}));

const SideNavLayout = styled('div')(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        '&.active': {
            width: '100%',
            height: 'calc(100vh - 145px)', // header: 145px
            display: 'block',
            position: 'fixed',
            top: '145px',
            left: '0',
            zIndex: '100',
        },
        '.mask': {
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, .65)',
        },
        '.nav-menu-wrap': {
            textAlign: 'center',
            backgroundColor: theme.palette.primary.main,
            padding: '20px',
            zIndex: '1',
        },
        '.menu-outer': {
            display: 'block',
        },
    },
}));

//
const Header = () => {

    const matches = useMediaQuery((theme) => theme.breakpoints.down('md'));

    // State
    const [active, setActive] = useState(false);

    useEffect(() => {

        if (!matches) setActive(false);
        document.body.style.overflow = active ? 'hidden' : '';

    }, [matches, active]);

    // 關閉
    const handleHide = () => setActive(false);

    //
    const handleClick = () => setActive(!active);

    return (

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
                <Box className="grid-left">
                    <span
                        className="menu"
                        onClick={handleClick}
                    >
                        <FontIcon icon={faBars} />
                    </span>
                    <LogoText />
                </Box>

                <Box
                    className="grid-center"
                    sx={{ flexGrow: 1 }}
                >
                    <LogoText />
                </Box>

                <Box className="grid-right">
                    <Navbar />
                    <span className="search">
                        <FontIcon icon={faSearch} />
                    </span>
                </Box>
            </HeaderLayout>

            <SideNavLayout className={`mWeb-menu ${active ? 'active' : ''}`}>
                <Navbar />
                <div className="mask" onClick={handleHide}></div>
            </SideNavLayout>
        </AppBarLayout>

    );

};

export default Header;
