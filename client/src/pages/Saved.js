import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import BookList from "../components/Booklist/Booklist";
import API from "../utils/API";

function Saved() {
  // Initialize books as an empty array
  const [books, setBooks] = useState([]);
  useEffect(() => {
    //  loadBooks();
  }, []);

//   function loadBooks() {
//     API.getSavedBooks()
//       .then((res) => {
//         setBooks(res.data);
//       })
//       .catch((err) => console.log(err));
//   }


//   function deleteBook(id) {
//     API.deleteBook(id)
//       .then((res) => {
//         loadBooks();
//       })
//       .catch((err) => console.log(err));
//   }

  return (
    <Container fluid>
      <Jumbotron>
        <h1>(REACT GOOGLE BOOK SEARCH)</h1>
      </Jumbotron>

      
      <Col size="m-12">
        <br />
        <br />
      </Col>
      <Col size="m-12">
        <h1>Saved Books</h1>

        {books.length ? (
          <List>
            {books.map((book) => (
              <ListItem key={book.id}>
                <BookList
                  id={book.id}
                  title={book.title}
                  authors={book.authors}
                  description={book.description}
                  thumbnail={book.image}
                  infoLink={book.link}
                //   onClick={() => deleteBook(book.id)}
                  btntype = "delete"
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Col>
    </Container>
  );
}

export default Saved;