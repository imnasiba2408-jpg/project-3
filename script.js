
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });

    document.getElementById("count").textContent = cart.length;

    alert(name + " добавлен в корзину!");
}

function showCart() {
    if (cart.length === 0) {
        alert("Корзина пока пуста!");
        return;
    }

    const items = cart.map((item, index) =>
        `${index + 1}. ${item.name} — $${item.price}`
    ).join("\n");

    const total = cart.reduce(
        (sum, item) => sum + item.price, 0
    );

    alert(
        "BASKET ELITE — YOUR CART\n\n" +
        items +
        "\n\nTOTAL: $" + total
    );
}

function sendMessage(event) {
    event.preventDefault();

    document.getElementById("message").textContent =
        "Спасибо! Ваше сообщение заполнено.";

    event.target.reset();
}
