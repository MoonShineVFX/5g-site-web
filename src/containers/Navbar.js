import { styled } from '@mui/system';
import { Links } from '../components/Links';

const navMenus = [
    {
        key: 'about',
        text: '關於我們',
    },
    {
        key: 'news?page=1&type=all',
        text: '最新消息',
    },
    {
        key: 'resource',
        text: '政策資源',
    },
    {
        key: 'place',
        text: '場域空間',
    },
    {
        key: 'partner?page=1&type=???',
        text: '合作夥伴',
    },
];

//
const NavMenuLayout = styled('nav')(({ theme }) => ({
    marginLeft: '40px',
    position: 'relative',
    'a': {
        textDecoration: 'none',
        color: theme.palette.bg.text,
        marginLeft: '40px',
        padding: '10px 0 10px 10px',
        opacity: .8,
        transition: 'all .5s ease',
        '&:hover': {
            opacity: 1,
        },
    },
}));

//
const Navbar = ({ ...rest }) => (

    <NavMenuLayout className="nav-menu-wrap" {...rest}>
        {
            navMenus.map(({ key, text }) => (

                <Links
                    key={key}
                    url={key}
                >
                    {text}
                </Links>

            ))
        }
    </NavMenuLayout>

);

export default Navbar;
