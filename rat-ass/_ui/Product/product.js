import styles from "./product.module.css";
export default function Product({ name, price, image, hasSale}) {
    let formattedPrice = hasSale ? (price/2).toFixed(2) : "";
    let priceClasses = hasSale ? (price/2).toFixed(2) : price;
    
    if (hasSale) {
      priceClasses = styles.product__priceSale;
      formattedPrice = (price/2).toFixed(2);
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
  