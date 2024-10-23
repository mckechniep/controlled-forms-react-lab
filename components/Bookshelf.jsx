import { useState } from 'react';

const Bookshelf = () => {

const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

const [newBook, setNewBook] = useState({ title: '', author: '' });

const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value })
}

const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
}

return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="title"
        value={newBook.title}
        onChange={handleInputChange}
        placeholder="Enter new book title"
        />
        <input
        type="text"
        name="author"
        value={newBook.author}
        onChange={handleInputChange}
        placeholder="Enter new book author"
        />
        <button type="submit">Add Book</button>
        </form>
  </div>
  <div className="bookCardsDiv">
    {books.map((book, index) => 
    <div key={index} className="card">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
    </div>
    )}
</div>
</div>
);
}



export default Bookshelf;