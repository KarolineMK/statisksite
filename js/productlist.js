fetch ("https://kea-alt-del.dk/t7/api/products")
.then(res=>res.json())
.then(showProducts)

function showProducts(products){
    //looper og kalder showProduct
    products.forEach(showProduct)
} 

function showProduct(product){ 
    // console.log(product);
    //fang template
    const template = document.querySelector ("#smallProductTemplate").content;
    //lav en kopi 
    const copy = template.cloneNode(true);
    //ændre indhold 
    copy.querySelector("h3").textContent=product.productdisplayname;
    if(product.soldout){
        //produktet er udsolgt 
        copy.querySelector("article").classList.add("soldOut");
    }
    //appende 
    document.querySelector("main").appendChild(copy);

    //vis billede img 
    const img = copy.querySelector("img");
    img.src = `https://kea-alt-del.dk/t7/images/webp/${id}.webp`;
    img.alt = product.productdisplayname;
}



// {
//     "id": 1164,
//     "gender": "Men",
//     "category": "Apparel",
//     "subcategory": "Topwear",
//     "articletype": "Tshirts",
//     "season": "Winter",
//     "productionyear": 2015,
//     "usagetype": "Sports",
//     "productdisplayname": "Blue T20 Indian Cricket Jersey",
//     "price": 1595,
//     "discount": 28,
//     "brandname": "Nike",
//     "soldout": 1
//   }