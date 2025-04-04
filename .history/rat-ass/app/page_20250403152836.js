import Image from "next/image";
import styles from "./page.module.css";

function Product({ name, price, image, hasSale}) {
  return (
    <article>
      <div>
        <p>Product Name</p>
        <p>$3.99</p>
      </div>
    </article>
  );
}

export default function Home() {
  return <div>
<header className={styles.header}>
  <h1>General Store🍤</h1>
</header>
<main className={styles.main}>
  <section></section>
</main>

  </div>
    
}
