import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { ArrowForwardIos as ArrowForwardIosIcon } from '@mui/icons-material';

const ButtonLayout = styled(Button)({
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
    },
    'svg': {
        fontSize: '1.3em',
        verticalAlign: 'middle',
        marginRight: '-4px',
    },
});

const Buttons = ({ outline, text, children }) => (

    <ButtonLayout
        {...outline && { variant: 'outlined' }}
    >
        <div>{text ? text : children}</div>
        <ArrowForwardIosIcon />
    </ButtonLayout>

);

Buttons.defaultProps = {
    text: '更多消息',
    outline: true,
};

Buttons.propTypes = {
    text: PropTypes.string,
    children: PropTypes.any,
    outline: PropTypes.bool,
};

export default Buttons;
