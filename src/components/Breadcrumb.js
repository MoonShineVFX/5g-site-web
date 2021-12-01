import { useContext } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Links } from './Links';
import { GlobalContext } from '../context/global.state';
import utilConst from '../utils/util.const';

const {
    textConfig: {
        text_breadcrumb_home,
    },
} = utilConst;

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
    '.level2': {
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
                <Links url="/" title={text_breadcrumb_home}>{text_breadcrumb_home}</Links> / {menu.level1Link ? <Links url={menu.level1Link} title={menu.level1}>{menu.level1}</Links> : <span className="level1">{menu.level1}</span>} {menu.level2 ? ` / ` : ''} <span className="level2">{menu.level2}</span>
            </div>
        </BreadcrumbLayout>

    );

};

Breadcrumb.propTypes = {
    children: PropTypes.any,
};

export default Breadcrumb;
