function scroll(){

    var picfade1 = document.getElementById('picfade1');
    var picfade2 = document.getElementById('picfade2');
    var picfade3 = document.getElementById('picfade3');
    var ypos = window.pageYOffset;

    if(ypos > 400){
        picfade1.style.opacity = "1";
    }

    if(ypos > 1100){
        picfade2.style.opacity = "1";
    }

    if(ypos > 1800){
        picfade3.style.opacity = "1";
    }
}
window.addEventListener("scroll", scroll);


// MODAL
var modal = document.getElementById('modal');
var closebtn = document.getElementById('closebtn');

var a = document.getElementsByTagName('a');
    for (i = 0; i < a.length; i++) {   
        var links = a[i];
        links.addEventListener('click', openmodal);
    } 

closebtn.addEventListener('click', closemodal);
window.addEventListener('click', outsideclick);


// OPEN MODAL
function openmodal(){
    modal.style.display = "block";
}

//CLOSE MODAL
function closemodal(){
    modal.style.display = "none";
}

//CLICK ANYWHERE IN THE DARK AREA TO CLOSE MODAL
function outsideclick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}



