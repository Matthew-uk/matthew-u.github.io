ityped.init(document.querySelector(".iTyped"), 
{
    showCursor:true,
    strings:['Car Marketing Site', 'All Tokunbo vehicles', 'Just for you']

});

$("#img").draggable();

AOS.init(
    {
        offset:200,
        duration:1000
    }
);
$("#video").draggable();

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchText");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        console.log(a.innerHTML.toUpperCase().indexOf(filter))
        
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

