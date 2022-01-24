import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { ArrowForwardIos as ArrowForwardIosIcon } from '@mui/icons-material';
import { styled } from '@mui/system';

//
const ShowMoreButtonLayout = styled('div')(({ theme }) => ({
    textAlign: 'center',
    marginTop: '60px',
    '.MuiButton-endIcon': {
        marginLeft: '36px',
    },
    [theme.breakpoints.down('768')]: {
        marginTop: '30px',
    },
}));

//
const ShowMoreButton = ({ url, title, ...rest }) => {

    // Router
    const router = useRouter();

    return (

        <ShowMoreButtonLayout {...rest}>
            <Button
                variant="outlined"
                endIcon={<ArrowForwardIosIcon />}
                onClick={() => router.push(url)}
                name="showMore"
                aria-label={title}
                value={title}
            >
                更多消息
            </Button>
        </ShowMoreButtonLayout>

    );

};

ShowMoreButton.defaultProps = {
    url:'',
    title: '更多消息',
};

ShowMoreButton.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
};

export default ShowMoreButton;
