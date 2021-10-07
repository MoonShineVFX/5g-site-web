import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { ButtonLink } from './Links';

//
const ShowMoreButtonLayout = styled('div')(({ theme }) => ({
    textAlign: 'center',
    marginTop: '60px',
    [theme.breakpoints.down('768')]: {
        marginTop: '30px',
    },
}));

//
const ShowMoreButton = ({ url, newPage, ...rest }) => (

    <ShowMoreButtonLayout {...rest}>
        <ButtonLink url={url} newPage={newPage} />
    </ShowMoreButtonLayout>

);

ShowMoreButton.defaultProps = {
    url:'',
    newPage: false,
};

ShowMoreButton.propTypes = {
    url: PropTypes.string,
    newPage: PropTypes.bool,
};

export default ShowMoreButton;
