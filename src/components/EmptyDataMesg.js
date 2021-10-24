import PropTypes from 'prop-types';
import { styled } from '@mui/system';

//
const WrapLayout = styled('p')({
    fontSize: '1.2em',
});

//
const EmptyDataMesg = ({ mesg, ...rest }) => <WrapLayout {...rest}>{mesg}</WrapLayout>;

EmptyDataMesg.defaultProps = {
    mesg: '目前沒有資料...',
};

EmptyDataMesg.propTypes = {
    mesg: PropTypes.string,
};

export default EmptyDataMesg;
