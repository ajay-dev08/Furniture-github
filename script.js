// ================= CART =================

let cartCount = 0;

function addToCart() {

    cartCount++;

    document.getElementById("cartCount").innerText = cartCount;

    alert("Furniture added to cart!");
}


// ================= FILTER PRODUCTS =================

function filterProducts(category) {

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });
}


// ================= SEARCH =================

function searchProducts() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const productName =
            product
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (productName.includes(search)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });
}


// ================= ABOUT MESSAGE =================

function showMessage() {

    alert(
        "Welcome to WoodCraft Furniture! We provide premium quality furniture for your home."
    );

}


// ================= CONTACT FORM =================

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you " +
        name +
        "! Your message has been sent successfully."
    );

    document.querySelector("form").reset();

}