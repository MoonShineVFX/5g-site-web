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
            transform: 'scale(1.1)',
        },
    },
    '.thumb': {
        textAlign: 'center',
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        overflow: 'hidden',
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
const Item = ({ title, imgUrl, width, height, ...rest }) => (

    <ItemLayout
        title={title}
        className="item"
        {...rest}
    >
        <div className="thumb">
            <img
                src={imgUrl}
                width={width}
                height={height}
                alt=""
            />
        </div>
        <div className="web-line-clamp title">{title}</div>
    </ItemLayout>

);

Item.propTypes = {
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default Item;
