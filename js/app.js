// if (navigator.serviceWorker) {
//   navigator.serviceWorker
//     .register("../sw.js")
//     .then((reg) => {
//       console.log(reg, "ssssssssssss");
//     })
//     .catch((err) => {
//       console.log(err, "error");
//     });

//   Notification.requestPermission().then((result) => {
//     if (result === "granted") {
//       console.log("Notification permission granted.");
//     }
//   });

//   document.getElementById("notifyButton").addEventListener("click", () => {
//     if (navigator.serviceWorker) {
//       navigator.serviceWorker.ready.then((registration) => {
//         registration.showNotification("Hello!", {
//           body: "This is your notification!",
//           icon: "./icon512_rounded.png",
//           vibrate: [200, 100, 200],
//           tag: "vibration-sample",
//         });
//       });
//     }
//   });
// }
// =================
// Main Script
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("./sw.js") // Ensure this path is correct
    .then((reg) => {
      console.log("Service Worker Registered", reg);
    })
    .catch((err) => {
      console.log("Service Worker Registration Failed", err);
    });

  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      console.log("Notification permission granted.");
    } else {
      console.log("Notification permission denied.");
    }
  });

  document.getElementById("notifyButton").addEventListener("click", () => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.ready.then((registration) => {
        registration
          .showNotification("Hello!", {
            body: "This is your notification!",
            icon: "./icon512_rounded.png",
            vibrate: [200, 100, 200],
            tag: "vibration-sample",
          })
          .catch((error) => {
            console.log("Notification failed: ", error);
          });
      });
    }
  });
}
