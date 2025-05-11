class products {
  constructor(name, price, imgUrl) {
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
            <button  class="addToBag" data-id="${this.name}">Add To Bag</button>
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
    localStorage.setItem("list",JSON.stringify(list.listArr))
  }
}

class bag {
  constructor() {
      const storedBag= JSON.parse(localStorage.getItem("bag"));
      this.bagList = storedBag ? storedBag : []
      this.bagList = [];
    }
    
    addToBag(product) {
    localStorage.setItem("bag", JSON.stringify(cart.bagList));
    this.bagList.push(product);
    console.log(product, "sepete eklendi.");
  }
}

let item1 = new products("Perfume", 100, "item1.png");
let item2 = new products("jacket", 250, "jacket.jpg");
let item3 = new products("Blender", 300, "blender.jpg");
let item4 = new products("Book", 150, "book.png");


const list = new productList();
const cart = new bag();
const productsContainer = document.getElementById("products-container");
localStorage.setItem("listArr", JSON.stringify(list.listArr));

list.addProduct(item1);
list.addProduct(item2);
list.addProduct(item3);
list.addProduct(item4);

list.listArr.map((item) => {
  productsContainer.innerHTML += item.renderAll();
});

const bagButton = document.querySelectorAll(".addToBag");
const bagContainer = document.getElementById("bag-container");

bagButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const name = e.target.dataset.id;

    const selectedProduct = list.listArr.find((item) => {
      return item.name == name;
    });
    cart.addToBag(selectedProduct);
    // bagContainer.innerHTML = cart.renderAll();
  });
});
