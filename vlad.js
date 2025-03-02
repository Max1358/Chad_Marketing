// курсор
const cursor = document.querySelector(".custom-cursor");

// Обновление позиции курсора
document.addEventListener("mousemove", (event) => {
  cursor.style.left = `${event.pageX}px`;
  cursor.style.top = `${event.pageY}px`;
});

// музыка
const music = document.getElementById("backgroundMusic");
const toggle = document.getElementById("musicToggle");

// Устанавливаем начальное состояние
let isPlaying = false;

// Функция переключения музыки
const toggleMusic = () => {
  if (isPlaying) {
    music.pause(); // Останавливаем музыку
  } else {
    music.play(); // Воспроизводим музыку
  }
  isPlaying = !isPlaying; // Переключаем состояние
};

// Событие клика на картинку
toggle.addEventListener("click", toggleMusic);

// Автозапуск музыки при загрузке сайта
window.addEventListener("load", () => {
  music.play();
  isPlaying = true; // Устанавливаем состояние "воспроизведение"
});

// вторая страница
const img = document.querySelector(".slime-container img");
const displacementFilter = document.querySelector("feDisplacementMap");
const fartSound = document.getElementById("fart-sound");

img.addEventListener("mouseenter", () => {
  displacementFilter.setAttribute("scale", "20"); // Фиксированная небольшая деформация
  fartSound.currentTime = 0; // Сбрасываем время воспроизведения (чтобы звук срабатывал всегда)
  fartSound.play(); // Играем звук пУка 💨
});

img.addEventListener("mouseleave", () => {
  displacementFilter.setAttribute("scale", "0"); // Плавное возвращение
});
img.addEventListener("mouseenter", () => {
  fartSound.currentTime = 0;
  fartSound.play();
});

// текст
document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".animate-text");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Когда элемент виден, добавляем класс для анимации
          entry.target.classList.add("slide-in");
        } else {
          // Когда элемент выходит, убираем класс для перезапуска анимации
          entry.target.classList.remove("slide-in");
        }
      });
    },
    {
      threshold: 0.2, // Срабатывает, когда 50% элемента становится видимым
    }
  );

  observer.observe(text);
});
//
const wordContainer = document.getElementById("word");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Когда контейнер появляется на экране, начинаем анимацию
        const letters = entry.target.querySelectorAll(".letter");
        entry.target.style.opacity = 1; // Показываем контейнер

        // Для каждой буквы сбрасываем анимацию и повторно запускаем
        letters.forEach((letter, index) => {
          letter.style.animation = "none"; // Сброс анимации
          void letter.offsetWidth; // Хитрый способ сбросить анимацию
          letter.style.animation = `moveLetter 1s forwards ${index * 0.1}s`; // Перезапуск анимации с задержкой
        });

        // Добавляем капельки
        createDropsForLetters(entry.target);
      } else {
        // Когда элемент выходит с экрана, скрываем его
        wordContainer.style.opacity = 0;
      }
    });
  },
  { threshold: 0.5 } // Порог 50% видимости элемента
);

observer.observe(wordContainer);

function createDrop(x, y) {
  const drop = document.createElement("div");
  drop.classList.add("drop");

  // Устанавливаем фиксированное положение для каждой капли
  drop.style.left = `${x}px`; // x - это координата на странице, откуда капля будет падать
  drop.style.top = `${y}px`; // y - это координата, определяющая начальную точку

  // Случайная длительность анимации для каждой капли (скорость падения)
  const duration = Math.random() * 5 + 5; // 2-5 секунд
  drop.style.animationDuration = `${duration}s`;

  // Добавляем каплю на страницу
  document.body.appendChild(drop);

  // Удаляем каплю по завершении анимации
  setTimeout(() => {
    drop.remove();
  }, duration * 400); // Время, которое длится анимация (умножаем на 1000 для миллисекунд)
}

// Например, создаем капли с определенной позиции (x, y)
setInterval(() => {
  createDrop(1090, 1310);
  createDrop(1150, 1310);
  createDrop(1210, 1310);
  createDrop(1270, 1310);
  createDrop(1330, 1310);
  createDrop(1390, 1310);
  createDrop(1450, 1310);
  createDrop(1310, 1310);
  createDrop(1370, 1310);
  createDrop(1430, 1310);
  createDrop(1490, 1310);
  createDrop(1550, 1310);
}, 1500); // Интервал для создания новых капель
