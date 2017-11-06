var HttpUtil = {};
var BASE_RUL = "http://apis.juhe.cn/";
/**
 * 基于 fetch 封装的 GET请求
 * @param url
 * @param params {}
 * @param headers
 * @returns {Promise}
 */
HttpUtil.get = function (url) {
    return new Promise(function (resolve, reject) {
        fetch(BASE_RUL + url, {
            method: 'GET',
            headers: HttpUtil.addHeader(),
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                reject({status: response.status})
            }
        }).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject({status: -1});
        })
    })
}


/**
 * 基于 fetch 封装的 POST请求
 * @param url
 * @param formData
 */
HttpUtil.post = function (url, parmeas) {
    return new Promise(function (resolve, reject) {
        fetch(BASE_RUL + url, {
            method: 'POST',
            headers: HttpUtil.addHeader(),
            body: parmeas,
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                reject({status: response.status})
            }
        }).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject({status: -1});
        })
    })
}
HttpUtil.addHeader = function () {
    return {
        "type": '11',
        "driverId": 1
    }
}
export default HttpUtil;