const circle = document.querySelector('.circle');
const container = document.querySelector('.container');
const create = document.querySelector('.create');

document.addEventListener('mousemove', (event) => {
    setTimeout(function () {
        circle.style.left = event.clientX - circle.offsetWidth / 2 + "px";
        circle.style.top = event.clientY - circle.offsetHeight / 2 + "px";

    }, 300)

});
circle.addEventListener('click', (event) => {
    if (circle.style.backgroundColor != 'black') {
        circle.style.backgroundColor = 'black';
    } else {
        circle.style.backgroundColor = 'blueviolet';
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code == 'ArrowUp') {
        if (circle.offsetWidth < container.offsetWidth) {
            circle.style.width = circle.offsetWidth * 2 + 'px';
            circle.style.height = circle.offsetHeight * 2 + 'px';
        } else {
            circle.style.width = 10 + "px";
            circle.style.height = 10 + "px";
        }
    }
    if (event.code == 'ArrowDown') {
        if (circle.offsetWidth > 10) {
            circle.style.width = circle.offsetWidth / 2 + 'px';
            circle.style.height = circle.offsetHeight / 2 + 'px';
        } else {
            circle.style.width = container.offsetWidth + "px";
            circle.style.height = container.offsetWidth + "px";
        }
    }
    circle.style.left = container.offsetWidth / 2 - circle.offsetWidth / 2 + "px";
    circle.style.top = container.offsetHeight / 2 - circle.offsetHeight / 2 + "px";
});

circle.addEventListener('focusin', (event) => {
    circle.style.borderRadius = '0';
});
circle.addEventListener('blur', (event) => {
    circle.style.borderRadius = '50%';
});

