const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

console.log(nameInput, nameOutput);

const inputHandle = (event) => {
  const trimmedName = event.currentTarget.value.trim();
  nameOutput.textContent = trimmedName || "Anonymous";
};

nameInput.addEventListener("input", inputHandle);
