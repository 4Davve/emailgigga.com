// Image JS

const image = document.querySelector('.hero__screen--img');

let lastScrollY = window.scrollY;

const hideimage = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const scrollingDown = window.scrollY > lastScrollY;
      lastScrollY = window.scrollY;

      if (entry.isIntersecting) {
        image.classList.add('visible');
      } else {
        if (!scrollingDown) {
          image.classList.remove('visible');
        }
      }
    });
  },
  {
    threshold: 0.5,
  }
);

hideimage.observe(image);

// Brands carusel 

const track = document.querySelector('.brands');

// Клонируем элементы для бесконечной прокрутки
const items = Array.from(track.children);
items.forEach(item => {
  const clone = item.cloneNode(true);
  track.appendChild(clone);
});

let position = 0;
const normalSpeed = 0.6;
const slowSpeed = 0.3;
let speed = normalSpeed;

track.addEventListener('mouseenter', () => {
  speed = slowSpeed; // замедляем при наведении
});

track.addEventListener('mouseleave', () => {
  speed = normalSpeed; // возвращаем нормальную скорость
});

function animate() {
  position -= speed;
  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }
  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

