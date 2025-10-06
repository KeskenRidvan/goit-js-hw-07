const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const container = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  return boxes;
};

const destroyBoxes = () => {
  container.innerHTML = "";
};

const handleButtonCreate = () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    destroyBoxes();

    const newBoxes = createBoxes(amount);
    container.append(...newBoxes);

    input.value = "";
  }
};

const handleButtonDestroy = () => {
  destroyBoxes();
  input.value = "";
};

buttonCreate.addEventListener("click", handleButtonCreate);
buttonDestroy.addEventListener("click", handleButtonDestroy);
