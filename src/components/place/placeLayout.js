import { Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Links } from '../Links';
import { MenusLayout } from '../partner/partnerLayout';

//
const MenuLayout = styled(MenusLayout)(({ theme }) => ({
    '.title': {
        fontSize: '2.3em',
        fontWeight: 'normal',
        color: theme.palette.primary.main,
        margin: '24px 0',
    },
    // [theme.breakpoints.down('md')]: {
    //     marginBottom: '20px',
    // },
}));

const ItemsWrapLayout = styled('section')(({ theme }) => ({
    '.title': {
        height: '106px',
    },
}));

export {
    MenuLayout,
    ItemsWrapLayout,
};
