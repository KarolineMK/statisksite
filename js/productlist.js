window.addEventListener("DOMContentLoaded", init);

const url = `https://kea-alt-del.dk/t7/api/products?limit=15`;
const skabelon = document.querySelector("template").content;
const container = document.querySelector("main");

fetch ("https://kea-alt-del.dk/t7/api/products")
.then(res=>res.json())
.then(showProducts)

function init(){
    fetch(url)
    .then((res)=>res.json())
    .then((products)=>showProducts(products));
}

function showProducts(products){
    products.forEach((product)=> {
        const kopi = skabelon.cloneNode(true);
        kopi.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
        kopi.querySelector("img").alt = product.productdisplayname;
        kopi.querySelector("h3").textContent = product.productdisplayname;
        kopi.querySelector(".price").textContent = product.price;
        kopi.querySelector("a").href = `product.html?id=${product.id}`;
        kopi.querySelector(".subtle").textContent = product.brandname;
        container.appendChild(kopi);
    })

    kopi.querySelector(".read_more").setAttribute("href", `product.html?id=${product.id}`);
    //append 
    document.querySelector(".product_list").appendChild(copy);
}

