export const toppingsToggle = () => {
    const toppingsButton = document.querySelector('.toppings__btn');
    const toppingsList = document.querySelector('.toppings__list');

    toppingsButton.addEventListener('click', () => {
        if (!toppingsList.classList.contains('toppings__list_show')) {
            toppingsList.classList.add('toppings__list_show');
            toppingsButton.classList.add('toppings__btn_active');
            toppingsList.style.maxHeight = toppingsList.scrollHeight + 16 + "px";
        } else {
            toppingsButton.classList.remove('toppings__btn_active');
            toppingsList.style.maxHeight = null;
            setTimeout(() => {
                toppingsList.classList.remove('toppings__list_show');
            }, 300)
            
        }
    })
}