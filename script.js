function showTab(tabId) {
  // Hide all tabs
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => tab.classList.remove("active"));

  // Show selected tab
  const activeTab = document.getElementById(tabId);
  activeTab.classList.add("active");
}

function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tabs button");

  tabs.forEach(tab => tab.classList.remove("active"));
  buttons.forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");

  event.target.classList.add("active");
}
