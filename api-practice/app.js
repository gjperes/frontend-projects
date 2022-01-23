const btn = document.querySelector("button");
const ul = document.querySelector(".waifus");

const createWaifu = (url) => {
    const novaWaifu = document.createElement('img');
    novaWaifu.src = url;
    return novaWaifu;
}

const novoLi = (img) => {
    const li = document.createElement('li');
    li.append(img);
    return li;
}

const getWaifu = async () => {
    const url = "https://api.waifu.pics/sfw/waifu";
    try {
        const res = await fetch(url);
        const data = await res.json();
        ul.append( novoLi( createWaifu(data.url) ) );
    } catch (error) {
        console.log("Deu treta", error);
    }
}

btn.addEventListener("click", function() {
    getWaifu();
})
