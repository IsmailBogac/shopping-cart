function renderCart(){
    let storedBag = JSON.parse(localStorage.getItem("bag") || []);
    const bagContainer = document.getElementById('bag-container');

    bagContainer.innerHTML = "";

    storedBag.forEach((item,index) => {
            bagContainer.innerHTML+= 
            `
                <div class="product">
                <img src="${item.imgUrl}" alt="${item.name}" width="150" />
                <h3>${item.name} (x${item.quantity})</h3>
                <p class="price" >${item.price}</p>
                <button class="delete-btn" data-index="${index}" >Delete</button>
            </div>

            `
    });
    
    document.querySelectorAll('.delete-btn').forEach((btn) => {
        btn.addEventListener('click',(e) => {
            const index = parseInt(e.target.dataset.index);
            storedBag.splice(index,1);
            localStorage.setItem("bag",JSON.stringify(storedBag));
            renderCart();
        })
    })
    let total = storedBag.reduce((sum,item) => sum + Number(item.price * item.quantity),0)
document.getElementById('total-price').textContent = total;
}
        
        window.onload = () => {
  document.getElementById('delete-all').addEventListener('click', () => {
    localStorage.removeItem("bag");
    location.reload(); // Sayfayı yeniler
  });

  renderCart();
};

    
    renderCart();