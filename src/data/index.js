const navbarOptions = ['Home', 'About', 'Service', 'Portfolio', 'Shop', 'Blog', 'Contact'];

const products = [
    {
        "id": 1,
        "name": "vegetable",
        "pic": "fe1.jpg"
    },
    {
        "id": 2,
        "name": "fruit",
        "pic": "fe2.jpg"
    },
    {
        "id": 3,
        "name": "milk",
        "pic": "fe3.jpg"
    }
]

const foods = [
    {
        'id': 1,
        'name': 'Fress Apple',
        'pic': 's5-150x150.jpg',
        'discount': false,
        'price': null,
        'lastPrice': '$18'
    },
    {
        'id': 2,
        'name': 'Fress Cobie',
        'pic': 's2-150x150.jpg',
        'discount': true,
        'price': '$18',
        'lastPrice': '$17'
    },
    {
        'id': 3,
        'name': 'Fresh Watermelon',
        'pic': 's8-150x150.jpg',
        'discount': false,
        'price': null,
        'lastPrice': '$15'
    },
    {
        'id': 4,
        'name': 'Organic Juice',
        'pic': 's1-150x150.jpg',
        'discount': true,
        'price': '$20',
        'lastPrice': '$15'
    },
    {
        'id': 5,
        'name': 'Fress Blueberries',
        'pic': 's4-150x150.jpg',
        'discount': true,
        'price': '$19',
        'lastPrice': '$14'
    },
    {
        'id': 6,
        'name': 'Organic Letus',
        'pic': 's10-150x150.jpg',
        'price': null,
        'discount': false,
        'lastPrice': '$23'
    },
    {
        'id': 7,
        'name': 'Red Gajor',
        'pic': 's9-150x150.jpg',
        'discount': true,
        'price': '$29',
        'lastPrice': '$26'
    },
    {
        'id': 8,
        'name': 'Naga Pepper',
        'pic': 's7-150x150.jpg',
        'price': null,
        'discount': false,
        'lastPrice': '$21'
    }
]

const trends = foods.splice(3,4)

export{navbarOptions, products, foods, trends};