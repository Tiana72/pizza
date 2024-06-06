import { changeFirstUpperCase, createInput, createLabel } from "./helpers.js";
import { cartControl } from "./cartControl.js";

export const renderModalPizza = ({id, images, name, price, toppings}) => {
    const modalPizzaMain = document.querySelector('.modal-pizza__main');
    modalPizzaMain.textContent = '';
    let size = Object.keys(price)[0];

    const picture = document.createElement('picture');
    const source = document.createElement('source');
    source.srcset = images[1];
    source.type = 'image/webp';
    const img = document.createElement('img');
    img.classList.add('modal-pizza__img');
    img.src = images[0];
    img.alt = name.ru;
    picture.append(source, img);

    const title = document.createElement('h2');
    title.classList.add('modal-pizza__title');
    title.textContent = changeFirstUpperCase(name.ru);

    const toppingsElem = document.createElement('p');
    toppingsElem.classList.add('modal-pizza__toppings');
    toppingsElem.textContent = changeFirstUpperCase(toppings.ru);

    const priceSizeInfo = document.createElement('p');
    priceSizeInfo.classList.add('modal-pizza__info');
    const priceElem = document.createElement('span');
    priceElem.classList.add('modal-pizza__price');
    const slashElem = document.createElement('span');
    slashElem.textContent = '/';
    const sizeElem = document.createElement('span');
    sizeElem.classList.add('modal-pizza__size');
    priceSizeInfo.append(priceElem, slashElem, sizeElem);

    const updatePrice = () => {
        const selectedSizeInput = form.querySelector('input[name="size"]:checked');
        size = selectedSizeInput.value;
        priceElem.textContent = `${price[size]} ₽`;
        sizeElem.textContent = `${parseInt(size)} см`;
    }

    const form = document.createElement('form');
    form.classList.add('modal-pizza__form');
    form.id = id;
    const groupFieldset = document.createElement('div');
    groupFieldset.classList.add('modal-pizza__group');

    const fieldsetCrust = document.createElement('fieldset');
    fieldsetCrust.classList.add('modal-pizza__fieldset');
    const thickInput = createInput('thick', 'crust', 'thick', 'radio', 'modal-pizza__radio');
    const thickLabel = createLabel ('thick', 'Пышное тесто', 'modal-pizza__label');
    const thinInput = createInput('thin', 'crust', 'thin', 'radio', 'modal-pizza__radio');
    const thinLabel = createLabel('thin', 'Тонкое тесто', 'modal-pizza__label');
    thinInput.checked = true;
    fieldsetCrust.append(thickInput, thickLabel, thinInput, thinLabel);

    const fieldsetSize = document.createElement('fieldset');
    fieldsetSize.classList.add('modal-pizza__fieldset');
    const sizeInputs = Object.keys(price).map(size => createInput(size, 'size', size, 'radio', 'modal-pizza__radio'));
    sizeInputs[0].checked = true;

    sizeInputs.forEach(input => {
        const label = createLabel(input.id, `${parseInt(input.value)} см`, 'modal-pizza__label');
        input.addEventListener('change', updatePrice);
        fieldsetSize.append(input, label);
    })

    groupFieldset.append(fieldsetCrust, fieldsetSize);
    const addToCartBtn = document.createElement('button');
    addToCartBtn.classList.add('modal-pizza__add-cart');
    addToCartBtn.textContent = 'В корзину'
    form.append(groupFieldset, addToCartBtn);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('modal__close');
    closeBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="14.8333" y="4" width="0.851136" height="15.3204" transform="rotate(45 14.8333 4)" fill="#C1AB91"/>
            <rect x="4" y="4.60184" width="0.851136" height="15.3204" transform="rotate(-45 4 4.60184)" fill="#C1AB91"/>
        </svg>
    `;
    
    modalPizzaMain.append(picture, title, toppingsElem, priceSizeInfo, form, closeBtn);
    updatePrice();

    let timerId = null;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const product = {
            cartId: crypto.randomUUID(),
            id,
            crust: formData.get('crust'), 
            size: formData.get('size'),
        };

        cartControl.addCart(product);

        addToCartBtn.disabled = true;
        addToCartBtn.textContent = 'Добавлено';

        timerId = setTimeout(() => {
            addToCartBtn.disabled = false;
            addToCartBtn.textContent = 'В корзину';
        }, 3000);

        form.addEventListener('change', () => {
            clearTimeout(timerId);
            addToCartBtn.disabled = false;
            addToCartBtn.textContent = 'В корзину';
        });
    });



}

