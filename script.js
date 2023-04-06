const container = document.createElement("div");

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";

function getRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

function changeColor(x) {
  return (x = getRandomColor());
}

for (let i = 0; i <= 63; i++) {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  const tile = document.createElement("div");

  tile.style.width = "12.5%";
  tile.style.height = "12.5%";
  tile.style.background = `rgb(${red}, ${green}, ${blue})`;

  const x = i % 8;
  const y = Math.floor(i / 8);
  const isTopLeft = x < 4 && y < 4;

  if (isTopLeft) {
    tile.style.background =
      "linear-gradient(to bottom right, #ff0000, #00ff00)";
  } else {
    tile.style.background = `rgb(${red}, ${green}, ${blue})`;
  }

  container.append(tile);
}

setInterval(
  setInterval(function () {
    changeColor(container);
  }, 2000)
);

document.body.append(container);
