class products {
  constructor(id,name, price, imgUrl) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imgUrl = imgUrl;
  }
  renderAll() {
    return `
            <div class = "product">
            <img src = "${this.imgUrl}" alt="${this.name}" width = "150px" height="150px"  />
            <h2 class="name">${this.name}</h2>
            <p class="price">${this.price}</p>
            <button  class="addToBag" data-id="${this.id}">Add To Bag</button>
            </div>
        `;
  }
}

class productList {
  constructor() {
    this.listArr = [];
    console.log(this.listArr);
  }
  addProduct(product) {
    this.listArr.push(product);
    localStorage.setItem("listArr", JSON.stringify(list.listArr));
  }
}

class bag {
  constructor() {
    const storedBag = JSON.parse(localStorage.getItem("bag"));
    this.bagList = storedBag ? storedBag : [];
  }

  addToBag(product) {
    this.bagList.push(product);
    localStorage.setItem("bag", JSON.stringify(this.bagList));
    console.log(product, "sepete eklendi.");
  }
}

let item1 = new products(1,"Perfume", 100, "item1.png");
let item2 = new products(2,"jacket", 250, "jacket.jpg");
let item3 = new products(3,"Blender", 300, "blender.jpg");
let item4 = new products(4,"Book", 150, "book.png");

const list = new productList();
const cart = new bag();
const productsContainer = document.getElementById("products-container");


list.addProduct(item1);
list.addProduct(item2);
list.addProduct(item3);
list.addProduct(item4);

localStorage.setItem("listArr", JSON.stringify(list.listArr));

list.listArr.map((item) => {
  productsContainer.innerHTML += item.renderAll();
});

const bagButton = document.querySelectorAll(".addToBag");

bagButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id =parseInt(e.target.dataset.id);

    const selectedProduct = list.listArr.find((item) => {
      return item.id == id;
    });
    cart.addToBag(selectedProduct);
  });
});
