import { useContext } from 'react';
import { styled } from '@mui/system';
import { Links } from '../components/Links';
import { GlobalContext } from '../context/global.state';
import utilConst from '../utils/util.const';

const { navMenus } = utilConst;

//
const NavMenuLayout = styled('nav')(({ theme }) => ({
    position: 'relative',
    '.menu-outer': {
        fontSize: '1em',
        color: theme.palette.bg.text,
        cursor: 'default',
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
            padding: '0 30px',
            position: 'relative',
            zIndex: '10',
            transition: 'all .2s ease',
            '&:before': {
                content: '""',
                height: '100%',
                display: 'inline-block',
                verticalAlign: 'middle',
            },
            '&:hover, &:focus': {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.text.secondary,
                '.sub-menus': {
                    width: '100%',
                    backgroundColor: '#BEBEBE',
                    textAlign: 'center',
                    display: 'block',
                    zIndex: '1',
                    transition: 'all .25s ease',
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
    const { menu, globalDispatch } = useContext(GlobalContext);

    // 紀錄 menu 名稱
    const handleClickMenu = (text) => {

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
                        className="menu-outer"
                    >
                        <div className="title">
                            <span>{text}</span>
                        </div>

                        <div className="sub-menus">
                            {
                                subItems.map((sub) => (

                                    <Links
                                        key={sub.key}
                                        title={sub.text}
                                        url={`/${key ? `${key}${`${(key !== 'news' && key !== 'place' && key !== 'policy') ? '/' : ''}`}` : ''}${sub.key}`}
                                        onClick={() => handleClickMenu(sub.text)}
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
