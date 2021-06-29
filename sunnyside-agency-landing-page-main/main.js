let  hamburger = document.getElementById('hamburger');
const menu_items = document.getElementById('mobile-menu-items');

function hamburger_func(){
    // mobile-menu-items
    if(menu_items.style.display === "initial"){
        menu_items.style.display = "none";
    }else{
        menu_items.style.display = "initial"
    }
    hamburger.classList.toggle("change")
}
