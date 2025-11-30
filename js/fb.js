/* ================================================================
   fb.js – Frame Initializer & Navigation Handler
   Purpose:
     - Redirects active tab to mbasic.facebook.com
     - Then loads html/frame.html into that same tab
     - Utility: Extract hostname
     - Auto-run start() on load

   NOTE:
     * No code changes.
     * No logic removed.
     * Only organized & documented.
================================================================ */


/* ================================================================
   1. GLOBALS
================================================================ */

let tabId;


/* ================================================================
   2. MAIN ENTRY FUNCTION
   Triggered on window.onload
================================================================ */

function start() {
    // FAP.getElementById("start").addEventListener("click", function() { updateUrl(); });

    const URL = "html/frame.html";

    // Close popup window before updating tab
    window.close();

    chrome.tabs.update(tabId, { url: URL }, function () {
        chrome.tabs.onUpdated.addListener(function listener(tabId, tabInfo) {

            if (tabInfo.status === "complete") {
                // Frame loaded
                // (No internal logic provided)
            }

        }); // onUpdated listener for frame.html

    }); // update tab to frame.html
}


/* ================================================================
   3. LOGIN REDIRECT → LOAD FRAME
   Step 1: Open mbasic.facebook.com
   Step 2: Replace with frame.html
================================================================ */

function updateUrl() {

    chrome.windows.getLastFocused(null, function () {

        chrome.tabs.query({ active: true, highlighted: true }, function (tab) {

            tabId = tab[0].id;

            // Step 1: Redirect to mbasic
            chrome.tabs.update(tabId, { url: "https://mbasic.facebook.com" }, function () {

                chrome.tabs.onUpdated.addListener(function listener(tabId, tabInfo) {

                    if (tabInfo.status === "complete") {

                        // Step 2: Replace with frame.html
                        const URL = "html/frame.html";
                        window.close();

                        chrome.tabs.update(tabId, { url: URL }, function () {

                            chrome.tabs.onUpdated.addListener(function listener(tabId, tabInfo) {

                                if (tabInfo.status === "complete") {
                                    // Frame loaded
                                }

                            }); // onUpdated frame load

                        }); // update tab to frame.html

                    } // if complete

                }); // onUpdated mbasic

            }); // update to mbasic

        }); // tabs.query

    }); // getLastFocused

} // updateUrl()



/* ================================================================
   4. HOSTNAME PARSER
   Utility function to safely extract hostname from a URL
================================================================ */

function getHostName(hostName) {

    const match = hostName.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);

    if (match !== null &&
        match.length > 2 &&
        typeof match[2] === "string" &&
        match[2].length > 0) 
    {
        return match[2];
    }

    return null;
}


/* ================================================================
   5. INIT – Execute start()
================================================================ */

window.onload = start;
