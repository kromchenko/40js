console.log("App was load...");

import render from './lib/renderHtml';
import header from './components/Header';
import main from './components/Main';

const _header = header();
const _main = main();

// console.log(_header);
// console.log(_main);

render("app", _header);
render("app", _main);

if(
    !localStorage.getItem("cart") || 
    !Array.isArray(JSON.parse(localStorage.getItem("cart")))
){
    localStorage.setItem("cart",JSON.stringify([]));
}


[...document.getElementsByClassName ('nav-item')]
    .map(el => el.addEventListener("click", () => console.log("nav-item")));

[...document.getElementsByClassName ('add_to_cart')]
    .map(el => el.addEventListener("click", (e) => {
        console.log("Add");

        let cart = JSON.parse(localStorage.getItem("cart"));

        cart.push({
            id: e.target.dataset.id,
            price: e.target.dataset.price,
            title: e.target.dataset.title,
        });

        localStorage.setItem("cart",JSON.stringify(cart));
    }));

        