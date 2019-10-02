// let products = {
//         mens: [{
//             glasses: [{
//                 id: "glass1",
//                 price: 10,
//                 image: "N/A",
//             },
//             {
//                 id: "glass2",
//                 price: 10,
//                 image: "N/A"
//             }],
//             accesories: [{}],
//         }],
//         womens: [{
//             glasses: [{
//                 id: "glass1",
//                 price: 15,
//                 image: "N/A",
//             },
//             {
//                 id: "glass2",
//                 price: 15,
//                 image: "N/A"
//             }],
//             accesories: [{}],
//         }],       
        
// }

let mensProducts = {
        glasses: [{
            id: "glass1",
            price: 10,
            image: "N/A"
        },
        {
            id: "glass2",
            price: 10,
            image: "N/A"
        }],
        accessories: [],
}

let womensProducts = {
    glasses: [{
        id: "glass1",
        price: 15,
        image: "N/A"
    },
    {
        id: "glass2",
        price: 15,
        image: "N/A"
    }],
    accessories: [],
}

const renderProducts = function() {
    console.log(mensProducts);
    console.log(this);

    $(`#mensProdTable`).empty();
    for ( let i = 0; i < mensProducts.glasses.length; i++) {
    $(`#mensProdTable`).append(`
        <div class="col-lg-2 mensGlass" id="glasses${i}">
            <button type="button" class="btn btn-info btn-lg" id="${mensProducts.glasses[i].id}">Open Modal</button>
            <p>Price is: ${mensProducts.glasses[i].price}</p>
        </div>
    `)
    }

}

renderProducts();
