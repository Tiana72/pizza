export const renderModalPizza = ({id, images, name, price, toppings}) => {
    const modalPizzaMain = document.querySelector('.modal-pizza__main');
    modalPizzaMain.textContent = '';
    let size = Object.keys(price)[0];
    const picture = document.createElement('picture');
    const source = document.createElement('source');
    source.srcset = images[1];
    source.type = 'image/webp';

}

/*
            <img class="modal-pizza__img" src="./img/pizza-capricciosa.png" alt="Capricciosa">
            <h2 class="modal-pizza__title">Capricciosa</h2>
            <p class="modal-pizza__toppings">Грибы, сыр, томатный соус, лук, болгарский перец</p>
            <p class="modal-pizza__info">
                <span class="modal-pizza__price">480 ₽</span>
                <span>/</span>
                <span class="modal-pizza__size">25 см</span>
            </p>
            <form class="modal-pizza__form">
                <div class="modal-pizza__group">
                    <fieldset class="modal-pizza__fieldset">
                        <input id="thick" class="modal-pizza__radio" type="radio" name="crust" value="thick">
                        <label for="thick" class="modal-pizza__label">Пышное тесто</label>
                        <input id="thin" class="modal-pizza__radio" type="radio" name="crust" value="thin" checked>
                        <label for="thin" class="modal-pizza__label">Тонкое тесто</label>
                    </fieldset>
    
                    <fieldset class="modal-pizza__fieldset">
                        <input id="25cm" class="modal-pizza__radio" type="radio" name="size" value="25cm" checked>
                        <label for="25cm" class="modal-pizza__label">25 см</label>
                        <input id="30cm" class="modal-pizza__radio" type="radio" name="size" value="30cm">
                        <label for="30cm" class="modal-pizza__label">30 см</label>
                        <input id="35cm" class="modal-pizza__radio" type="radio" name="size" value="35cm">
                        <label for="35cm" class="modal-pizza__label">35 см</label>
                    </fieldset>
                </div>
                <button class="modal-pizza__add-cart">В корзину</button>
            </form>
            <button class="modal__close">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="14.8333" y="4" width="0.851136" height="15.3204" transform="rotate(45 14.8333 4)" fill="#C1AB91"/>
                    <rect x="4" y="4.60184" width="0.851136" height="15.3204" transform="rotate(-45 4 4.60184)" fill="#C1AB91"/>
                </svg>                    
            </button>

*/