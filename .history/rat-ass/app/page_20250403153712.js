import Image from "next/image";
import styles from "./page.module.css";

function Product({ name, price, image, hasSale}) {
  return (
    <article>
      <img src={`/${image}.jpg`}/>
      <div>
        <p>{name}</p>
        <p>${price}</p>
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
  <section>
    <Product 
    name="Refried beans"
    price="2.99"
    image="beans"
    />

  </section>
</main>

  </div>
    
}
