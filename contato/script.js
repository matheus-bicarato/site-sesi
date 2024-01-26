
function go_back(){
    let form = document.querySelector(".form-contact");
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        form.style.transform = "rotateY(180deg)";
    })
}

function go_front(){
    let form = document.querySelector(".form-contact");
    
    form.style.transform = "rotateY(0deg)";
    form.reset();
}