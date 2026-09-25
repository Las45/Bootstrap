var color = 1;

function change_backgroundColor() {
    if (color == 1) {
        document.body.style.backgroundColor = "white";
    }
    else{
        document.body.style.backgroundColor = "black";
    }
    color = color * -1;
}