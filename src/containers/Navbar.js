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

const NavMenuLayout = styled('nav', {
    name: 'nav-menu-wrap',
})(({ theme }) => ({
    marginLeft: '40px',
    'a': {
        textDecoration: 'none',
        color: theme.palette.bg.text,
        margin: '20px',
        padding: theme.spacing(2),
        opacity: .8,
        transition: 'all .5s ease',
        '&:hover': {
            opacity: 1,
        },
    },
}));

//
const Navbar = () => (

    <NavMenuLayout>
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
