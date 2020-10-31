console.log("content");

let images = document.getElementsByTagName('img');

let fileNames = [
    "images/33087a22aa76ea4af088a763a4f65cec.jpg",
    "images/boo-worlds-cutest-dog-today-190119-main-01_e936818b2af79715c69ec876aa1361ef.jpg",
    "images/dltqk6q2w0oz.jpg",
    "images/download.jpeg",
    "images/images.jpeg",
    "images/maxresdefault.jpg",
    "images/shih-tzu-puppies.jpg",
    "images/shutterstock_673465372.jpg"
];

function doit() {

    let images = document.getElementsByTagName('img');
    console.log(images);

    for(let img of images) {
        let idx = Math.floor(Math.random() * fileNames.length);
        let path = chrome.extension.getURL(fileNames[idx]);
        console.log(path);
        img.src = path;
    }

}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

    if(message.data == true) {
        doit();
    }
});