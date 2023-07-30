let buttons = document.querySelectorAll('.col-sm-3')
let body = document.querySelector('body')
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "black"){
            body.style.backgroundColor = e.target.id
            body.style.color = "white"
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id
        }
    })
})

// Random color change 
let randomButton = document.getElementById('randomButton')
randomButton.addEventListener('click',function(){
    const max = 255
    const min = 0
    let R = (Math.floor(Math.random()*(max - min)) + min)
    let G = (Math.floor(Math.random()*(max - min)) + min)
    let B = (Math.floor(Math.random()*(max - min)) + min)
    body.style.backgroundColor = `rgb(${R},${G},${B})`
})