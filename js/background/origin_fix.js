function getOriginFromUrl(inp) {
    try {
        var url = new URL(inp);
        var full = url.protocol + '//' + url.hostname + (url.port ? ':' + url.port : '');
        return full;
    } catch (e) {
        return "";
    }
}



// Define the rules for blocking and modifying requests
const rules = [
    {
        id: '1',
        priority: 1,
        action: {
            type: 'modifyHeaders',
            responseHeaders: [
                { header: 'origin', value: 'https://facebook.com', operation: 'set' },
                { header: 'Referer', value: 'https://facebook.com', operation: 'set' },
                { header: 'User-Agent', value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36', operation: 'set' }
            ]
        },
        condition: {
            domains: ['*://*.facebook.com/*', '*://*.www.facebook.com/*'],
            resourceTypes: ['xmlhttprequest'],
            requestHeaders: [
                { name: 'origin', value: 'https://web.facebook.com', operator: 'set' },
                { name: 'referer', value: 'https://web.facebook.com', operator: 'set' },
                { name: 'user-agent', value: '', operator: 'missing' }
            ]
        }
    }
];



const domains = rules[0].condition.domains;
const ruleIdsToRemove = rules.map(rule => rule.id);
const urlFilter = domains.map(domain => `*://${domain}/*`).join(',');

chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: ruleIdsToRemove.map(id => parseInt(id)),
    addRules: rules.map(rule => ({
        id: parseInt(rule.id),
        priority: rule.priority,
        action: rule.action,
        condition: {
            urlFilter: urlFilter,
            resourceTypes: rule.condition.resourceTypes,
            domains: rule.condition.domains,
        }
    }))
}, () => {
    console.log('Rules updated');
});
