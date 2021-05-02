const products = [
    { id: 1, name: 'Macbook', description: 'Laptop', category: 'Electronics All', price: '$550', image: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs-jpg.webp'},
    { id: 2, name: 'Text Book', description: 'Math textbook',  category: 'Education All', price: '$50', image: 'https://clarkchronicle.com/wp-content/uploads/2017/05/int-math-1500x994.jpg'},
    { id: 3, name: 'Trading cards', description: 'Baseball trading cards',  category: 'Entertainment All', price: '$20', image: 'https://cdn.abcotvs.com/dip/images/6839092_100720-ktrk-sports-trading-cards.png'},
    { id: 4, name: 'Glass Electric Kettle', description: 'Glass Electric Kettle',  category: 'Cooking All', price: '$30', image: 'https://images-na.ssl-images-amazon.com/images/I/812C5q3i5%2BL._AC_SL1500_.jpg'},
    { id: 5, name: 'Canon EOS 600D', description: 'Camera',  category: 'Electronics All', price: '$200', image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Canon_EOS_600D_with_EF-S_18-55mm.jpg'},
    { id: 6, name: 'dumbells', description: 'dumbells 100lb each',  category: 'Health and Fitness All', price: '$15', image: 'https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/63835204/858a28f5f1cee0a3736ab5aceff40467.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27ad3086bf6cb635f15a0ada48c092f3'},
    { id: 7, name: 'Squier Affinity Tele, Buttercotch Blonde',  category: 'Entertainment All', description: 'telecaster guitar', price: '$150', image: 'https://www.jazzguitar.be/forum/attachments/guitar-amps-gizmos/67401d1577290717-squier-affinity-tele-butterscotch-blonde-butterscotch-blonde-jpg'},
    { id: 8, name: '9 Fishing Bobbers', description: 'fishing bobbers',  category: 'Garden and Outdoor All', price: '$2', image: 'https://images-na.ssl-images-amazon.com/images/I/71GOt4lKLkL._AC_SX425_.jpg'},
]


// products.push(JSON.parse(localStorage.getItem("productObject")))

localStorage.setItem('products', JSON.stringify(products))

export default products