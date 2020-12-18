console.log("Applying own fixes to the user interface.");

setInterval(function () {
  document
    .querySelectorAll(".tw-root--hover")
    .forEach((x) => x.classList.remove("tw-root--hover"));
}, 2000);
