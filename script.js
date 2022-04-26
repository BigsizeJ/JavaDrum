const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', (e) =>{
    if(e.propertyName !== `transform`) return

    key.classList.remove('playing')
}))

window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key=${e.key.toUpperCase()}]`);
    const key = document.querySelector(`.key[data-key=${e.key.toUpperCase()}]`)
    if(!audio) return;
    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play()
})