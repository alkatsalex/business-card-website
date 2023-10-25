const btn = document.querySelector('.btn')
const container = document.querySelector('.container')

btn.addEventListener('click', () => {
    console.log(1);
    container.classList.toggle('js-hiden')
})