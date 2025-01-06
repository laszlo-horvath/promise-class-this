// 2. Event handler context
const button = document.createElement('button');
button.textContent = 'Click me';

button.addEventListener('click', function() {
   console.log('Event this:', this.textContent);
});

button.addEventListener('click', () => {
   console.log('Arrow this:', this);
});
