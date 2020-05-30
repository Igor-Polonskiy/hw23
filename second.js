let busket = document.querySelector('.busket');
let dragged


document.addEventListener("dragstart", function (event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, );
document.addEventListener("dragend", function (event) {
    event.target.style.opacity = "";
}, );

document.addEventListener("dragover", function (event) {
    event.preventDefault();
}, );


document.addEventListener('drop', (e) => {

            if (e.target == busket) {
                e.target.append(dragged);
            }
            let trash = document.querySelectorAll(".busket > div");
            for (let i = 0; i<trash.length; i++) {
                if (e.target == trash[i]){
                        busket.append(dragged)
                    }
                }
            });