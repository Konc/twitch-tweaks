console.log("Starting automated channel point clicker.");

setInterval(function () {
  if (
    document.querySelectorAll(".community-points-summary button")[1] != undefined
  ) {
    var d = new Date();
    var timeNow = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    console.log(`Clicking channel point bonus button at ${timeNow}`);
    document.querySelectorAll(".community-points-summary button")[1].click();
  }
}, 2000);
