function getOriginFromUrl(inp) {
    try {
        var url = new URL(inp);
        var full = url.protocol + '//' + url.hostname + (url.port ? ':' + url.port : '');
        return full;
    } catch (e) {
        return "";
    }
}

var unifiedUserAgent='Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36';

// for changing origin of requests created by the extension
// itself not for requests initiated by others
// requirement to comply with :
// https://www.chromium.org/Home/chromium-security/extension-content-script-fetches
// todo : modify only post requests
chrome.webRequest.onBeforeSendHeaders.addListener(
    function (info) {
        var method = info.method.toLowerCase();
        if (method == 'post' || method == 'put' || method == 'delete' || method == 'patch') {
            if (info.initiator == 'chrome-extension://' + chrome.runtime.id) {
                console.log('info is');
                console.log(info);
                var originSet = null;
                var refererSet = null;
                var userAgentSet = null;
                for (var index = 0; index < info.requestHeaders.length; index++) {
                    if (info.requestHeaders[index].name.toLowerCase() === 'origin') {
                        info.requestHeaders[index].value = getOriginFromUrl(info.url);
                        originSet = true;
                    }
                    if (info.requestHeaders[index].name.toLowerCase() === 'referer') {
                        info.requestHeaders[index].value = getOriginFromUrl(info.url);
                        refererSet = true;
                    }
                    if (info.requestHeaders[index].name.toLowerCase() === 'user-agent') {
                        info.requestHeaders[index].value = unifiedUserAgent;
                        userAgentSet = true;
                    }
                }
                if (!originSet) {
                    info.requestHeaders.push({
                        'name': 'Origin',
                        'value': getOriginFromUrl(info.url),
                    });
                }
                if (!refererSet) {
                    info.requestHeaders.push({
                        'name': 'Referer',
                        'value': getOriginFromUrl(info.url),
                    });
                }
                if (!userAgentSet) {
                    info.requestHeaders.push({
                        'name': 'User-Agent',
                        'value': unifiedUserAgent,
                    });
                }
                return {requestHeaders: info.requestHeaders};
            }
        }
    },
    {urls: ['*://*.facebook.com/*']},
    ['blocking', 'requestHeaders', "extraHeaders"]
);