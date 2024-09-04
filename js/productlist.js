window.addEventListener("DOMContentLoaded", init);

const params = new URLSearchParams(document.location.search);
const category = params.get("category");

const url = `https://kea-alt-del.dk/t7/api/products?category=` + category;
const skabelon = document.querySelector("template").content;
const container = document.querySelector(".productlistMain");






function init(){
    fetch(url)
    .then((res)=>res.json())
    .then((products)=>showProducts(products));
}

function showProducts(products){
    console.log(products)
    products.forEach((product)=> {
        const kopi = skabelon.cloneNode(true);
        kopi.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
        kopi.querySelector("img").alt = product.productdisplayname;
        kopi.querySelector("h3").textContent = product.productdisplayname;
        kopi.querySelector(".price").textContent = product.price;
        kopi.querySelector(".subtle").textContent = product.brandname;
        kopi.querySelector("a").href = `product.html?id=${product.id}`;
        
        if (product.soldout) {
            kopi.querySelector(".smallProduct").classList.add("soldOut");
          }
        if (product.discount) {
            kopi.querySelector(".smallProduct").classList.add("onSale");
            kopi.querySelector(".discounted p").textContent = "Now DKK " + Math.round(product.price - (product.price * product.discount) / 100);
            kopi.querySelector(".discountProcent ").textContent ="-" + product.discount + "%";
        } else{
            kopi.querySelector(".discounted").style.display ="none";
        }

        container.appendChild(kopi);
    })

    //append 
    // document.querySelector(".product_list").appendChild(kopi);
}

