setInterval(function () {
  raidChecker();
}, 30000);

function raidChecker() {
  let url = document.location.href;

  if (url.includes("?referrer=raid")) {
    document.location.href = url.replace("?referrer=raid", "");
  }
}
window.addEventListener("hashchange", raidChecker, false);
