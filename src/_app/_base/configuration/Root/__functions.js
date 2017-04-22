const googleAnalyticsSendPageView = function() {
    window.ga('send', 'pageview', window.location.pathname);
}

export const handleRouterUpdate = function() {
    googleAnalyticsSendPageView();
}
