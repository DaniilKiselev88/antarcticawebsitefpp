// Массив названий кнопок
const buttonLabels = [
    'Императорские пингвины',
    'Ледяные пещеры',
    'Научные станции',
    'Айсберги',
    'Полярные ночи',
    'Морские леопарды',
    'Южный полюс',
    'Ледниковый щит',
    'Киты',
    'Метеориты',
    'Ветер катабатический',
    'Озоновая дыра',
    'Фауна Антарктики',
    'Экспедиции',
    'Ледяные кристаллы'
  ];
  
  // Функция для создания снежных частиц
  function createSnow() {
    const snow = document.getElementById('snow');
    for (let i = 0; i < 50; i++) {
      const flake = document.createElement('flake');
      flake.textContent = '❄';
      flake.style.left = `${Math.random() * 100}%`;
      flake.style.animationDuration = `${Math.random() * 5 + 5}s`;
      flake.style.opacity = Math.random();
      snow.appendChild(flake);
    }
  }
  
  // Функция для создания кнопок
  function createButtons() {
    const container = document.getElementById('buttonsContainer');
    buttonLabels.forEach(label => {
      const button = document.createElement('button');
      button.textContent = label;
      button.addEventListener('click', () => {
        alert(`Вы нажали: ${label}`);
      });
      container.appendChild(button);
    });
  }
  
  // Инициализация
  document.addEventListener('DOMContentLoaded', () => {
    createSnow();
    createButtons();
  });
  