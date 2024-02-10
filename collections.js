var productcontainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");
var noDataDiv = document.createElement("div");
noDataDiv.innerHTML = "<h4>No data</h4>";

console.log(productlist)

search.addEventListener("keyup", function() {
  
    var enteredVlaue = event.target.value.toUpperCase();
    var hasMatchingProduct = false;
    for(count=0;count<productlist.length;count=count+1){
        var productName= productlist[count].querySelector("p").textContent;
        if(productName.toUpperCase().indexOf(enteredVlaue)<0)
        {
            productlist[count].style.display="none";
            
        }
        else 
        {
            productlist[count].style.display="block";
            hasMatchingProduct = true;
            
        }
    }
    if (!hasMatchingProduct) {
        productcontainer.appendChild(noDataDiv);
    } else {
        // Remove the noDataDiv if it's already appended
        if (productcontainer.contains(noDataDiv)) {
            productcontainer.removeChild(noDataDiv);
        }
    }

 });