const categoryList = document.querySelector("#categoryList");


// kalder kategorierne/ laver en request 
// gemmer det i en varibel i json format, som gives videre til brugeren 
fetch("https://kea-alt-del.dk/t7/api/categories")
.then(response=>response.json())
.then(categories =>{
    categories.forEach((category)=>{
        categoryList.innerHTML += `<li><a href="productlist.html?category=${category.category}">${category.category}</a></liv>`;
    }); 
    // categoryList.innerHTML = `<li>${categories.category}</li>`
});

// params = alle url parameter 

