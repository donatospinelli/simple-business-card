const holographicElement = document.getElementById("holographic");

function updateHolographicBackground(value) {
  const percentage = value * 100;
  holographicElement.style.backgroundPosition = percentage + "%";
}

function handleMouseMove(event) {
  const x = event.clientX;
  const width = document.documentElement.clientWidth;
  const value = x / width;
  updateHolographicBackground(value);
}

function handleDeviceOrientation(event) {
  const x = Math.abs(event.gamma); // rotation degrees from 0 to 360
  const value = Math.abs(x) / 80;
  updateHolographicBackground(value);
}

window.addEventListener("deviceorientation", handleDeviceOrientation, true);