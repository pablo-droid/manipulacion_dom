class GalleryItem {
    constructor(inImgPath, inImgAlt, inTitle, inText) {
        this.imgPath = inImgPath;
        this.imgAlt = inImgAlt;
        this.title = inTitle;
        this.text = inText;
    }
}

const headerAssets = [
    "assets/banner/1.jpg",
    "assets/banner/2.jpg",
    "assets/banner/3.jpg",
    "assets/banner/4.jpg",
    "assets/banner/5.jpg",
    "assets/banner/6.jpg",
    "assets/banner/7.jpg",
    "assets/banner/8.jpg"
]

const galleryItemArray = [
    new GalleryItem(
        "assets/viajes/viajes-1.jpg",
        "viaje 1",
        "viaje 1",
        "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla"
    ),
    new GalleryItem(
        "assets/viajes/viajes-2.jpg",
        "viaje 2",
        "viaje 2",
        "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla"
    ),
    new GalleryItem(
        "assets/viajes/viajes-3.jpg",
        "viaje 3",
        "viaje 3",
        "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla"
    ),
    new GalleryItem(
        "assets/viajes/viajes-4.jpg",
        "viaje 4",
        "viaje 4",
        "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla"
    ),
    new GalleryItem(
        "assets/viajes/viajes-5.jpg",
        "viaje 5",
        "viaje 5",
        "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla"
    ),
    new GalleryItem(
        "assets/viajes/viajes-6.jpg",
        "viaje 6",
        "viaje 6",
        "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla"
    ),
    new GalleryItem(
        "assets/viajes/viajes-7.jpg",
        "viaje 7",
        "viaje 7",
        "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla"
    ),
]

function randInt(max) {
    return Math.floor(Math.random() * max);
}

function createHeader(headers) {
    const headerElement = document.querySelector("header");
    const headerImg = document.createElement("img");
    headerImg.src = headers[randInt(headers.length)];
    headerImg.alt = "header";
    headerElement.appendChild(headerImg);
}

function createGallery(galleryItems) {
    const sectionElement = document.querySelector(".gallery");
    const galleryItemFragment = document.createDocumentFragment();

    for (item of galleryItems) {
        const article = document.createElement("article");
        article.classList.add("card");
        const divImg = document.createElement("div");
        const img = document.createElement("img");
        img.src = item.imgPath;
        img.alt = item.imgAlt;
        const divText = document.createElement("div");
        const h3 = document.createElement("h3");
        h3.innerText = item.title;
        const p = document.createElement("p");
        p.innerText = item.text;

        article.appendChild(divImg);
        divImg.appendChild(img);
        article.appendChild(divText);
        divText.appendChild(h3);
        divText.appendChild(p);
        galleryItemFragment.appendChild(article);
    }

    sectionElement.appendChild(galleryItemFragment);
}

createHeader(headerAssets);
createGallery(galleryItemArray);