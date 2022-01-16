function tagSelectorProducts() {
    tagStorage.classList.toggle("tag-products");
//    tagStorage.textContent = tagStorage.classList;
}
productsTagButton.onclick = tagSelectorProducts;

function tagSelectorChristmas() {
    tagStorage.classList.toggle("tag-christmas");
}
christmasTagButton.onclick = tagSelectorChristmas;

function tagSelectorPortraits() {
    tagStorage.classList.toggle("tag-portraits");
}
portraitsTagButton.onclick = tagSelectorPortraits;

function tagSelectorFood() {
    tagStorage.classList.toggle("tag-food");
}
foodTagButton.onclick = tagSelectorFood;

function tagSelectorMusic() {
    tagStorage.classList.toggle("tag-music");
}
musicTagButton.onclick = tagSelectorMusic;
    
function listTagStorageClasses() {
    tagStorage.textContent = tagStorage.classList;
}
tagStorage.onclick = listTagStorageClasses;