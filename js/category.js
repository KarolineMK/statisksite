const categoryList = document.querySelector("#categorylist");
const params = URLSearchParams(document.location.search);
const category = params.get("category");
let url = undefined; 

// kalder kategorierne/ laver en request 
// gemmer det i en varibel i json format, som gives videre til brugeren 
fetch("https://kea-alt-del.dk/t7/api/categories").then(response=>response.json()).then(categories =>{
    categories.forEach((category)=>{
        categoryList.innerHTML += `<li><a href="index.html?category=${category.category}">${category.category}</a></liv>`;
    }); 
    // categoryList.innerHTML = `<li>${categories.category}</li>`
});

// params = alle url parameter 
if(params.has("category")){
    url = "https://kea-alt-del.dk/t7/api/prdoucts?category=" + category;
}else{
    url = "https://kea-alt-del.dk/t7/api/prdoucts";
}
    

