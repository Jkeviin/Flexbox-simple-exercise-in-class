

window.addEventListener("DOMContentLoaded", ()=>{
    let change_color = document.getElementById("change-color");
    let input_color = document.getElementById("input-color");
    let card = document.querySelector(".card");

    change_color.addEventListener("click", ()=>{
        color.style.backgroundColor = input_color.value;
    });

})

