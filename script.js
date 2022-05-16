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

//Власна валідація імені користувача у формі
function validateName(value) {
    let inputName = document.querySelector('#name'),
        avail = false;

    value = value.replace(/\s+/g, '');

    switch (true) {
        case (!value.trim() === true):
            inputName.value = "Ім'я не може бути порожнім";

            break;

        case (value.length < 2):
            inputName.value = "Ім'я занадто коротке!";

            break;

        case (/[~`!?@_"'#$№;:.,%^&*/()+=|{}[<>\]-]/g.test(value) === true):
            inputName.value = "Ім'я не може мати ніяких знаків!";

            break;

        case (/[0-9]/g.test(value) === true):
            inputName.value = "Ім'я не може мати ніяких цифр!";
            
            break;

        default:
            avail = true;

            break;
        };

    return avail;
};

//Відправка даних користувача для електронної черги
function sendUserData() {
    const data = new FormData(document.querySelector('#form')),
        request = new XMLHttpRequest();

    request.open('POST', '../php/main.php');

    request.send(data);

    request.addEventListener('load', () => {
        if (request.readyState === 4 && request.status === 200) {
            alert("Ви успішно встали у чергу на тестування гри. Очікуйте на зворотній зв'язок від нашого оператору.");

            localStorage.setItem("clientPhoneNumber", document.querySelector('#phone').value);

            location.reload();
        }

        else {
            alert("Помилка. Будь-ласка перезагрузіть сторінку та спробуйте ще раз.");
        };
    });

    request.addEventListener('error', () => {
        console.log(request.readyState, request.statusText);
    });
};

//Перевірка усіх полей форми на вірність та номеру телефона користувача на унікальність, яка дозволяє перевірити, чи вставав користувач у чергу раніше чи ні.
document.querySelector('#form').addEventListener('submit', function(e) {
    e.preventDefault();

    validateName(document.querySelector('#name').value);

    if (validateName(document.querySelector('#name').value) === true) {
        if (document.querySelector('#phone').value === localStorage.getItem("clientPhoneNumber")) {
            alert('На даний момент ви вже стоїте у черзі на тестування нової гри.');
            location.reload();
        } else {
            sendUserData();
        };

    } else {
        return;
    };
});
