fetch('intro.txt')
    .then(response=>response.text())
    .then(text=>{
        document.getElementById('intro').innerText=text;
    });


for(let i = 1; i < 3; i++){
    fetch(`${i}.txt`)
        .then(response => response.text())
        .then(text => {
            document.getElementById(`${i}`).innerText = text;
        });
}
    