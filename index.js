let userInput = document.getElementById('userInput');
let generateButton = document.getElementById('generateButton');
let out = document.getElementById('num');

generateButton.addEventListener('click',generate)


function generate(){
    let st = "";
    for(let i = 1 ; i<=userInput.value; i++){
        

            st = st + "<div>" + i + "</div>";
        
    }

    out.innerHTML = st;
}

