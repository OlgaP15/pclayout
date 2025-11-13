const earned = () => {
  const earnedAnimation = () => {
    const earnedElement = document.querySelector(
      ".course__progress-label .course__number"
    );
    const progressBar = document.querySelector(
      ".course__progress-element progress"
    );
    const progressMinmax = document.querySelector(".course__progress-minmax");

    if (!earnedElement || !progressBar) return;

    const generateRandomAmount = () => {
      return Math.floor(Math.random() * (600000 - 350000 + 1)) + 350000;
    };

    const formatNumber = (num) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "₽";
    };

    const animateNumber = (start, end, duration, element) => {
      const startTime = performance.now();
      const updateValue = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const currentValue = Math.floor(start + (end - start) * easeProgress);

        element.textContent = formatNumber(currentValue);
        progressBar.value = currentValue;

        if (progress < 1) {
          requestAnimationFrame(updateValue);
        } else {
          element.textContent = formatNumber(end);
          progressBar.value = end;
        }
      };

      requestAnimationFrame(updateValue);
    };

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const third = windowHeight / 3;
      return rect.top <= windowHeight - third && rect.bottom >= third;
    };

    let animationPlayed = false;

    const startAnimation = () => {
      if (animationPlayed) return;

      animationPlayed = true;

      earnedElement.textContent = "0₽";
      progressBar.value = 0;

      const targetAmount = generateRandomAmount();

      setTimeout(() => {
        animateNumber(0, targetAmount, 2000, earnedElement);
      }, 300);
    };

    const checkOnLoad = () => {
      if (isElementInViewport(progressMinmax)) {
        startAnimation();
      }
    };

    const checkOnScroll = () => {
      if (!animationPlayed && isElementInViewport(progressMinmax)) {
        startAnimation();
      }
    };

    const init = () => {
      earnedElement.textContent = "0₽";
      progressBar.value = 0;

      window.addEventListener("load", checkOnLoad);
      window.addEventListener("scroll", checkOnScroll);

      setTimeout(checkOnLoad, 100);
    };

    init();
  };

  earnedAnimation();
};

earned();
