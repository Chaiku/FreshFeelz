let products = {
    glasses: [{
        id: "glass1",
        price: 100,
        image: "glass1",
        gender: "M"
    },
    {
        id: "glass3",
        price: 100,
        image: "glass2",
        gender: "M"
    },
    {
        id: "glass5",
        price: 100,
        image: "glass3",
        gender: "M"
    },
    {
        id: "glass4",
        price: 100,
        image: "glass3",
        gender: "M"
    },
    {
        id: "glass2",
        price: 100,
        image: "glass2",
        gender: "M"
    },
    {
        id: "glass6",
        price: 100,
        image: "glass1",
        gender: "M"
    },
    {
        id: "glass7",
        price: 100,
        image: "",
        gender: "M"
    },
    {
        id: "glass8",
        price: 100,
        image: "",
        gender: "M"
    }],
    accessories: []
}

let cart = []

const addToCart = function(e) {
    e.preventDefault();
    console.log(this.id);
    let updateName = this.id;

    for ( let i = 0; i < products.glasses.length; i++) {
        if(updateName === products.glasses[i].id) {

            let purchase = {
                name: products.glasses[i].id,
                cost: products.glasses[i].price
            };
            cart.push(purchase);
        }
    }
    console.log(cart);
}

const renderProducts = function() {
    console.log(products);
    console.log(this);

    $(`#mensProdTable`).empty();
    for ( let i = 0; i < products.glasses.length; i++) {
        if (products.glasses[i].gender === "M") {
    $(`#mensProdTable`).append(`
        <div class="mensGlass row container" id="glasses${i}">
            <div class="col-4" id="glassImg" style="background-image: url('./Assets/Glasses/${products.glasses[i].image}.jpg');"></div>
            <div class="col-8" id="prodInfo">
                <span>${products.glasses[i].id}</span> <span>${products.glasses[i].price}</span>
                <p>;kjjklkjd;akfj;ka;kfj;kfja;kfj;kfak;lf
                    j;kdfjakjk;fj;adjf;kfj;akfjkfjkafjkdjf
                    kldfk;ajfk;lfj;ajf;fjkaf;lfjadkf;fj;af
                    ;lkajfk;jfkfj;j;afjjfjdjf;afj;klfja;lkf
                </p>
                <button class="btn btn-success" id="${products.glasses[i].id}">Add to Cart</button>
        </div>
    `)
    } else {
        return;
    } 
    $(`#${products.glasses[i].id}`).on("click", addToCart);
}
}

renderProducts();
