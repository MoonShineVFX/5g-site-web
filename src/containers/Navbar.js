import { useContext } from 'react';
import { styled } from '@mui/system';
import { Links } from '../components/Links';
import { GlobalContext } from '../context/global.state';

//
const navMenus = [
    {
        key: '',
        text: '關於我們',
        subItems: [
            {
                key: 'about',
                text: '關於本站',
            },
        ],
    },
    {
        key: 'news',
        text: '最新消息',
        subItems: [
            {
                key: '?page=1&cate=news',
                text: '新聞快訊',
            },
            {
                key: '?page=1&cate=newsIndustry',
                text: '產業訊息',
            },
        ],
    },
    {
        key: 'policy',
        text: '政策資源',
        subItems: [
            {
                key: 'center',
                text: '中央資源',
            },
            {
                key: 'local',
                text: '地方資源',
            },
        ],
    },
    {
        key: 'place',
        text: '場域空間',
        subItems: [
            {
                key: '?cate=5g',
                text: '5G示範場域',
            },
            {
                key: '?cate=tech',
                text: '互動科技示範場域',
            },
        ],
    },
    {
        key: '',
        text: '合作夥伴',
        subItems: [
            {
                key: 'partner?page=1&tag=all',
                text: '文化科技聯盟',
            },
        ],
    },
];

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
            transition: 'all .2s ease',
            '&:before': {
                content: '""',
                height: '100%',
                display: 'inline-block',
                verticalAlign: 'middle',
            },
            '&:hover': {
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
                                        url={`/${key ? `${key}${`${(key !== 'news' && key !== 'place') ? '/' : ''}`}` : ''}${sub.key}`}
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
