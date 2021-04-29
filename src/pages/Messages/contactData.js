const contactData = {
    1 : {
        id:1,
        name: "Steve",        
        image_src: "/photos/Gentlemen1.jpeg",
        messages: [
            { id: 1, isYou: false, name: 'Steve', message: 'Will you do it for $25', image_src: '/photos/Gentlemen1.jpeg'},
            { id: 2, isYou: true, name: 'You', message: 'I can do it for $30', image_src: "https://i.redd.it/bcuftjt3yhp41.jpg"},
            { id: 3, isYou: false, name: 'Steve', message: 'Ok ill buy it for $30', image_src: '/photos/Gentlemen1.jpeg'},
            { id: 4, isYou: true, name: 'You', message: 'Perfect! Its yours!', image_src: "https://i.redd.it/bcuftjt3yhp41.jpg"},
        ]
    },
    2 : {
        id:2,
        name: "Carlos",        
        image_src: "/photos/Gentlemen2.jpeg",
        messages: [
            { id: 1, isYou: false, name: 'Carlos', message: 'Can you drop over the item', image_src: '/photos/Gentlemen2.jpeg'},
            { id: 2, isYou: true, name: 'You', message: 'Sure, where do you live', image_src: "https://i.redd.it/bcuftjt3yhp41.jpg"},
            { id: 3, isYou: false, name: 'Carlos', message: '123 Green street', image_src: '/photos/Gentlemen2.jpeg'},
            { id: 4, isYou: true, name: 'You', message: 'Ok, ill be there in 5 mins', image_src: "https://i.redd.it/bcuftjt3yhp41.jpg"},
        ]
    },
    3 : {
        id:3,
        name: "Jenny",        
        image_src: "/photos/Ladie1.jpeg",
        messages: [
            { id: 1, isYou: false, name: 'Jenny', message: 'Is this item still avaliable?', image_src: '/photos/Ladie1.jpeg'},
            { id: 2, isYou: true, name: 'You', message: 'Which one are you talking about', image_src: "https://i.redd.it/bcuftjt3yhp41.jpg"},
            { id: 3, isYou: false, name: 'Jenny', message: 'The Raincoat', image_src: '/photos/Ladie1.jpeg'},
            { id: 4, isYou: true, name: 'You', message: 'Sorry i sold that just 10 mins ago', image_src: "https://i.redd.it/bcuftjt3yhp41.jpg"},
        ]
    },
    4 : {
        id:4,
        name: "Ruby",        
        image_src: "/photos/Ladie2.jpeg",
        messages: [
            { id: 1, isYou: false, name: 'Ruby', message: 'You can have it for $9, best offer!', image_src: '/photos/Ladie2.jpeg'},
            { id: 2, isYou: true, name: 'You', message: 'How about $8', image_src: "https://i.redd.it/bcuftjt3yhp41.jpg"},
            { id: 3, isYou: false, name: 'Ruby', message: 'Nope $9', image_src: '/photos/Ladie2.jpeg'},
            { id: 4, isYou: true, name: 'You', message: 'Alright Ill take it', image_src: "https://i.redd.it/bcuftjt3yhp41.jpg"},
        ]
    }
}

export default contactData;