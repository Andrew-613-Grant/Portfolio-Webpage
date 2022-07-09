
function toggleDiv(id, btn){
    
        const div = document.getElementById(id);
        const button = document.getElementById(btn);
        const boxes = document.querySelector('.info-box');

        if(div.style.visibility != 'visible') {
            div.style.visibility = 'visible';
            boxes.style.opacity = '0.1';
            button.style.backgroundColor = 'black';
            button.style.color = 'white';
            button.innerHTML = '❌';
        }
        else {
            div.style.visibility = 'hidden';
            button.style.backgroundColor = 'rgb(164, 206, 101)';
            button.style.color = 'black';
            button.innerHTML = 'Expand';
            boxes.style.opacity = '1';
        }
    }

