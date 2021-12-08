import axios from 'axios';
import dayjs from 'dayjs';

const util = {
    /**
     * @author Betty
     * @param  {object{} || string} service - 如果是字串，則為 service.url
     *   @param {string} service.url
     *   @param {string} [service.method = 'post']
     *   @param {string} [service.dataType = 'json']
     * @param  {object{}} reqData
     * @param  {object{}} option
     * @returns {promise}
     */
    serviceProxy: (service, reqData = {}, option) => {

        // method, url 與環境設定
        const CONFIG = () => {

                let url = '';
                let method = 'post';

                if (typeof service === 'string') url = service;
                else {

                    url = service.url;
                    method = service.method;

                }

                return {
                    url: (process.env.NODE_ENV === 'development') ? `//${process.env.HOST}/api${url}` : `/api${url}`,
                    method,
                };

            },
            showErrorMesg = (message, callback) => {

                console.log(message || '出了些狀況，請找研發');
                // alert(message || '出了些狀況，請找研發');

            };

        // 回傳 promise
        return new Promise((resolve, reject) => {

            axios[CONFIG().method](CONFIG().url, reqData, { withCredentials: true, ...option })
                .then(
                    // result: 1
                    ({ data }) => {

                        resolve(data.data);

                    },
                    // result: 0
                    ({ response }) => {

                        const {
                            data: { errors },
                        } = response;

                        reject(showErrorMesg(
                            Object.keys(errors).map((key) => `${key}: ${errors[key]}`)
                        ));

                    },
                )

        });

    },

        serviceServer: ({ method = 'post', url }, reqData = {}) => {

            return axios[method](`https://${process.env.HOST}/api${url}`, reqData);

        },

    pathnameKey: (path) => path.split('/')[1] || 'index',

    /**
     * @author Betty
     * @param {string} value - 字串或元件
     * @return {string}
     */
    renderWithoutValue: (value) => value ? value : '--',

    /**
     * @author Betty
     * @param {object[]} tags - 標籤陣列
     * @return {object} - id 當 key
     */
    mappingTags: (tags) => tags.reduce((acc, { id, name }) => {

        acc[id] = name;
        return acc;

    }, {}),

    /**
     * @author Betty
     * @param {string} date - 時間
     * @return {string} - yyyy.mm.dd (dd)
     */
    dateFormat: (date) => dayjs(date).format('YYYY.MM.DD (dd)'),

};

export default util;
