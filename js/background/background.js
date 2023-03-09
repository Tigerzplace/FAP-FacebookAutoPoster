
const ruleId = Math.floor(Math.random() * 1000000);
chrome.runtime.onInstalled.addListener(function () {
	chrome.declarativeNetRequest.updateDynamicRules({
		addRules: [{
			id: ruleId,
			priority: 1,
			action: {
				type: "modifyHeaders",
				requestHeaders: [
					{ header: 'Origin', value: 'https://facebook.com', operation: 'set' }
				]
			},
			condition: {
				urlFilter: "*://*/*",
				resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report"],
			}
		}]
	}, function () {
		console.log("Rules updated");
	});
});
