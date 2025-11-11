const accordeon = () => {
  const contents = document.querySelectorAll(".program-line__content");
  const contentsDescr = document.querySelector(".program-line__descr");

  contents.forEach((elem) => {
    const title = elem.querySelector(".program-line__title");
    const descr = elem.querySelector(".program-line__descr");

    title.addEventListener("click", () => {
      contents.forEach((item) => {
        if (item !== elem) {
          item.querySelector(".program-line__descr").classList.remove("active");
        }
      });
      descr.classList.toggle("active");
    });
  });
};

accordeon();
