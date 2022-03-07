//store the products array in localstorage as "products"
document.querySelector("#form").addEventListener("Submit",addItem);
var prod=JSON.parse(localStorage.getItem("products"))||[];
function addItem(event)
{ 
    event.preventDefault();

    var name=document.getElementById("name").value;
    
    var price= document.getElementById("price").value;

    var type= document.getElementById("type").value;

    var image= document.getElementById("images").value;


    var prodobj={
        name:name,
        price:price,
        type:type,
        image:image,
    };

    prod.push(prodobj);
    // console.log(prod);
    localStorage.setItem("products", JSON.stringify(prod));
}
document.querySelector("button").addEventListener("click", function()
{
    window.location.href="inventory.html";
});