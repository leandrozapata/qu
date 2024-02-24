import Image from "next/image";
import { Product } from "../../hooks/products";

const Card = ({ product }: { product: Product }) => {
  return (
    <div style={styles.cardStyle}>
      <div style={styles.imageContainerStyle}>
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div style={styles.productTitle}>{product.title}</div>
      <div style={styles.productPrice}>USD {product.price}</div>
      <div style={styles.productCategory}> {product.category}</div>
    </div>
  );
};

const styles = {
  cardStyle: {
    borderRadius: "15px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    backgroundColor: "white",
    padding: "20px",
    margin: "20px",
  },
  imageContainerStyle: {
    position: "relative" as "relative",
    width: "100%",
    height: "200px",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold" as "bold",
    marginBottom: "5px",
  },
  productPrice: {
    fontSize: 12,
    fontWeight: "bold" as "bold",
    marginBottom: "5px",
    color: "red",
  },
  productCategory: {
    fontSize: 12,
    backgroundColor: "lightgray",
    fontWeight: "bold" as "bold",
    color: "black",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Card;
