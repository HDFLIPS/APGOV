function goToNextPage() {
  // Replace "page2.html" with your actual next page file
  window.location.href = "page2.html";
function goToPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}
}
