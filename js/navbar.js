// Menu Toggle
let menuBtn = document.getElementById("hamburger");
let menuTab = document.getElementById('menus');
let mobileMenu = document.getElementById('mobile-menu');
let closeBtn = document.getElementById('close');

function menu() {
    menuBtn.style.display = "none";
    menuTab.style.display = "block";
    mobileMenu.style.position = "absolute";
    closeBtn.style.display = "block";
}

function closeMenu() {
    menuBtn.style.display = 'block';
    menuTab.style.display = 'none';
    closeBtn.style.display = "none"
}
// End of Menu Toggle

// Search Toggle
let searchDiv = document.getElementById('search-div');
let searchClick = document.getElementById('search');

function searchClicked() {
    searchClick.style.display = 'none';
    searchDiv.style.display = 'block';
}