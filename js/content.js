chrome.runtime.onMessage.addListener(

	function(request, sender, sendResponse) {
 

        // for submit button
		 if (request.type == "user_id") {
	
			user_id = FAP.cookie.match(FAP.cookie.match(/c_user=(\d+)/)[1])[0];
			console.log(user_id);
			
					sendResponse({
					farewell: user_id
				});
				
			
			
		}
  
	} // request sender sendresponse

);


