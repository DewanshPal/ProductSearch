const search = () =>{
    const searchbox  = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.querySelector(".product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeitems.getElementsByTagName('h23');
    for(let i=0; i<pname.length; i++)
    {
        let match = product[i].querySelector(".product-info").getElementsByTagName('h23')[0].innerHTML;
        if(match.toUpperCase().indexOf(searchbox) > -1)
        {
            product[i].style.display = "";
        }
        else
        {
            product[i].style.display = "none";
        }
    }
}