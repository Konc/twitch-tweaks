console.log("Applying own fixes to the user interface.");

setInterval(function () {
  var targetTags = document.querySelectorAll(".tw-hover-accent-effect");

  for (let tag of targetTags) {
    tag.classList.remove("tw-hover-accent-effect");
  }
}, 2000);
