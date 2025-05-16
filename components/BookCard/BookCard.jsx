import Image from "next/image"
import styles from "./BookCard.module.css"

const BookCard = ({ title, author, description, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={`/images/${image}`}
          alt={`Cover of ${title}`}
          width={150}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.author}>by {author}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default BookCard
