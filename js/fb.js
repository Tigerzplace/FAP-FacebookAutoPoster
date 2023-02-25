let tabId;


function start(){
	//FAP.getElementById("start").addEventListener("click",function(){updateUrl();});

	var URL = "html/frame.html";
											window.close();
										
											
											chrome.tabs.update(tabId , { url: URL }, function () {
											// current link from global url == link
											chrome.tabs.onUpdated.addListener(function listener (tabId, tabInfo) {
												
													if (tabInfo.status === 'complete' ) {
														
														
														
													}
												}); //onUpdate frame.html
												
											}); // update link frame.html


}

function updateUrl(){

	chrome.windows.getLastFocused(null, function (){
			chrome.tabs.query( { 'active' : true, 'highlighted':true}, function (tab){ 
				tabId =  tab[0].id;
				chrome.tabs.update(tabId , { url: "https://mbasic.facebook.com" }, function () {
					// current link from global url == link
					
					chrome.tabs.onUpdated.addListener(function listener (tabId, tabInfo) {
						
							if (tabInfo.status === 'complete' ) {
							
							
											var URL = "html/frame.html";
											window.close();
										
											
											chrome.tabs.update(tabId , { url: URL }, function () {
											// current link from global url == link
											chrome.tabs.onUpdated.addListener(function listener (tabId, tabInfo) {
												
													if (tabInfo.status === 'complete' ) {
														
														
														
													}
												}); //onUpdate frame.html
												
											}); // update link frame.html
										
							}
					}); //onUpdate mbasic
					
				}); // update link mbasic.facebook.com
				
	}); //tabs query
	});  // get last focus
} // updateURL()



function getHostName(hostName) {
	
    var match = hostName.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
		
		return match[2];
		
    }
    else {
		
        return null;
    }
}
window.onload = start;


