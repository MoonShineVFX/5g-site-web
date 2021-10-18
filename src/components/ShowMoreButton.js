import PropTypes from 'prop-types';
import { ButtonLink } from './Links';
import { styled } from '@mui/system';

//
const ShowMoreButtonLayout = styled('div')(({ theme }) => ({
    textAlign: 'center',
    marginTop: '60px',
    [theme.breakpoints.down('768')]: {
        marginTop: '30px',
    },
}));

//
const ShowMoreButton = ({ url, ...rest }) => (

    <ShowMoreButtonLayout {...rest}>
        <ButtonLink url={url} />
    </ShowMoreButtonLayout>

);

ShowMoreButton.propTypes = {
    url:'',
};

ShowMoreButton.propTypes = {
    url: PropTypes.string,
};

export default ShowMoreButton;
