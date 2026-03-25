function showTab(tabId) {
  // Hide all tabs
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => tab.classList.remove("active"));

  // Show selected tab
  const activeTab = document.getElementById(tabId);
  activeTab.classList.add("active");
}

alert("JS is working");
