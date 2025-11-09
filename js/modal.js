const modalBtns = document.querySelectorAll(".modal__button, .course__button");
const modal = document.querySelector(".modal");

modalBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

modal.addEventListener("click", (event) => {
  const modalContent = event.target.closest(".modal__inner");
  if (!modalContent) {
    modal.style.display = "";
  }
});

const closeButton = document.createElement("div");
closeButton.innerHTML = "×"; 
closeButton.style.cssText = `
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  color: #ffffff;
  z-index: 1001;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s;
`;

closeButton.addEventListener("mouseover", function() {
  this.style.backgroundColor = "rgba(0,0,0,0.1)";
});

closeButton.addEventListener("mouseout", function() {
  this.style.backgroundColor = "transparent";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "";
});

const modalInner = document.querySelector(".modal__inner");
modalInner.style.position = "relative";
modalInner.appendChild(closeButton);