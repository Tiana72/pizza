import { getData } from "./getData.js";
import { renderPizzas } from "./renderPizzas.js";
import { changeFirstUpperCase } from "./helpers.js";

export const renderToppings = async () => {
    const { en: enToppings, ru: ruToppings } = await getData('https://scratch-sunny-lilac.glitch.me/api/toppings');
    const toppingsList = document.querySelector('.toppings__list');
    toppingsList.textContent = '';
    const items = enToppings.map((enName, index) => {
        const item = document.createElement('li');
        item.classList.add('toppings__item');
        item.innerHTML = `
            <input id="${enName}" class="toppings__checkbox" type="checkbox" name="topping" value="${enName}">
            <label for="${enName}" class="toppings__label">${changeFirstUpperCase(ruToppings[index])}</label>
        `
        return item;
    })
    
    toppingsList.append(...items);

    const itemReset = document.createElement('li');
    itemReset.classList.add('toppings__item');
    const btnReset = document.createElement('button');
    btnReset.classList.add('toppings__label');
    btnReset.classList.add('toppings__reset');
    btnReset.textContent = 'Сбросить';
    btnReset.type = "reset";
    itemReset.append(btnReset);
    
    const toppingsForm = document.querySelector('.toppings__form');

    toppingsForm.addEventListener('change', (event) => {
        const formData = new FormData(toppingsForm);
        const checkedToppings = [];

        for (const [, value] of formData.entries()) {
            checkedToppings.push(value);
        };

        renderPizzas(checkedToppings);

        if (checkedToppings.length) {
            toppingsList.append(itemReset);
        } else {
            itemReset.remove();
        };

    });

    btnReset.addEventListener('click', () => {
        itemReset.remove();
        toppingsForm.reset();
        renderPizzas();
    });

};