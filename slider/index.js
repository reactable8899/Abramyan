const slider = function () {

  let container;
  let images;
  let currentActiveIndex = 0;

  function initSlider() {
    container = document.getElementsByClassName('slider')[0];
    images = container.getElementsByClassName('slider__image')

    let nextButton = container.getElementsByClassName('slider__button-next')[0];
    let previousButton = container.getElementsByClassName('slider__button-previous')[0];

    nextButton.addEventListener('click', function(event) {
      activateNextImage();
    }, false);

    previousButton.addEventListener('click', function(event) {
      activePreviousImage();
    }, false);
  }

  function getCurrentImage() {
    return images[currentActiveIndex];
  }

  function activateNextImage() {
    const image = getCurrentImage();
    deactiveImage(image);

    if (currentActiveIndex === images.length - 1) {
      currentActiveIndex = 0;
    } else {
      currentActiveIndex++;
    }

    currentActiveImage = images[currentActiveIndex];
    activateImage(currentActiveImage);
  }

  function activePreviousImage() {
    const image = getCurrentImage();
    deactiveImage(image);

    if (currentActiveIndex === 0) {
      currentActiveIndex = images.length - 1;
    } else {
      currentActiveIndex--;
    }

    currentActiveImage = images[currentActiveIndex];
    activateImage(currentActiveImage);
  }

  function activateImage(image) {
    image.classList.add('slider__image--active');
  }

  function deactiveImage(image) {
    image.classList.remove('slider__image--active');
  }

  return {
    initSlider: initSlider
  }
}();

1/n + 2/n^2 + 3/n^3


function power(n, k) {
  let p = 1;
  for(let i = 0; i < k; i++) {
    p *= n;

    // p = n;
    // p = n^2
    // p = n^3
  }
  return p;
}


function calA(n) {
  sum = 0;
  for (let i = 1; i < n; i++) {
    sum += i / power(n, i);
    // 1 / power(n, 1)
    // 2 / power(n, 2);
    // ...
  }
  return sum;
}

function calcB() {
  return power(2, 3);
}
