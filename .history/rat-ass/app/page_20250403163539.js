import Image from "next/image";
import Product from "@/_ui/Product/product";
  
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
