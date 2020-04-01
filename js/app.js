window.addEventListener("load", () => {
  console.log("sup");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(meep => {
      let location = document.querySelector(".h1");
      let lat = Math.floor(meep.coords.latitude);
      let long = Math.floor(meep.coords.longitude);
      console.log(location);

      location.textContent =
        "Yo, your current lattitude is " +
        lat +
        ", and your current longitude is " +
        long +
        ".";
    });
  }
});
