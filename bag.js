const bagContainer =document.getElementById("bag-container");
var storedBag = JSON.parse(localStorage.getItem("bag")) || [];

if(bagContainer){
        
        bagContainer.innerHTML = storedBag.map(
            (item) =>
                `    
            <div class = "product">
            <img src = "${item.imgUrl}" alt="${item.name}" width = "150px" height="150px"  />
            <h2 class="name">${item.name}</h2>
            <p class="price">${item.price}</p>
            <button class="delete" data-id=${item.id}>Delete</button>
            </div>
            
             ${item.price}
            ` 

        )
    }

const deleteBtn = document.querySelectorAll('.delete');

deleteBtn.forEach((btn) => {
    btn.addEventListener('click',() => {
        const id = parseInt(btn.dataset.id);
        const updateBag = storedBag.filter(item => item.id !==id )
        localStorage.setItem("bag",JSON.stringify(updateBag))
        location.reload();
    })
})



const totalSpan = document.createElement("span");

