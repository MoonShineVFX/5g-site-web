import { useContext, useEffect } from 'react';
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
const SlideShowContainer = styled('div')(({ theme }) => ({
    '.hide': {
        display: 'none',
    },
    '.active': {
        display: 'block'
    },
}));

// 點點
const DotsLayout = styled('span')(({ theme }) => ({
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
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
    },
    '.active': {
        border: `1px solid ${theme.palette.primary.main}`,
        '&:after': {
            backgroundColor: theme.palette.primary.main,
            opacity: '1',
        },
    },
    [theme.breakpoints.down('md')]: {
        marginTop: '10px',
    },
}));

// 箭頭
const ArrowsLayout = styled('span')({
    '.MuiButton-root': {
        minWidth: 'auto',
        marginTop: '-30px',
        padding: '4px',
        position: 'absolute',
        '&:first-of-type': {
            left: '-10px',
        },
        '& + .MuiButton-root': {
            right: '-10px',
        },
    },
    'svg': {
        fontSize: '3.3em',
    },
});

//
const SlideShow = ({ data, showArrow, showDot, interval, children, ...rest }) => {

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

    // 自動輪播
    useEffect(() => {
        const timer = setTimeout(() => {
            handleArrowRight();  // 或者你可以直接使用 globalDispatch 來更新 slideshowActive
        }, interval);

        return () => clearTimeout(timer);  // 清除定時器
    }, [slideshowActive, interval]);  // 當 slideshowActive 或 interval 變更時重新設置定時器

    return (

        <SlideShowLayout className="slide-show" {...rest}>
            <SlideShowContainer>{children}</SlideShowContainer>

            {
                showDot &&
                    <DotsLayout className="slideshow-control-dots">
                        {
                            data.map((_, idx) => (

                                <span
                                    key={idx}
                                    className={`dot ${(idx === slideshowActive) ? 'active' : 'hide'}`}
                                    onClick={() => handleClickDot(idx)}
                                />

                            ))
                        }
                    </DotsLayout>
            }

            {
                showArrow &&
                    <ArrowsLayout className="slideshow-control-arrows">
                        <Button
                            name="prev"
                            aria-label="前一個"
                            value="前一個"
                            className="web-y-align button-arrow-left"
                            onClick={handleArrowLeft}
                        >
                            <ArrowBackIosIcon />
                        </Button>
                        <Button
                            name="next"
                            aria-label="後一個"
                            value="後一個"
                            className="web-y-align button-arrow-right"
                            onClick={handleArrowRight}
                        >
                            <ArrowForwardIosIcon />
                        </Button>
                    </ArrowsLayout>
            }
        </SlideShowLayout>

    );

};

SlideShow.defaultProps = {
    data: [],
    showDot: true,
    showArrow: true,
    interval: 3000,
};

SlideShow.propTypes = {
    data: PropTypes.array,
    showDot: PropTypes.bool,
    showArrow: PropTypes.bool,
    children: PropTypes.any,
};

export default SlideShow;
