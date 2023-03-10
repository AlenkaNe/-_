let images = [{
    img: "images/phon-2.jpg",
    title: "Rostov-on-Don, Admiral"
  }, {
    img: "images/phon-2-slider(1).jpg",
    title: "Sochi Thieves"
  }, {
    img: "images/phon-2-slider(2).jpg",
    title: "Rostov-on-Don Patriotic"
  }, 
];
function initSlider() {
    if(!images || !images.length) return; //если images нет или пуст, то выходим из функции

    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");

    initImages();
    initArrows();
    initDots();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active": ""}" style = "background-image: url(${images[index].img});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }
    function initArrows() {
      sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
        arrow.addEventListener("click", function() {
          let curNumber = +sliderImages.querySelector(".active").dataset.index; //унарный плюс для перевода в число
          let nextNumber;
          if (arrow.classList.contains("left")) {
            nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
          } else {
            nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
          }
          moveSlider(nextNumber);
        })
      })
    }
    function initDots() {
      images.forEach((image, index) => {
        let dot = `<div class="slider__dots-item n${index} &{index ===0? "active" : ""}" data-index="${index}"></div>`
        initDots.innerHTML += dot;
      });
      initDots.querySelectorAll("slider__dots-item").forEach(dot => {
        dot.addEventListener("click", function() {
          moveSlider(this.dataset.index);
          sliderDots.querySelector(".active").classList.remove("active");
          this.classList.add("active");
        })
      })
    }

    function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(`.n` + num).classList.add("active");
    }
}
document.addEventListener("DOMContentLoaded", () => {   //можно аргументом после запятой и события написать просто: initSlider
  initSlider()
});
 
