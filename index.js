// DOM Event
addEventListener('DOMContentLoaded', () => {
    const writable = document.getElementById('HeaderTxt');

    Write('Je m\'appelle Benoit et je suis Développeur Web !', writable);
    setTimeout(()=>writable.classList.add('animation'), 4500)

    setInterval(() => {
        Delete(5, writable);
        setTimeout(()=>Write(' Full Stack !', writable), 1200);
        setTimeout(()=>Delete(12, writable), 3500);
        setTimeout(()=>Write(' Web !', writable), 5500);
    }, 7000);
})

// Functions
function Write(txt, where) {
    let time = 500;
    let texttab = txt.split('');
    let textarea = where.innerText.split('');
    for (const text of texttab) {
        setTimeout(() => {
            where.classList.remove('animation');
            textarea.push(text);
            where.innerText = textarea.join('');
        }, time);
        time += 75;
    }
    where.classList.add('animation');
}

function Delete(size, where) {
    let time = 500;
    let textarea = where.innerText.split('');
    for (let i = 0; i < size; i++) {
        setTimeout(() => {
            where.classList.remove('animation');
            textarea.pop();
            where.innerText = textarea.join('');
        }, time);
        time += 75;
    }
    where.classList.add('animation');
}