import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { ArrowForwardIos as ArrowForwardIosIcon } from '@mui/icons-material';

const ButtonLayout = styled(Button)(({ theme }) => ({
    minWidth: '140px',
    minHeight: '36px',
    borderRadius: '7px',
    'div': {
        textAlign: 'left',
        flex: '1',
    },
    '.MuiButton-endIcon': {
        textAlign: 'right',
        display: 'inline-block',
        flex: '0 0 20%',
        'svg': {
            fontSize: '18px',
            verticalAlign: 'middle',
        },
    },
}));

const Buttons = ({ text, children }) => (

    <ButtonLayout
        variant="outlined"
        endIcon={<ArrowForwardIosIcon />}
    >
        <div>{text ? text : children}</div>
    </ButtonLayout>

);

Buttons.defaultProps = {
    text: '更多消息',
};

Buttons.propTypes = {
    text: PropTypes.string,
    children: PropTypes.any,
};

export default Buttons;
