const bagContainer =document.getElementById("bag-container")
const storedBag = JSON.parse(localStorage.getItem("bag")) || [];


const renderCart = (bagList) => {
    bagContainer.innerHTML = bagList.map(
        (item) =>
            `    <div class = "product">
                <img src = "${item.imgUrl}" alt="${this.name}" width = "150px" height="150px"  />
                <h2 class="name">${item.name}</h2>
                <p class="price">${item.price}</p>
                </div>
                
                ` 
    )
}

renderCart(storedBag);