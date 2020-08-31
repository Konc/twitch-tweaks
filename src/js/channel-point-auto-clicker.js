console.log("Starting automated channel point clicker.");

setInterval(function () {
  if (
    document.querySelector(
      ".community-points-summary button.tw-button--success"
    ) != undefined
  ) {
    var d = new Date();
    var timeNow = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    console.log(`Clicking channel point bonus button at ${timeNow}`);
    document
      .querySelector(".community-points-summary button.tw-button--success")
      .click();
  }
}, 2000);
