var axios = require('axios');

const main_url = "https://api.github.com";

export const get = function(url) {
    var complete_url = main_url + url;
    var encodedURI = window.encodeURI(complete_url);

    return axios.get(encodedURI);
};
