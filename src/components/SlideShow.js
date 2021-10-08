import { useContext } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import {
    ArrowBackIosNew as ArrowBackIosIcon,
    ArrowForwardIos as ArrowForwardIosIcon,
} from '@mui/icons-material';
import { GlobalContext } from '../context/global.state';

const SlideShowLayout = styled('div')(() => ({
    width: '100%',
    position: 'relative',
}));

// 容器
const SlideShowContainer = styled('div', {
    name: 'slideshow-container',
})(() => ({
    '.hide': {
        display: 'none',
    },
    '.active': {
        display: 'block'
    },
    'img': {
        width: '100%',
    },
}));

// 點點
const Dots = styled('span', {
    name: 'slideshow-control-dots',
})(({ theme }) => ({
    display: 'block',
    textAlign: 'center',
    marginTop: '20px',
    '> *': {
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        display: 'inline-block',
        margin: '2px 10px',
        position: 'relative',
        cursor: 'pointer',
        '&:after': {
            content: '""',
            width: '8px',
            height: '8px',
            backgroundColor: '#58595B',
            borderRadius: '50%',
            display: 'inline-block',
            opacity: 0.25,
            position: 'absolute',
            top: 'calc(50% / 2)',
            left: 'calc(50% / 2)',
        },
    },
    '.active': {
        border: `1px solid ${theme.palette.primary.main}`,
        '&:after': {
            backgroundColor: theme.palette.primary.main,
            opacity: '1',
        },
    },
}));

// 箭頭
const Arrows = styled('span')(() => ({
    '.MuiButton-root': {
        minWidth: 'auto',
        width: '60px',
        height: '60px',
        border: '1px solid',
        borderRadius: '50%',
        padding: 0,
        position: 'absolute',
        '&:first-of-type': {
            left: '20px',
        },
        '& + .MuiButton-root': {
            right: '20px',
        },
    },
    'svg': {
        fontSize: '26px',
    },
}));

const SlideShow = ({ data, showArrow, showDot, children, ...rest }) => {

    // Context
    const {
        slideshowActive,
        globalDispatch,
    } = useContext(GlobalContext);

    // 左箭頭
    const handleArrowLeft = () => {

        globalDispatch({
            type: 'slideshow',
            payload: slideshowActive - 1 < 0 ? data.length - 1 : slideshowActive - 1,
        });

    };

    // 右箭頭
    const handleArrowRight = () => {

        globalDispatch({
            type: 'slideshow',
            payload: slideshowActive + 1 >= data.length ? 0 : slideshowActive + 1,
        });

    };

    // Dot
    const handleClickDot = (idx) => {

        globalDispatch({
            type: 'slideshow',
            payload: idx,
        });

    };

    return (

        <SlideShowLayout {...rest}>
            <SlideShowContainer>{children}</SlideShowContainer>

            {
                showDot &&
                    <Dots>
                        {
                            data.map((_, idx) => (

                                <span
                                    key={idx}
                                    className={(idx === slideshowActive) ? 'active' : 'hide'}
                                    onClick={() => handleClickDot(idx)}
                                ></span>

                            ))
                        }
                    </Dots>
            }

            {
                showArrow &&
                    <Arrows className="slideshow-control-arrows">
                        <Button
                            className="Model-y-align"
                            onClick={handleArrowLeft}
                        >
                            <ArrowBackIosIcon />
                        </Button>
                        <Button
                            className="Model-y-align"
                            onClick={handleArrowRight}
                        >
                            <ArrowForwardIosIcon />
                        </Button>
                    </Arrows>
            }
        </SlideShowLayout>

    );

};

SlideShow.defaultProps = {
    data: [],
    showDot: true,
    showArrow: false,
};

SlideShow.propTypes = {
    data: PropTypes.array,
    showDot: PropTypes.bool,
    showArrow: PropTypes.bool,
};

export default SlideShow;
