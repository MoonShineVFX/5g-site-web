import { GlobalStyles, Grid } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../utils/theme';
import { Links } from '../Links';

const styles = {
    // 'main > div > section': {
    //     marginBottom: '100px',
    //     padding: '0 10px',
    //     '.section-title': {
    //         marginBottom: '80px',
    //     },
    // },
    // [theme.breakpoints.down('md')]: {
    //     'main > div > section': {
    //         marginBottom: '10px',
    //         padding: '20px',
    //         '.section-title': {
    //             marginBottom: '40px',
    //         },
    //     },
    // },
};

// Partner Style
const partnerStyles = <GlobalStyles styles={styles} />;

const ShowMoreButtonLayout = styled('div')(({ theme }) => ({
    textAlign: 'center',
    marginTop: '60px',
    [theme.breakpoints.down('768')]: {
        marginTop: '30px',
    },
}));

export {
    partnerStyles,
    ShowMoreButtonLayout,
};
