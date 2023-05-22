



/* kicks off app when the DOM is loaded */
window.addEventListener("load", generateGrid);



// globale variabler
// let myData = null; //til data objekt opgaven
const myImages = ['assets/img/Brachypelma_smithi.jpg', 'assets/img/elephant.jpg', 'assets/img/koala.jpg', 'assets/img/great-white.jpg']; // til array opgaven, byg dit array af billed urlér her.
const myApp = document.getElementById("app");



function generateGrid() {
    clearApp();

    myImages.map((imageUrl) => {
        console.log('map');
        createCard(imageUrl);
    });

}



function createCard(myUrl) {
    console.log('create card');
    let myArticleTag = document.createElement('article');
    myArticleTag.classList.add("galleryCard");
    let myImageTag = document.createElement('img');
    myImageTag.src = myUrl;
    myImageTag.addEventListener('click', clickSmall);


    myArticleTag.appendChild(myImageTag);

    myApp.appendChild(myArticleTag);

}




/* find url på det klikkede image
   send url til build big */
function clickSmall(myEvent) {
    let myUrl = myEvent.target.src;
    buildBig(myUrl);

}

function buildBig(myUrl) {
    clearApp();

    console.log('create big');
    let myArticleTag = document.createElement('article');

    myArticleTag.classList.add("detailView");

    let myImageTag = document.createElement('img');
    myImageTag.src = myUrl;
    myImageTag.addEventListener('click', generateGrid);


    myArticleTag.appendChild(myImageTag);

    myApp.appendChild(myArticleTag);

}

function clearApp() {
    myApp.innerHTML = "";
}

