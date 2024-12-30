const colors = [
    'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)',
    'rgb(75, 192, 192)', 'rgb(153, 102, 255)', 'rgb(255, 159, 64)',
    'rgb(128, 0, 0)', 'rgb(0, 128, 128)', 'rgb(128, 128, 0)',
    'rgb(0, 0, 128)', 'rgb(255, 20, 147)', 'rgb(127, 255, 0)',
    'rgb(70, 130, 180)', 'rgb(255, 69, 0)', 'rgb(32, 178, 170)',
    'rgb(218, 165, 32)', 'rgb(0, 255, 127)', 'rgb(100, 149, 237)',
    'rgb(210, 105, 30)', 'rgb(0, 191, 255)'
  ];

const newYear = document.querySelector('.new-year');
const button = document.getElementById('colorButton');

// Wrap the newYear text in a span element so we can change the color individually
function wrapLetters() {
    const text = newYear.textContent;
    const letters = text.split('');
    const spanLetters = letters.map(letter => `<span>${letter}</span>`);
    newYear.innerHTML = spanLetters.join('');
}

wrapLetters();

// Randomly change the color of the text
function changeColor() {
    const spans = newYear.querySelectorAll('span');
    spans.forEach(span => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        span.style.color = randomColor;
    });
}

// Add a click event listener to the button
button.addEventListener('click', changeColor);