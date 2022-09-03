

window.addEventListener("DOMContentLoaded", ()=>{
    let change_color = document.getElementsByClassName("color-change");
    let btnChange = document.getElementById("change-color");
    let input_color = document.getElementById("input-color");


    let border = 10;


    btnChange.addEventListener("click", ()=>{
        for(let i = 0; i < change_color.length; i++){
            change_color[i].style.backgroundColor = input_color.value;
        }
    });

    let change_radius_max = document.getElementById("max");
    let change_radius_min = document.getElementById("min");

    change_radius_max.addEventListener("click", ()=>{
        border = border + 1;
        document.getElementById("card").style.borderRadius = border + "px";
        document.getElementById("header").style.borderRadius = `${border}px ${border}px 0 0`;
    });

    change_radius_min.addEventListener("click", ()=>{
        border = border - 1;
        document.getElementById("card").style.borderRadius = border + "px";
        document.getElementById("header").style.borderRadius = `${border}px ${border}px 0 0`;
    });


})

