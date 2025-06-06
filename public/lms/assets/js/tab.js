const dashkitTab = document.querySelectorAll(".dashkit-tab");
dashkitTab.forEach((tab) => {
    const tabId = tab.getAttribute("id");
    const tabContentId = `${tabId}Content`;
    const tabBtnWrapper = document.getElementById(tabId);
    const tabPanWrapper = document.getElementById(tabContentId);
    const tabPannels = tabPanWrapper.querySelectorAll(".dashkit-tab-pane");

    const tabButtons = tabBtnWrapper.querySelectorAll(".dashkit-tab-btn");

    tabButtons.forEach((tabBtn, i) => {
        tabBtn.addEventListener("click", () => {
            const btnId = tabBtn.getAttribute("id");
            tabActivation(btnId);
        });
    });

    function tabActivation(currentTabId) {
        tabButtons.forEach((tabBtn) => {
            const currentBtnId = tabBtn.getAttribute("id");
            tabBtn.classList.remove("active");

            if (currentBtnId === currentTabId) {
                tabBtn.classList.add("active");
            }
        });

        tabPannels.forEach((tabPane) => {
            const tabPaneId = tabPane.getAttribute("data-tab");
            tabPane.classList.remove("!block");

            if (tabPaneId === currentTabId) {
                tabPane.classList.add("!block");
            }
        });
    }
});
