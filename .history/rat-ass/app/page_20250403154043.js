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
    hasSale={false}
    />
    <Product 
    name="Corned beef"
    price="3.99"
    image="cornedbeef"
    hasSale={false}
    />
    <Product 
    name="Chicken Noodles"
    price="1.99"
    image="chickennoodle"
    hasSale={true}
    />
    <Product 
    name="tomato soup"
    price="1.99"
    image="tomatosoup"
    hasSale={true}
    />

  </section>
</main>

  </div>
    
}
