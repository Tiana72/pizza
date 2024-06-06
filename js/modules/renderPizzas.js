import { modalController } from "../modal.js";
import { getData } from "./getData.js";
import { renderModalPizza } from "./renderModalPizza.js";
import { changeFirstUpperCase } from "./helpers.js";

const btnPizzaReset = document.createElement('button');
btnPizzaReset.classList.add('toppings__label');
btnPizzaReset.classList.add('pizza__reset-toppings');
btnPizzaReset.textContent = 'Сбросить фильтр';
btnPizzaReset.type = "reset";
btnPizzaReset.setAttribute('form', 'toppings');

const createCard = (data) => {
    const card = document.createElement('article');
    card.classList.add('pizza__card', 'card');
    card.innerHTML = `
        <picture>
            <source srcset="${data.images[1]}" type="image/webp"> 
            <img class="card__img" src="${data.images[0]}" alt="${data.name.ru}">
        </picture>
        <div class="card__content">
            <h3 class="card__title">${changeFirstUpperCase(data.name.ru)}</h3>
            <p class="card__info">
                <span class="card__price">${data.price['25cm']} ₽</span>
                <span>/</span>
                <span class="card__size">25 см</span>
            </p>
            <button class="card__btn" data-id="${data.id}">Выбрать</button>
        </div>
    `;
    return card;
}

export const renderPizzas = async (toppings) => {
    const pizzas = await getData(
        `https://scratch-sunny-lilac.glitch.me/api/products${
            toppings ? `?toppings=${toppings}` : ''
        }`,
    );
        
    const pizzaTitle = document.querySelector('.pizza__title'); 
    const pizzaList = document.querySelector('.pizza__list');
    pizzaList.textContent = '';

    if (pizzas.length) {
        pizzaTitle.textContent = 'Пицца';
        btnPizzaReset.remove();
        const items = pizzas.map((data) => {
            const item = document.createElement('li');
            item.classList.add('pizza__item');
            const card = createCard(data);
            item.append(card);
            return item;
        })
        pizzaList.append(...items); 
        
        modalController({
            modal: '.modal-pizza',
            btnOpen: '.card__btn', 
            btnClose: '.modal__close',
            async cbOpen(btnOpen) {
                const pizza = await getData(`https://scratch-sunny-lilac.glitch.me/api/products/${btnOpen.dataset.id}`);
                renderModalPizza(pizza);

            }
        })       
    } else {
        pizzaTitle.textContent = 'Такой пиццы у нас нет :(';
        pizzaTitle.after(btnPizzaReset);
    }
};

btnPizzaReset.addEventListener('click', () => {
    renderPizzas();
    document.querySelector('.toppings__reset').remove();
}) 



