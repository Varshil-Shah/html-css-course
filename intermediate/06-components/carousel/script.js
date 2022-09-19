const carousel = document.querySelector(".carousel");
const carouselImage = document.querySelector(".image");

const carouselDescrption = document.querySelector(".testimonial-text");
const carouselAuthor = document.querySelector(".testimonial-author");
const carouselJob = document.querySelector(".testimonial-job");

const buttonLeft = document.querySelector(".btn-left");
const buttonRight = document.querySelector(".btn-right");
const dotContainer = document.querySelector(".dots");

let currentSlide = 0;

const data = [
  {
    photo: "steven.jpg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eaque quae temporibus autem accusamus libero assumenda illum dolores distinctio dignissimos provident voluptate debitis, numquam fugiat atque! Tempora alias",
    name: "Steven Jobs",
    job: "Junior Financial Management",
    backgroundColor: "#343a40",
    descriptionColor: "#adb5bd",
    textColor: "#495057",
  },
  {
    photo: "john.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum neque possimus vel architecto, accusamus commodi adipisci, ratione provident magni culpa veritatis voluptate totam sunt porro voluptatem tempore amet quisquam",
    name: "John Smith",
    job: "Junior Front End Developer",
    backgroundColor: "#fff",
    descriptionColor: "#343a40",
    textColor: "#868e96",
  },
  {
    photo: "maria.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium vitae ex quam suscipit vero mollitia quasi repudiandae odio ipsam at rem deserunt placeat ullam cum velit natus eius, tempora iure.",
    name: "Maria Almedia",
    job: "Senior Front End Developer",
    backgroundColor: "#e03131",
    descriptionColor: "#ff6b6b",
    textColor: "#ffa8a8",
  },
];

// Function to create dots
(function () {
  data.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dot" data-slide="${i}"></button>`
    );
  });
})();

const nextSlide = () => {
  currentSlide === data.length - 1 ? (currentSlide = 0) : currentSlide++;
  changeContent(currentSlide);
};

const previousSlide = () => {
  currentSlide === 0 ? (currentSlide = data.length - 1) : currentSlide--;
  changeContent(currentSlide);
};

const changeContent = (index) => {
  carouselImage.src = `images/${data[index].photo}`;
  carouselImage.addEventListener("load", () => {
    carouselAuthor.textContent = data[index].name;
    carouselJob.textContent = data[index].job;
    carouselDescrption.textContent = data[index].text;

    carousel.style.backgroundColor = data[index].backgroundColor;
    carouselDescrption.style.color = data[index].descriptionColor;
    carouselAuthor.style.color = carouselJob.style.color =
      data[index].textColor;
  });
};

buttonLeft.addEventListener("click", previousSlide);
buttonRight.addEventListener("click", nextSlide);
