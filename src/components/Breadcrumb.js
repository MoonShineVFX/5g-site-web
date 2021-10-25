import { useContext } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Links } from './Links';
import { GlobalContext } from '../context/global.state';

//
const BreadcrumbLayout = styled('div')(({ theme }) => ({
    backgroundColor: '#D2D2D2',
    cursor: 'default',
    '*': {
        fontSize: '0.9em',
        color: '#FFF',
    },
    '.web-container': {
        padding: '8px 0',
    },
    'span': {
        color: theme.palette.primary.main,
    },
    [theme.breakpoints.down('md')]: {
        padding: '0 20px',
    },
}));

//
const Breadcrumb = ({ children, ...rest }) => {

    // Context
    const { menu } = useContext(GlobalContext);

    return (

        <BreadcrumbLayout
            className="breadcrumb"
            {...rest}
        >
            <div className="web-container">
                <Links url="/">首頁</Links> / {menu.level1Link ? <Links url={menu.level1Link}>{menu.level1}</Links> : menu.level1} / <span>{menu.level2}</span>
            </div>
        </BreadcrumbLayout>

    );

};

Breadcrumb.propTypes = {
    children: PropTypes.any,
};

export default Breadcrumb;