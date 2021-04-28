/*const posts = [
    { id : 1, name : 'Bob', message : 'I had one, theyre junk!'},
    { id : 2, name : 'Darwin', message : 'Can I rent to own?'},
    { id : 3, name : 'Alice', message : 'Is this still avaliable?'},
    { id : 4, name : 'Sven', message : 'More pictures please.'},
]*/

const posts = {
    
    1: { id : 1, username : 'Bob', title: "Need a laptop?", 
    body : "Cheese is good.",
    comments : [
        { username: "Rick", message: "Favorite kind?"},
        { username: "Bob", message: "Hey Rick, I am open for any suggestions."},
        { username: "Rick", message: "Sounds good to me!"},
        { username: "Alice", message: "What size are you thinking?"},
        { username: "Bob", message: "Definitely gouda!"}
    ]},

    2: { id : 2, username : 'Bob', title: "A book.", 
    body : "My item for sale.",
    comments : [
        { username: "Rick", message: "I don't even know how to use one."},
        { username: "Bob", message: "does it come with instructions?"},
        { username: "Rick", message: "Looks good to me!"},
        { username: "Alice", message: "What time are you thinking?"},
        { username: "Bob", message: "Yay!"}
    ]},

    3: { id : 3, username : 'Bob', title: "A thing.", 
    body : "For sale.",
    comments : [
        { username: "Rick", message: "Brilliant."},
        { username: "Bob", message: "Nice!"},
        { username: "Rick", message: "Sounds good to me!"},
        { username: "Alice", message: "How much are you thinking?"},
        { username: "Bob", message: "One million dollars"}
    ]},

    4: { id : 4, username : 'Bob', title: "Needs gone.", 
    body : "Need it gone.",
    comments : [
        { username: "Rick", message: "This is fantastic."},
        { username: "Bob", message: "Stay away from it."},
        { username: "Rick", message: "Looks okay to me!"},
        { username: "Alice", message: "Waterproof?"},
        { username: "Bob", message: "Do I feed it?"}
    ]},

    5: { id : 5, username : 'Bob', title: "Take it.", 
    body : "Be gone.",
    comments : [
        { username: "Rick", message: "I don't even know how to use one."},
        { username: "Bob", message: "Yikes"},
        { username: "Rick", message: "Sounds perfect to me!"},
        { username: "Alice", message: "What does it weigh?"},
        { username: "Bob", message: "Rock on."}
    ]},

    6: { id : 6, username : 'Bob', title: "Stuff.", 
    body : "Adios.",
    comments : [
        { username: "Rick", message: "I don't even know how to use one."},
        { username: "Bob", message: "Great!"},
        { username: "Rick", message: "Sounds a bit much to me!"},
        { username: "Alice", message: "What were you thinking when you bought this?"},
        { username: "Bob", message: "Sure!"}
    ]},

    7: { id : 7, username : 'Bob', title: "Take it away.", 
    body : "Parting out.",
    comments : [
        { username: "Rick", message: "I don't even know how to use one."},
        { username: "Bob", message: "Great buy."},
        { username: "Rick", message: "Sounds good to me!"},
        { username: "Alice", message: "What is wrong with it?"},
        { username: "Bob", message: "Fantastic!"}
    ]},

    8: { id : 8, username : 'Bob', title: "Good riddance.", 
    body : "Please. Take it.",
    comments : [
        { username: "Rick", message: "I don't even know how to use one."},
        { username: "Bob", message: "Shoulda left it on the shelf."},
        { username: "Rick", message: "Did you poke it with a stick?"},
        { username: "Alice", message: "But why?"},
        { username: "Bob", message: "Anything will take it!"}
    ]},

}

export default posts;