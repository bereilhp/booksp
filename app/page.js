import BookList from "../components/BookList/BookList"
import styles from "../styles/Home.module.css"
import booksData from "../data/books.json"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>My Reading List</h1>
        <p className={styles.description}>
          Books worth reading, chosen with care.
        </p>
        <BookList books={booksData} />
      </main>
    </div>
  )
}
