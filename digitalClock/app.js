let clock = document.querySelector('#clock')
// setInterval(function(){
//     clock.innerHTML = `${time}`
// }, 1000);
setInterval(() => {
    let time = new Date().toLocaleTimeString()
    clock.innerHTML = time
}, 1000);