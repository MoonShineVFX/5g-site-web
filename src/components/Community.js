import { Fragment, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
    FacebookShareButton,
    FacebookIcon,
    LineShareButton,
    LineIcon,
} from 'react-share';

import { Snackbar } from '@mui/material';
import { styled } from '@mui/system';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import FontIcon from './FontIcon';

// 社群 icon
const socials = [
    {
        key: 'fb',
        Icon: FacebookIcon,
        Component: FacebookShareButton,
    },
    {
        key: 'line',
        Icon: LineIcon,
        Component: LineShareButton,
    },
    {
        key: 'copy',
        Icon: faLink,
    },
];

//
const SocialsLayout = styled('span')(({ theme }) => ({
    fontSize: '1.6em',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    '.item-share': {
        margin: '0 10px',
        padding: '2px',
    },
    'svg': {
        verticalAlign: 'middle',
    },
}));

//
const Community = ({ title, shareUrl, ...rest }) => {

    // Ref
    const copyInputRef = useRef(null);

    // State
    const [copyState, setCopyState] = useState('');
    const [success, setSuccess] = useState(false);

    // 複製
    const copyToClipboard = (copy) => {

        setCopyState(copy);

        // State 為非同步更新，需給 defer 來延遲以下行為
        setTimeout(() => {

            copyInputRef.current.select();

            try {

                document.execCommand('copy');
                console.log('複製成功');

            }
            catch {

                console.log('複製失敗');

            }

        }, 300);

    };

    // 分享按鈕，呼叫裝置內建
    const handleShareButton = (key) => {

        console.log('click:', key);

        let url = shareUrl;

        if (window.navigator.share) window.navigator.share({ title, url });
        else copyToClipboard(url);

    };

    return (

        <Fragment>
            <SocialsLayout className="socials" {...rest}>
                <input
                    type="text"
                    style={{
                        position: 'absolute',
                        top: '-99999px'
                    }}
                    value={copyState}
                    ref={copyInputRef}
                    onChange={() => {}}
                />

                {
                    socials.map(({ key, Icon, Component }) => (

                        (key !== 'copy') ? (

                            <Component
                                key={key}
                                quote={title}
                                url={shareUrl}
                                // onClick={() => handleShareButton(key)}
                                className="item-share"
                            >
                                <Icon size={30} borderRadius={8} />
                            </Component>

                        ) : (

                            <span
                                key={key}
                                onClick={() => handleShareButton(key)}
                                className="item-share"
                            >
                                <FontIcon icon={Icon} />
                            </span>

                        )

                    ))
                }
            </SocialsLayout>

            {
                success &&
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        open={success}
                        // onClose={handleClose}
                        message={`複製${success ? '成功' : '失敗'}`}
                        autoHideDuration={500}
                        // key={vertical + horizontal}
                    />
            }
        </Fragment>

    );

};

Community.propTypes = {
    title: PropTypes.string.isRequired,
    shareUrl: PropTypes.string.isRequired,
};

export default Community;
