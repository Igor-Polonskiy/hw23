let number = document.querySelector('.number');
let range = document.querySelector('.range');
let body = document.querySelector('body');

document.addEventListener('input', (event) => {
    if (event.target == number) {
        range.value = event.target.value;
    } else {
        number.value = event.target.value;
    }
    body.style.background = `rgba(0,0,0, ${range.value/100})`;

})