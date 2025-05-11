function generateId() {
  // Örnek: zaman damgası + rastgele sayı
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

class products {
  constructor(name, price,imgUrl) {
      this.id = generateId()
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
            <button  class="addToBag" data-id = "${this.id}">Add To Bag</button>
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
    const existingItem = this.bagList.find(item => item.id === product.id);
    if(existingItem){
        existingItem.quantity += 1;
    }else{

        const newItem = {
            name: product.name,
            price : product.price,
            imgUrl : product.imgUrl,  
            cartId:generateId(),
            quantity:1,
        }
        this.bagList.push(newItem);
    }
    
    localStorage.setItem("bag", JSON.stringify(this.bagList));
  }

  removeFromBag(index){
    this.bagList.splice(index,1);
    localStorage.setItem("bag",JSON.stringify(this.bagList));

  }
}


let item1 = new products("Kadın parfüm", 100, "images/item1.png");
let item2 = new products("Erkek kolej mont ", 250, "images/jacket.jpg");
let item3 = new products("Blender seti", 300, "images/blender.jpg");
let item4 = new products("Gece yarısı kütüphanesi", 150, "images/book.png");

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
const bagContainer = document.getElementById("bag-container");




bagButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id =e.target.dataset.id;

    const selectedProduct = list.listArr.find((item) => {return item.id === id});
    cart.addToBag(selectedProduct);
  });
});



