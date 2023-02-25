chrome.runtime.onConnect.addListener(function (externalPort)  {
	externalPort.onDisconnect.addListener(function() {
							chrome.browserAction.setBadgeBackgroundColor({color: "#bb1511"});
							chrome.browserAction.setBadgeText({text: "X"});
							
							setTimeout (function (){
								chrome.browserAction.setBadgeText({text: "--"});
							},3000);
	});
}); 





