function sanityCheck() {
    console.log("It works!")
}
sanityCheck();

async function getBook(e) {
    e.preventDefault();
    const userInput = $('input[type="text"]').val();
    const url = `http://openlibrary.org/search.json?title=${userInput}`;
    const response = await fetch(url);
    const data = await response.json();
    $('#title').html(data.docs[0].title);
    $('#author').html(data.docs[0].author_name);
    $('#yearPublished').html(data.docs[0].first_publish_year);
    const coverID = data.docs[0].cover_i;
    $('#cover').attr("src", `https://covers.openlibrary.org/b/id/${coverID}-L.jpg`);
}
const bestSellers = ["A Tale Of Two Cities", "The Lord of the Rings", "The Fellowship of the Ring", "The Two Towers", "The Return of the King", "The Hobbit", "The Little Prince", "Harry Potter and the Sorcerer's Stone", "And Then There Were None", "The Lion, the Witch and the Wardrobe", "The Da Vinci Code", "Think and Grow Rich", "Harry Potter and the Half-Blood Prince", "The Catcher in the Rye", "The Alchemist", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hallows", "One Hundred Years of Solitude", "Lolita", "The Common Sense Book of Baby and Child Care", "Anne of Green Gables", "The Name of the Rose", "Watership Down", "Charlotte's Web", "The Bridges of Madison County", "Ben-Hur: A Tale of the Christ", "The Mark of Zorro", "The Tale of Peter Rabbit", "Fifty Shades of Grey", "Flowers in the Attic", "Angels & Demons", "War and Peace", "To Kill a Mockingbird", "Valley of the Dolls", "Gone with the Wind", "The Diary of Anne Frank", "The Purpose Driven Life", "The Girl with the Dragon Tattoo", "The Very Hungry Caterpillar", "Who Moved My Cheese?", "The Great Gatsby", "The Wind in the Willows", "Nineteen Eighty-Four", "The Seven Habits of Highly Effective People", "The Hunger Games", "Jaws", "What to Expect When You're Expecting", "The Adventures of Huckleberry Finn", "Kon-Tiki: Across the Pacific in a Raft", "Where the Wild Things Are", "The Power of Positive Thinking", "How to Win Friends and Influence People", "The Grapes of Wrath", "The Hitchhiker's Guide to the Galaxy", "Tuesdays with Morrie", "God's Little Acre", "A Wrinkle in Time", "The Old Man and the Sea", "The Outsiders", "Charlie and the Chocolate Factory", "The Divine Comedy", "Things Fall Apart", "The Prophet", "The Exorcist", "The Fault in Our Stars", "Catch-22", "Eye of the Needle", "A Brief History of Time", "The Cat in the Hat", "The Kite Runner", "What Color is Your Parachute?", "Life of Pi", "The Giver", "If You Give a Mouse a Cookie"] //0-76 index

async function randomBook(e) {
    e.preventDefault();
    let num = Math.floor(Math.random() * 77);
    let bookTitle = bestSellers[num];
    bookTitle = bookTitle.replace(/\s+/g, '-');
    const url = `http://openlibrary.org/search.json?title=${bookTitle}`;
    const response = await fetch(url);
    const data = await response.json();
    $('#title').html(data.docs[0].title);
    $('#author').html(data.docs[0].author_name);
    $('#yearPublished').html(data.docs[0].first_publish_year);
    const coverID = data.docs[0].cover_i;
    $('#cover').attr("src", `https://covers.openlibrary.org/b/id/${coverID}-L.jpg`);
    console.log(bookTitle);
}
$("form").on("submit", getBook)
$("button").on("click", randomBook);


// document.getElementById("random").addEventListener("click", function(){
//     randomBook;
// });

//   $.ajax({
//     url: "http://openlibrary.org/search.json?title=the+lord+of+the+rings",
//     success: function (bookData) {
//       console.log(bookData.docs[0].title);
//       console.log(bookData.docs[0].author_name);
//       console.log(bookData.docs[0].first_publish_year);
//     },
//     error: function (error) {
//       console.log("bad request: ", error);
//     },
//   });



