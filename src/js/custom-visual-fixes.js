console.log("Applying own fixes to the user interface.");

setInterval(function () {
  // Remove the ugly default hover effect
  document.querySelectorAll(".ScWrapper-uo2e2v-0").forEach((x) => x.classList.remove("ScWrapper-uo2e2v-0"));

  // Turn "following" link into "following/live"
  if (document.querySelector('a[data-a-target="following-link"]').href != "https://www.twitch.tv/directory/following/live") {
    document.querySelector('a[data-a-target="following-link"]').href = "https://www.twitch.tv/directory/following/live";
  }

}, 2000);