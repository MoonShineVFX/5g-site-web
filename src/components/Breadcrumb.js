import { useContext } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { styled } from '@mui/system';
import { Links } from './Links';
import { GlobalContext } from '../context/global.state';

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
}));

const Breadcrumb = ({ children, ...rest }) => {

    // Router
    const router = useRouter();

    // Context
    const { page } = useContext(GlobalContext);

    console.log('router:', router)

    return (

        <BreadcrumbLayout
            className="breadcrumb"
            {...rest}
        >
            <div className="web-container">
                <Links url="/">首頁</Links> / {page} / <span></span>
            </div>
        </BreadcrumbLayout>

    );

};

Breadcrumb.propTypes = {
    children: PropTypes.any,
};

export default Breadcrumb;
