
const clock = document.querySelector('.clock');
const name = document.getElementById('myName');
window.addEventListener('load',e => {
    let username = prompt('İsminizi giriniz...');
    name.append(username);
    setInterval(() => {
        let now = new Date();
        clock.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    },1000)
})