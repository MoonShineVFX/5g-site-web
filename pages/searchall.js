import { Fragment, useContext, useEffect } from 'react';
import { GlobalStyles } from '@mui/material';
import theme from '../src/utils/theme';
import HeadTag from '../src/containers/HeadTag';
import { GlobalContext } from '../src/context/global.state';
import useQuery from '../src/utils/useQuery';
import utilConst from '../src/utils/util.const';

const { textConfig: { text_search_all } } = utilConst;
const styles = {
    'body': {
        backgroundColor: '#FFF',
    },
    '.breadcrumb .level1': {
        color: theme.palette.primary.main,
    },
};

//
const SearchAll = () => {

    // Router
    const query = useQuery();

    // Context
    const { menu, globalDispatch } = useContext(GlobalContext);

    useEffect(() => {

        if (!query) return;

        globalDispatch({
            type: 'menu',
            payload: {
                ...menu,
                level1: text_search_all,
                level2: '',
                level1Link: '',
            },
        });

        globalDispatch({ type: 'sidenav', payload: false });
        globalDispatch({ type: 'search_box', payload: { visible: false, value: '' } });

    }, []);

    // Google search engine init
    useEffect(() => {

        (function () {
            const cx = 'bcabe06a1cb63ec85';
            const gcse = document.createElement('script');

            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;

            const s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
        })();

    }, []);

    return (

        <Fragment>
            <GlobalStyles styles={styles} />
            <HeadTag title={text_search_all} />

            <section>
                <div className="gcse-search" queryparametername="query"></div>
            </section>
        </Fragment>

    );

};

export default SearchAll;
