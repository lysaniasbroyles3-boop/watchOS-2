function updateClock() {

  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;

  if (hours === 0) {
    hours = 12;
  }

  document.getElementById("clock").textContent =
    hours + ":" + minutes + " " + ampm;

  document.getElementById("date").textContent =
    now.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric"
    });
}

function refreshPage() {
  updateClock();
}

updateClock();

setInterval(updateClock, 1000);
