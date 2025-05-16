import styles from "./BookList.module.css"
import BookCard from "../BookCard/BookCard"

const BookList = ({ books }) => {
  return (
    <div className={styles.container}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          image={book.image}
        />
      ))}
    </div>
  )
}

export default BookList
