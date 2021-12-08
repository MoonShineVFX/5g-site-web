const utilConst = {
    navMenus: [
        {
            key: '',
            text: '關於我們',
            subItems: [
                {
                    key: 'about',
                    text: '關於本站',
                },
            ],
        },
        {
            key: 'news',
            text: '最新消息',
            subItems: [
                {
                    key: '?page=1&cate=news',
                    text: '新聞快訊',
                },
                {
                    key: '?page=1&cate=newsIndustry',
                    text: '產業訊息',
                },
            ],
        },
        {
            key: 'policy',
            text: '政策資源',
            subItems: [
                {
                    key: '?page=1&cate=center',
                    text: '中央資源',
                },
                {
                    key: '?page=1&cate=local',
                    text: '地方資源',
                },
            ],
        },
        {
            key: 'place',
            text: '場域空間',
            subItems: [
                {
                    key: '?type=5g',
                    text: '5G示範場域',
                },
                {
                    key: '?type=tech',
                    text: '互動科技示範場域',
                },
            ],
        },
        {
            key: '',
            text: '策略夥伴',
            subItems: [
                {
                    key: 'partner?page=1&tag=all',
                    text: '夥伴介紹',
                },
            ],
        },
    ],
    placeConfig: {
        '5g': '5G示範場域',
        'tech': '互動科技示範場域',
    },
    newsConfig: {
        news: '新聞快訊',
        newsIndustry: '產業訊息',
    },
    policyConfig: {
        center: '中央資源',
        local: '地方資源',
    },
    textConfig: {
        text_breadcrumb_home: '首頁',
        text_contact_us: '聯絡我們',
        text_sitemap: '網站導覽',
        text_privacy: '隱私權政策',
        text_security: '資安說明',
        text_search_all: '站內搜尋',
    },
};

export default utilConst;
