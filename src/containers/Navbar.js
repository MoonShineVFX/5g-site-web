import { useContext } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { Links } from '../components/Links';
import { GlobalContext } from '../context/global.state';
import utilConst from '../utils/util.const';

const { navMenus } = utilConst;

//
const NavMenuLayout = styled('nav')(({ theme }) => ({
    position: 'relative',
    '.btn-menu': {
        fontSize: '1em',
        color: theme.palette.bg.text,
    },
    'a': {
        textDecoration: 'none',
        display: 'block',
        padding: '8px 12px',
    },
    [theme.breakpoints.up('md')]: {
        '.menu-outer': {
            height: '100px',
            display: 'inline-block',
            padding: '0 20px',
            position: 'relative',
            zIndex: '10',
            transition: 'all .2s ease',
            '&:before': {
                content: '""',
                height: '100%',
                display: 'inline-block',
                verticalAlign: 'middle',
            },
            '&.active': {
                backgroundColor: theme.palette.text.secondary,
                '.btn-menu': {
                    color: theme.palette.text.primary,
                },
            },
            '.sub-menus': {
                width: '100%',
                backgroundColor: '#BEBEBE',
                textAlign: 'center',
                zIndex: '1',
                transition: 'all .25s ease',
                '&.active': {
                    display: 'block',
                },
            },
        },
        '.title': {
            display: 'inline-block',
        },
        '.sub-menus': {
            display: 'none',
            position: 'absolute',
            top: '100px',
            left: '0',
        },
    },
    [theme.breakpoints.down('md')]: {
        '.menu-outer': {
            margin: '0 auto 20px',
        },
        '.title': {
            maxWidth: '300px',
            fontSize: '1.5em',
            margin: 'auto',
            position: 'relative',
            '&:before': {
                content: '""',
                width: '100%',
                height: '1px',
                backgroundColor: theme.palette.bg.text,
                display: 'inline-block',
                position: 'absolute',
                top: '18px',
                left: '50%',
                transform: 'translateX(-50%)',
            },
            'span': {
                backgroundColor: theme.palette.primary.main,
                padding: '0 20px',
                position: 'relative',
                zIndex: '1',
            },
        },
        'a': {
            fontSize: '1.15em',
            color: theme.palette.text.secondary,
            padding: '8px 20px',
        },
    },
}));

//
const Navbar = ({ ...rest }) => {

    // Context
    const { menu, currMenu, globalDispatch } = useContext(GlobalContext);

    // 點擊第一層 menu
    const handleClickMenuName = ({ target }) => {

        globalDispatch({
            type: 'current_menu',
            payload: (currMenu === target.name) ? '' : target.name,
        });
    };

    // 紀錄 menu 名稱
    const handleClickSubMenu = (text) => {

        globalDispatch({
            type: 'menu',
            payload: {
                ...menu,
                level2: text,
            },
        });

    };

    return (

        <NavMenuLayout className="nav-menu-wrap" {...rest}>
            {
                navMenus.map(({ key, text, subItems }, idx) => (

                    <span
                        key={idx}
                        className={`menu-outer ${(currMenu === `button-${idx + 1}`) ? 'active' : ''}`}
                    >
                        <Button
                            name={`button-${idx + 1}`}
                            aria-label={text}
                            value={text}
                            className="btn-menu"
                            onClick={handleClickMenuName}
                        >
                            {text}
                        </Button>

                        <div className={`sub-menus ${(currMenu === `button-${idx + 1}`) ? 'active' : ''}`}>
                            {
                                subItems.map((sub) => (

                                    <Links
                                        key={sub.key}
                                        title={sub.text}
                                        url={`/${key ? `${key}${`${(key !== 'news' && key !== 'place' && key !== 'policy') ? '/' : ''}`}` : ''}${sub.key}`}
                                        onClick={() => handleClickSubMenu(sub.text)}
                                    >
                                        {sub.text}
                                    </Links>

                                ))
                            }
                        </div>
                    </span>

                ))
            }
        </NavMenuLayout>

    );

};

export default Navbar;
