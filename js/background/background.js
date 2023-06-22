// Generate a random ID for the new rule
const ruleId = Math.floor(Math.random() * 1000000);

// When the extension is installed or updated, remove all existing rules and add a new one
chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeNetRequest.getDynamicRules(function (rules) {
    console.log(rules)

    // Create an array of rule IDs to remove
    var ruleIdsToRemove = [];
    for (var i = 0; i < rules.length; i++) {
      ruleIdsToRemove.push(rules[i].id);
    }

    // Remove all existing rules and add a new one
    chrome.declarativeNetRequest.updateDynamicRules(
      {
        removeRuleIds: ruleIdsToRemove,
        addRules: [
          {
            id: ruleId,
            priority: 1,
            action: {
              type: "modifyHeaders",
              requestHeaders: [
                {
                  header: "Origin",
                  operation: "set",
                  value: "https://www.facebook.com",
                },
              ],
            },
            condition: {
              urlFilter: "*://www.facebook.com/*",
              resourceTypes: [
                "main_frame",
                "sub_frame",
                "stylesheet",
                "script",
                "image",
                "font",
                "object",
                "xmlhttprequest",
                "ping",
                "csp_report",
              ],
            },
          },
        ],
      },
      function () {
        console.log("Rules updated");
      }
    );

    console.log(rules)
  });
});
