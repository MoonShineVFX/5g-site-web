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
const ShowMoreButton = ({ url, title, newPage, ...rest }) => (

    <ShowMoreButtonLayout {...rest}>
        <ButtonLink
            url={url}
            newPage={newPage}
            title={title}
        />
    </ShowMoreButtonLayout>

);

ShowMoreButton.defaultProps = {
    url:'',
    newPage: false,
    title: '更多消息',
};

ShowMoreButton.propTypes = {
    url: PropTypes.string,
    newPage: PropTypes.bool,
    title: PropTypes.string,
};

export default ShowMoreButton;
