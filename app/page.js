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
        <div className={styles.meta}>
          <p className={styles.lastUpdated}>Last updated June 15, 2026</p>
          <a
            className={styles.githubLink}
            href="https://github.com/bereilhp/booksp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View repository on GitHub"
          >
            <svg
              className={styles.githubIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 1.5C6.2 1.5 1.5 6.3 1.5 12.1c0 4.6 3 8.5 7.1 9.9.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.2-1.6-1.2-1.6-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.8-1.2-4.8-5.2 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1.8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.8 0 4.1-2.5 5-4.8 5.2.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5 4.1-1.4 7.1-5.3 7.1-9.9C22.5 6.3 17.8 1.5 12 1.5Z" />
            </svg>
            <span>bereilhp/booksp</span>
          </a>
        </div>
        <BookList books={booksData} />
      </main>
    </div>
  )
}
