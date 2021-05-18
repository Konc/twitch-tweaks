console.log("Applying own fixes to the user interface.");

setInterval(function () {
  // Remove the ugly default hover effect
  document.querySelectorAll(".ScWrapper-uo2e2v-0").forEach((x) => x.classList.remove("ScWrapper-uo2e2v-0"));
}, 2000);