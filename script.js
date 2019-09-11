const element1 = document.getElementById('btn--rain')
const element2 = document.getElementById('btn--fire')
const element3 = document.getElementById('btn--coffee')
const element4 = document.getElementById('btn--off')
element4.classList.add('playing2');


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; 
    
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    setTimeout(function () {
        key.classList.remove("playing");
    }, 100);
}

function playLoop(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const loop = document.querySelector(`.loop[data-key="${e.keyCode}"]`);
    if(!audio) return;


    audio.play();
    loop.classList.add('playing');

    audio.onended = function() {
        loop.classList.remove("playing")
    }
}

document.querySelector('#btn--rain').addEventListener('click', function(){
    const audio1 = document.getElementById("rain")
    const audio2 = document.getElementById("fire")
    const audio3 = document.getElementById("coffee")
   
    audio2.pause();
    audio3.pause();

    audio1.play();
    audio1.loop = true;
    
    element1.classList.add('playing2');
    element2.classList.remove('playing2');
    element3.classList.remove('playing2');
    element4.classList.remove('playing2');
})

document.querySelector('#btn--fire').addEventListener('click', function(){
    const audio1 = document.getElementById("rain")
    const audio2 = document.getElementById("fire")
    const audio3 = document.getElementById("coffee")

    
    audio1.pause();
    audio3.pause();

    audio2.play();
    audio2.loop = true;

    element1.classList.remove('playing2');
    element2.classList.add('playing2');
    element3.classList.remove('playing2');
    element4.classList.remove('playing2');
})

document.querySelector('#btn--coffee').addEventListener('click', function(){
    const audio1 = document.getElementById("rain")
    const audio2 = document.getElementById("fire")
    const audio3 = document.getElementById("coffee")

    
    audio1.pause();
    audio2.pause();

    audio3.play();
    audio3.loop = true;

    element1.classList.remove('playing2');
    element2.classList.remove('playing2');
    element3.classList.add('playing2');
    element4.classList.remove('playing2');
})

document.querySelector('#btn--off').addEventListener('click', function(){
    const audio1 = document.getElementById("rain")
    const audio2 = document.getElementById("fire")
    const audio3 = document.getElementById("coffee")

    
    audio1.pause();
    audio2.pause();
    audio3.pause();

    element1.classList.remove('playing2');
    element2.classList.remove('playing2');
    element3.classList.remove('playing2');
    element4.classList.add('playing2');
})

function clickSound(datakey) {
    const audio = document.querySelector(`audio[data-key="${datakey}"]`);
    const key = document.querySelector(`.key[data-key="${datakey}"]`);
    
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    setTimeout(function () {
        key.classList.remove("playing");
    }, 100);
}

function clickLoop(datakey) {
    const audio = document.querySelector(`audio[data-key="${datakey}"]`);
    const loop = document.querySelector(`.loop[data-key="${datakey}"]`);
    
    audio.play();
    loop.classList.add('playing');

    audio.onended = function() {
    loop.classList.remove("playing")
    }
}

const keys = document.getElementById('key-81');
window.addEventListener('keydown', playSound);
window.addEventListener('keydown', playLoop);
window.addEventListener('keydown', togglePlay);


