var products=JSON.parse(localStorage.getItem("products"));
var newdata=JSON.parse(localStorage.getItem("newProductData"))||[];

displayData(products);

function displayData(products)
{
    product.map(function(elem){
        var div=document.createElement("div");

        var img=document.createElement("img");
        img.setAttribute("src",elem.image);

        var name=document.createElement("p");
        name.textContent=elem.name;

        var price=document.createElement("p");
        price.textContent=elem.price;

        var type=document.createElement("p");
        type.textContent=elem.type;

        var button=document.createElement("button");
        button.textContent="Add Products";

        button.querySelector("button").addEventListener("click", function(){
            AddProducts(elem);

        });

        div.append(img,name,price,type,button);

        document.querySelector("#products_data").append(div);


    });
}

function AddProducts(elem){
    newdata.push(elem);

    localStorage.setItem("newProductData", JSON.stringify(newdata));

}