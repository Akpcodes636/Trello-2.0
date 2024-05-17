const modalButton = document.querySelector("#modalButton");
const modalBox = document.querySelector("#modalBox");
const removeBtnModal = document.getElementById("removeBtn");
const modalContent = modalBox.querySelector("div");

modalButton.addEventListener("click", () => {
  modalBox.style.display="block";
});

removeBtnModal.addEventListener("click", () => {
  modalBox.style.display="none";
});

