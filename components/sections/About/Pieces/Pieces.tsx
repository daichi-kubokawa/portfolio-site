import Image from "next/image";
import styles from "./Pieces.module.css";

const pieces = [
  {
    src: "/images/about/pieces/piece-01.jpg",
    alt: "Piece 1",
  },
  {
    src: "/images/about/pieces/piece-02.jpg",
    alt: "Piece 2",
  },
  {
    src: "/images/about/pieces/piece-03.jpg",
    alt: "Piece 3",
  },
  {
    src: "/images/about/pieces/piece-04.jpg",
    alt: "Piece 4",
  },
  {
    src: "/images/about/pieces/piece-05.jpg",
    alt: "Piece 5",
  },
  {
    src: "/images/about/pieces/piece-06.jpg",
    alt: "Piece 6",
  },
  {
    src: "/images/about/pieces/piece-07.jpg",
    alt: "Piece 7",
  },
  {
    src: "/images/about/pieces/piece-08.jpg",
    alt: "Piece 8",
  },
  {
    src: "/images/about/pieces/piece-09.jpg",
    alt: "Piece 9",
  },
];

export default function Pieces() {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.heading}>
          <h2 className={styles.title}>9 Pieces</h2>
          <p className={styles.caption}>自分を作る9つの断片</p>
        </div>

        <div className={styles.grid}>
          {pieces.map((piece) => (
            <div key={piece.src} className={styles.item}>
              <Image
                src={piece.src}
                alt={piece.alt}
                fill
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
