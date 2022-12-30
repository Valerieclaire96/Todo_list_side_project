let addTodobtn = document.getElementById('addTodo');
let container = document.getElementById('todoContainer');
let input = document.getElementById('inputField')

addTodobtn.addEventListener('click', function(){
    let words = document.createElement('p');
    words.classList.add('words');
    words.innerText = input.value;
    container.appendChild(words);
    input.value = "";
    words.addEventListener('click', function(){
        words.style.textDecoration = "line-through";
    })
    words.addEventListener('dblclick', function(){
        container.removeChild(words);
    })
})

// addTodobtn.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       let words = document.createElement('p')
//       words.classList.add('words')
//       words.innerText = input.value;
//       container.appendChild(words)
//     }
// }) 