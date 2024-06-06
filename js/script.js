import { modalController } from "./modal.js";
import { renderPizzas } from "./modules/renderPizzas.js";
import { renderToppings } from "./modules/renderToppings.js";
import { toppingsToggle } from "./modules/toppingsToggle.js";
import { renderCart } from "./modules/renderCart.js";

const init = () => {
    toppingsToggle();
    renderToppings();
    renderPizzas();
    modalController({
        modal: '.modal-cart',
        btnOpen: '.header__cart',
        btnClose: '.modal__close',
        cbOpen() {
            renderCart();
        }
    })
}

init();