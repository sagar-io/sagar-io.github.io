window.addEventListener("keydown",(val)=>{
const audio = document.querySelector(`audio[data-key="${val.keyCode}"]`)
const key = document.querySelector(`.key[data-key="${val.keyCode}"]`)
if(!audio) return;
audio.currentTime = 0;
audio.play(); 
key.classList.add("playing");
})
function removeTransition(e){
    this.classList.remove("playing");
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend",removeTransition));
