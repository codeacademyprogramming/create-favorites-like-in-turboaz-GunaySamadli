const ads = [

    {
        id: 1,
        name: "Jeep",
        price: 30000,
        currency: 'AZN',
        isVip: false,
        createAt: '11-11-2011',
        imageSrc: './assets/images/17529_PmF-4hzdngodd2-tGzmntw.jpg'
    },
    {
        id: 2,
        name: "Niva",
        price: 3000,
        currency: 'AZN',
        isVip: false,
        createAt: '13-11-2011',
        imageSrc: './assets/images/31332_OfI45xV-0Bg_j1C7zjvClA.jpg'
    },
    {
        id: 3,
        name: "Bentley",
        price: 3000000,
        currency: 'AZN',
        isVip: true,
        createAt: '13-11-2015',
        imageSrc: './assets/images/69870_9iGGjnz0IPwEutJ8WzwJ4g.jpg'
    },
    {
        id: 4,
        name: "Granta",
        price: 20000,
        currency: 'AZN',
        isVip: false,
        createAt: '13-11-2013',
        imageSrc: './assets/images/87677_vHcyInBOOlnZa36SfB4u8Q.jpg'
    },
]
const images = document.querySelector(".images");

ads.forEach(ad => {
    const adHtml = `
    <div class="col-3 first">
                <div class="car-card">
                    <div class="image-container">
                        <div class="image">
                            <img src=${ad.imageSrc}>
                        </div>
                        <div class="heart-icon">
                            <i class="bi bi-heart" id=${ad.id}></i>
                        </div>
                        <p>${ad.price} ${ad.currency} $</p>
                    </div>
                    <div class="preferences">
                        <h5>${ad.name}</h5>
                        <div class="derinlik">
                            <span>2018 il</span><span>-</span><span>2.0 L</span><span>-</span><span>133703 km</span>
                        </div>
                        <p>Baki, ${ad.createAt}</p>
                    </div>
                </div>
            </div>
    `
    images.innerHTML += adHtml;
});

const buttons = Array.from(document.querySelectorAll(".bi-heart"));

let array = [];
if (localStorage.getItem('image')) {
    array = JSON.parse(localStorage.getItem('image'));
}
buttons.forEach(button => {
    button.addEventListener('click', function () {
        let add = ads.find(ad => ad.id == button.id);
        if (button.classList.contains('bi-heart')) {
            button.classList.replace('bi-heart', 'bi-heart-fill');
            array.push(add);
            localStorage.setItem("image", JSON.stringify(array));
        } else {
            button.classList.replace('bi-heart-fill', 'bi-heart');
            let arrayes = JSON.parse(localStorage.getItem("image"));
            array = arrayes.filter(fv => fv.id != add.id)
            localStorage.setItem("image", JSON.stringify(array));
        }
    });
});



