
function go_back(){
    let form = document.querySelector(".form-contact");
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        form.style.transform = "rotateY(180deg)";

        form.style.boxShadow = "-3px 3px 5px 0px var(--background-input)"
    })
}

function go_front(){
    let form = document.querySelector(".form-contact");
    
    form.style.transform = "rotateY(0deg)";

    form.style.boxShadow = "3px 3px 5px 0px var(--background-input)"
    form.reset();
}

function activate() {
    let list = document.getElementById("list-link-header");

    list.classList.add('options-list-activate');
    list.classList.remove('options-list-header');
}

function desactivate() {
    let list = document.getElementById("list-link-header");

    list.classList.add('options-list-header');
    list.classList.remove('options-list-activate');
}