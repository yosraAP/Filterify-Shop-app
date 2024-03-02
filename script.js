// Fake Data ==============================================
const data = [
  {
    id: 1,
    name: "Portable tactile de 15,6 HP",
    img: "./img/6.png",
    price: 1000.44,
    cat: "Laptop",
  },
  {
    id: 2,
    name: "Moniteur jeu HD 27po HP",
    img: "./img/5.png",
    price: 2830.99,
    cat: "Laptop",
  },
  {
    id: 3,
    name: "Imprimante laser tout-en-un",
    img: "./img/9.png",
    price: 254.44,
    cat: "Imprimante",
  },
  {
    id: 4,
    name: "Portable de jeu de 15,6 po",
    img: "./img/4.png",
    price: 1300,
    cat: "Laptop",
  },
  {
    id: 5,
    name: "Ordinateur tout-en-un",
    img: "./img/3.png",
    price: 1099,
    cat: "Laptop",
  },
  {
    id: 6,
    name: "Caméra Web HD 1080p",
    img: "./img/11.png",
    price: 55,
    cat: "Camera",
  },
  {
    id: 7,
    name: "Écouteurs sans Fil",
    img: "./img/8.png",
    price: 190,
    cat: "Ecouteur",
  },
  {
    id: 8,
    name: "Apple Watch SE (GPS)",
    img: "./img/15.png",
    price: 330,
    cat: "Watch",
  },
  {
    id: 9,
    name: "iPaD 10,2po 64Go",
    img: "./img/1.png",
    price: 490,
    cat: "Ipad",
  },
  {
    id: 10,
    name: "Montre GPS de 45mm ",
    img: "./img/16.png",
    price: 299,
    cat: "Watch",
  },
  {
    id: 11,
    name: "Chromebook tactile de 14po",
    img: "./img/14.png",
    price: 25,
    cat: "Laptop",
  },
  {
    id: 12,
    name: "Projecteur de cinéma",
    img: "./img/12.png",
    price: 1080,
    cat: "Camera",
  },
  {
    id: 14,
    name: "Imprimante jeT encre",
    img: "./img/10.png",
    price: 620,
    cat: "Imprimante",
  },
  {
    id: 14,
    name: "Imprimante Sans fil",
    img: "./img/13.png",
    price: 250,
    cat: "Imprimante",
  },
  {
    id: 15,
    name: "IPAD AiR 10,9 po",
    img: "./img/7.png",
    price: 1290,
    cat: "Ipad",
  },

];

// Variables ==================================================
const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

// Display all products =======================================
const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
        <div class="product">
          <img
          src=${product.img}
          alt=""
          />
          <span class="name">${product.name}</span>
          <span class="priceText">Price: $${product.price}</span>
        </div>
    `
    )
    .join("");
};
displayProducts(data);

// Add event listener for search input ===========================
searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

// Set Categories =================================================
const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  const categories = [
    "All",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];

  categoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `
      <span class="cat">${cat}</span>
    `
    )
    .join("");

  // Event listener for category ===================================
  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "All"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};

// Search by price range =========================================
const setPrices = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = "$" + maxPrice;

    // Price range event listener =====================================
  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};

setCategories();
setPrices();
