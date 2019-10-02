let products = {
    glasses: [{
        id: "glass1",
        price: 100,
        image: "",
        gender: "M"
    },
    {
        id: "glass3",
        price: 100,
        image: "",
        gender: "M"
    },
    {
        id: "glass5",
        price: 100,
        image: "",
        gender: "M"
    },
    {
        id: "glass4",
        price: 100,
        image: "",
        gender: "M"
    },
    {
        id: "glass1",
        price: 100,
        image: "",
        gender: "M"
    },
    {
        id: "glass1",
        price: 100,
        image: "",
        gender: "M"
    },
    {
        id: "glass1",
        price: 100,
        image: "",
        gender: "M"
    },
    {
        id: "glass1",
        price: 100,
        image: "",
        gender: "M"
    },
    {
        id: "glass1",
        price: 100,
        image: "",
        gender: "M"
    },
    {
        id: "glass1",
        price: 100,
        image: "",
        gender: "M"
    },
    {
        id: "glass1",
        price: 100,
        image: "",
        gender: "M"
    },
    {
        id: "glass2",
        price: 200,
        image: "",
        gender: "F"
    }],
    accessories: []
}

const renderProducts = function() {
    console.log(products);
    console.log(this);

    $(`#mensProdTable`).empty();
    for ( let i = 0; i < products.glasses.length; i++) {
        if (products.glasses[i].gender === "M") {
    $(`#mensProdTable`).append(`
        <div class="mensGlass row container" id="glasses${i}">
            <div class="col-4" id="glassImg">
                <p>I will show an image</p>
            </div>
            <div class="col-8" id="prodInfo">
                <span>${products.glasses[i].id}</span> <span>${products.glasses[i].price}</span>
                <p>;kjjklkjd;akfj;ka;kfj;kfja;kfj;kfak;lf
                    j;kdfjakjk;fj;adjf;kfj;akfjkfjkafjkdjf
                    kldfk;ajfk;lfj;ajf;fjkaf;lfjadkf;fj;af
                    ;lkajfk;jfkfj;j;afjjfjdjf;afj;klfja;lkf
                </p>
        </div>
    `)
    } else {
        return;
    } 
}
}

renderProducts();
