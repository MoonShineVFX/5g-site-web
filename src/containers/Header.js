import { useEffect, useContext } from 'react';
import { styled } from '@mui/system';
import { Toolbar, Box, useMediaQuery, Button } from '@mui/material';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Links, BlindGuide } from '../components/Links';
import Navbar from './Navbar';
import LogoText from './LogoText';
import FontIcon from '../components/FontIcon';
import { GlobalContext } from '../context/global.state';
import utilConst from '../utils/util.const';

const {
    textConfig: {
        text_contact_us,
        text_sitemap,
        text_search_all,
    },
} = utilConst;

//
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

//
const HeaderTopLayout = styled('div')(({ theme }) => ({
    fontSize: '0.9em',
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
    '.text-sitemap': {
        fontSize: '1em',
        fontWeight: 'normal',
        margin: '0',
    },
    '.search': {
        fontSize: '1.2em',
        color: '#FFF',
        marginRight: '10px',
        position: 'relative',
        cursor: 'pointer',
    },
    '.MuiToolbar-root': {
        height: '45px',
        minHeight: 'auto',
        lineHeight: '45px',
        padding: '0',
    },
    '.google-search-input': {
        lineHeight: '1',
        width: '300px',
        display: 'none',
        position: 'absolute',
        right: '-10px',
        zIndex: '30',
        '&.active': {
            display: 'block',
        },
    },
    '.search-input': {
        width: '300px',
        lineHeight: '1',
        fontSize: '0.9em',
        backgroundColor: '#FFF',
        display: 'none',
        padding: '10px',
        position: 'absolute',
        top: '46px',
        right: '-10px',
        zIndex: '30',
        cursor: 'default',
        '&.active': {
            display: 'block',
        },
        'input': {
            width: 'calc(100% - 20px - 56px)',
            fontSize: '1em',
            padding: '4px 8px',
        },
        'a': {
            backgroundColor: theme.palette.primary.main,
            marginLeft: '10px',
            padding: '8px 12px',
        },
    },
    [theme.breakpoints.down('md')]: {
        padding: '0 20px',
        '.search': {
            display: 'none',
        },
    },
}));

//
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

//
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
            height: '100%',
            textAlign: 'center',
            backgroundColor: theme.palette.primary.main,
            padding: '20px',
            zIndex: '1',
            overflow: 'auto',
        },
        '.menu-outer': {
            display: 'block',
        },
    },
}));

//
const Header = () => {

    // Context
    const {
        sideNav,
        googleSearch,
        globalDispatch,
    } = useContext(GlobalContext);

    const matches = useMediaQuery((theme) => theme.breakpoints.down('md'));

    useEffect(() => {

        if (!matches) globalDispatch({ type: 'sidenav', payload: false });
        document.body.style.overflow = sideNav ? 'hidden' : '';

    }, [matches, globalDispatch, sideNav]);

    // 關閉
    const handleHide = () => globalDispatch({ type: 'sidenav', payload: false });

    // 點擊
    const handleClick = () => globalDispatch({ type: 'sidenav', payload: !sideNav });

    // 父層點擊
    const handleShowSearchInput = () => {

        globalDispatch({
            type: 'search_box',
            payload: {
                ...googleSearch,
                visible: !googleSearch.visible,
            },
        });

    };

    // 阻止子層事件冒泡
    const handleClickStopPropagation = (e) => e.stopPropagation();

    // input
    const handleChangeInput = ({ target }) => {

        globalDispatch({
            type: 'search_box',
            payload: {
                ...googleSearch,
                value: target.value,
            },
        });

    };

    return (

        <AppBarLayout>
            <HeaderTopLayout>
                <Toolbar className="web-container">
                    {
                        false &&
                            <Links url="#contact" title={text_contact_us}>
                                {text_contact_us}
                            </Links>
                    }

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        <Button
                            name="search"
                            aria-label="搜尋"
                            value="搜尋"
                            className="search"
                            onClick={handleShowSearchInput}
                        >
                            <FontIcon icon={faSearch} />
                            <span
                                className={`search-input ${googleSearch.visible ? 'active' : ''}`}
                                onClick={handleClickStopPropagation}
                            >
                                <input
                                    type="text"
                                    name="query"
                                    aria-label="請輸入關鍵字"
                                    placeholder="請輸入關鍵字"
                                    value={googleSearch.value}
                                    onChange={handleChangeInput}
                                />
                                <Links url={`/searchall?q=${googleSearch.value}`} title={text_search_all}>送出</Links>
                            </span>
                        </Button>

                        <Links url="/sitemap" title={text_sitemap}>
                            <h1 className="text-sitemap">{text_sitemap}</h1>
                        </Links>
                    </Box>
                </Toolbar>
            </HeaderTopLayout>

            <HeaderLayout className="web-container">
                <Box className="grid-left">
                    <BlindGuide
                        title="上方功能區塊，此區塊有選單相關連結"
                        accessKey="U"
                    />

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

            <SideNavLayout className={`mWeb-menu ${sideNav ? 'active' : ''}`}>
                <Navbar />
                <div className="mask" onClick={handleHide}></div>
            </SideNavLayout>
        </AppBarLayout>

    );

};

export default Header;
