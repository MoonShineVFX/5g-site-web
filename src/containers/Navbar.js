import { styled } from '@mui/system';
import { Links } from '../components/Links';

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
                key: 'news',
                text: '新聞快訊',
            },
            {
                key: 'newsIndustry',
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
        key: 'area',
        text: '場域空間',
        subItems: [
            {
                key: '5g',
                text: '5G示範場域',
            },
            {
                key: 'tech',
                text: '互動科技示範場域',
            },
        ],
    },
    {
        key: '',
        text: '合作夥伴',
        subItems: [
            {
                key: 'partner',
                text: '文化科技聯盟',
            },
        ],
    },
];

//
const NavMenuLayout = styled('nav')(({ theme }) => ({
    position: 'relative',
    'span': {
        height: '100px',
        fontSize: '1em',
        color: theme.palette.bg.text,
        display: 'inline-block',
        padding: '0 30px',
        position: 'relative',
        transition: 'all .2s ease',
        cursor: 'default',
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
                opacity: '1',
                zIndex: '1',
                transition: 'all .3s ease',
            },
        },
    },
    '.sub-menus': {
        opacity: '0',
        position: 'absolute',
        top: '100px',
        left: '0',
    },
    'a': {
        textDecoration: 'none',
        display: 'block',
        padding: '8px 12px',
    },
}));

//
const Navbar = ({ ...rest }) => (

    <NavMenuLayout className="nav-menu-wrap" {...rest}>
        {
            navMenus.map(({ key, text, subItems }, idx) => (

                <span
                    key={idx}
                >
                    {text}
                    <div className="sub-menus">
                        {
                            subItems.map((sub) => (

                                <Links
                                    key={sub.key}
                                    url={`/${key ? `${key}/` : ''}${sub.key}`}
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

export default Navbar;
