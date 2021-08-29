
const addArticle = document.getElementById("add-article");
addArticle.addEventListener("click", function () {
    //create div
    const createArticle = document.createElement('div');
    //create class name of div
    createArticle.classList = "article";
    //create h1 and p
    const titleH1 = document.createElement("h1");
    const bodyP = document.createElement("p");
    //insert text of h1 and p
    titleH1.innerText = "Article-1";
    bodyP.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellendus consequatur atque eaque cupiditate dignissimos! Beatae qui cumque facilis accusantium.";
    //append h1 and p into div
    createArticle.appendChild(titleH1);
    createArticle.appendChild (bodyP);
    //append child into container
    document.getElementById("container").appendChild(createArticle);
    console.log(createArticle);
})


const removeArticle = document.getElementById("remove-article");
removeArticle.addEventListener("click", function () {
    const container = document.getElementById("container");
    //remove the last child of container
    container.removeChild(container.lastElementChild);

})