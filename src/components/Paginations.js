import PropTypes from 'prop-types';
import { Pagination } from '@mui/material';
import { styled } from '@mui/system';

//
const PaginationLayout = styled(Pagination)(({ theme }) => ({
    margin: '40px 0',
    '.MuiPagination-ul': {
        justifyContent: 'center',
    },
    '.MuiPaginationItem-root': {
        color: theme.palette.text.primary,
        opacity: 0.6,
    },
    'svg': {
        fontSize: '3em',
    },
}));

//
const Paginations = ({
    length,
    perPage,
    currPage,
    onChange,
    ...rest
}) => (

    <PaginationLayout
        page={currPage}
        count={Math.ceil(length / perPage)}
        size="large"
        onChange={onChange}
        {...rest}
    />

);

Paginations.defaultProps = {
    currPage: 1,
    perPage: 12, // 一頁 12 筆
};

Paginations.propTypes = {
    length: PropTypes.number,
    perPage: PropTypes.number,
    currPage: PropTypes.number,
    showFirstButton: PropTypes.bool,
    showLastButton: PropTypes.bool,
};

export default Paginations;
