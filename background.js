console.log("bg script linked");

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    if(tab.url.indexOf('https://www.facebook.com') !== -1) {
        chrome.tabs.remove(tabId, function() { });
    }

})