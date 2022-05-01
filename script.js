const selectEl = document.querySelector('#select');
const regImage = document.querySelector('#game-img');
const button = document.querySelector('#button');
const form = document.querySelector('#form');

selectEl.addEventListener('change', function() {
    switch(true) {
        case(this.value === 'The Last of Us 2'): regImage.src = './img/games/The last of us 2.png';
        break;

        case(this.value === "Assasin's Creed: Valhalla"): regImage.src = "./img/games/Assasins creed valhalla.jpg";
        break;
        
        case(this.value === 'Doom: Eternal'): regImage.src = './img/games/doom eternal.jpg';
        break;

        case(this.value === 'Cyberpunk 2077'): regImage.src = './img/games/cyberpunk 2077.jpg';
        break;

        case(this.value === 'Far Cry 6'): regImage.src = './img/games/far cry 6.png';
        break;

        default: regImage.src = './img/games/The last of us 2.png';
    };
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('Ви зареєструвалися');
});