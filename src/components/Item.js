import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Links } from './Links';

//
const ItemLayout = styled(Links)(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    border: `1px solid ${theme.palette.primary.main}`,
    borderBottomWidth: '3px',
    '&:hover': {
        'img': {
            transform: 'translateY(-50%) scale(1.3)',
        },
    },
    '.thumb': {
        height: '204px',
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        position: 'relative',
        overflow: 'hidden',
    },
    'img': {
        height: '100%',
        margin: '0 auto',
        position: 'absolute',
        left: '0',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        transition: 'all .75s ease',
    },
    '.title': {
        fontWeight: 'normal',
        margin: 0,
        padding: '20px 24px',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2em',
            padding: '20px',
        },
    },
}));

//
const Item = ({ title, imgUrl, ...rest }) => (

    <ItemLayout className="item" {...rest}>
        <div className="thumb">
            <img src={imgUrl} alt={title} />
        </div>
        <h2 className="web-line-clamp title">{title}</h2>
    </ItemLayout>

);

Item.propTypes = {
    title: PropTypes.string,
    imgUrl: PropTypes.string,
};

export default Item;
