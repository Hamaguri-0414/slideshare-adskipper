// Generic helper function to validate URL based on regular expression
function isValidUrl(url, regex) {
    return regex.test(url);
}

// タブが更新される度にチェックする
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        const pageUrlConditions = {
            hostEquals: "www.slideshare.net",
            pathRegex: new RegExp("/.*\\.html"),
        };

        if (
            pageUrlConditions.hostEquals === new URL(tab.url).host &&
            isValidUrl(tab.url, pageUrlConditions.pathRegex)
        ) {
            // Chrome アクションを表示
            chrome.action.show(tabId);
        }
    }
});

// 初回インストール時にステータスを確認
chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
            const pageUrlConditions = {
                hostEquals: "www.slideshare.net",
                pathRegex: new RegExp("/.*\\.html"),
            };

            if (
                pageUrlConditions.hostEquals === new URL(tab.url).host &&
                isValidUrl(tab.url, pageUrlConditions.pathRegex)
            ) {
                // Chrome アクションを表示
                chrome.action.show(tab.id);
            }
        });
    });
});
