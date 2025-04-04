import Image from "next/image";
import styles from "./page.module.css";

function Product({ name, price, image, hasSale}) {
let formattedPrice = price;
let priceClasses = "";
if (hasSale) {
  priceClasses = styles.product__priceSale;
  formattedPrice = price/2;
} 

  return (
    <article className={styles.product}>
      <img className={styles.product__image} src={`/${image}.jpg`}/>
      <div>
        <p className={styles.product__name}>{name}</p>
        <p className={priceClasses}>${formattedPrice}</p>
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
  <section className={styles.productList}>
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
