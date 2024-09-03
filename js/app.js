if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("../sw.js")
    .then((reg) => {
      console.log(reg, "ssssssssssss");
    })
    .catch((err) => {
      console.log(err, "error");
    });
}
