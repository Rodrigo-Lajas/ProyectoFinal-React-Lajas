const products = [
    {
        id: '1',
        name: 'Galaxy A14 4g',
        price: 179,
        category: 'Samsung',
        stock: 3,
        description:'Samsung A14 4g',
        img: "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/4bc237c39ea3bd569ee738bf9a6d02c2/s/a/samsung-a14-front.png"
    },
    {
        id: '2',
        name: "G13 128gb 4g",
        price: 165,
        category: 'Motorola',
        stock: 1,
        description:'Motorola G13 128gb 4g',
        img: "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/4bc237c39ea3bd569ee738bf9a6d02c2/m/o/moto-g13_128.png"
    },
    {
        id: '3',
        name: "Redmi Note 11",
        price: 206,
        category: 'Xiaomi',
        stock: 6,
        description:'Xiaomi Redmi Note 11',
        img: "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/4bc237c39ea3bd569ee738bf9a6d02c2/r/e/redmi-11-note_4.png"
    },
    {
        id: '4',
        name: 'Galaxy A54 5G',
        price: 498,
        category: 'Samsung',
        stock: 5,
        description:'Samsung Galaxy A54 5G 128gb',
        img: "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/4bc237c39ea3bd569ee738bf9a6d02c2/s/a/samsung_a54_graphite_front_2_1.png"
    },
    {
        id: '5',
        name: "Blade A33 Plus",
        price: 52,
        category: 'ZTE',
        stock: 5,
        description: 'ZTE Blade A33 Plus',
        img: "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/4bc237c39ea3bd569ee738bf9a6d02c2/z/t/zte-blade-a33-plus-front.png"
    },
    {
        id: '6',
        name: 'Redmi 12C',
        price: 159,
        category: 'Xiaomi',
        stock: 6,
        description: 'Xiaomi Redmi 12C',
        img: "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/4bc237c39ea3bd569ee738bf9a6d02c2/r/e/redmi-12c.png"
    },
    {
        id: '7',
        name: 'Galaxy S21FE 5G',
        price: 649, 
        category: 'Samsung',
        stock: 4,
        description: 'Samsung Galaxy S21FE 5G',
        img: "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/4bc237c39ea3bd569ee738bf9a6d02c2/s/m/sm-g990_s21fe_front_za_1_8_3.png"
    },
    {
        id: '8',
        name: 'Razr 40 5G',
        price: 799,
        category: 'Motorola',
        stock: 4,
        description: 'Motorola Razr 40 5G',
        img: "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/4bc237c39ea3bd569ee738bf9a6d02c2/m/o/moto-razr40-case-charger_1.png"
    },
    {
        id: '9',
        name: 'TCL 408',
        price: 108,
        category: 'TCL',
        stock: 3,
        description: 'TCL 408',
        img: "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/4bc237c39ea3bd569ee738bf9a6d02c2/t/c/tcl-408-front.png"
    },
    {
        id: '10',
        name: 'Galaxy S23 Ultra',
        price: 1389,
        category: 'Samsung',
        stock: 7,
        description: 'Samsung Galaxy S23 Ultra',
        img: "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/4bc237c39ea3bd569ee738bf9a6d02c2/s/2/s23_ultra_black_frente_2.png"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {

        setTimeout(() => {
            resolve(products.filter(prod=> prod.category === categoryId))
        }, 500);
    })
}