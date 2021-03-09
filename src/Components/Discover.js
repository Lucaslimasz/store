import styles from "../styles/Components/Discover.module.css";
import Link from "next/link";

export default function Discover() {

  return (
    <div className={styles.container}>
      <h1>Discover</h1>
      <div className={styles.containerCards}>
        <div>
          <img src="/aliance.png" alt="" />
          <h3>Solid Gold Petite Micropave</h3>
          <a href="/Informations">
            <button type="button">Shop</button>
          </a>
          <p>
            "Satisfaction Guaranteed. Return or exchange any order within 30
            days.Designed and sold by Hafeez Center in the United States.
            Satisfaction Guaranteed.
          </p>
        </div>
        <div>
          <img src="/aliance.png" alt="" />
          <h3>Solid Gold Petite Micropave</h3>
          <a href="/Informations">
            <button type="button">Shop</button>
          </a>
          <p>
            "Satisfaction Guaranteed. Return or exchange any order within 30
            days.Designed and sold by Hafeez Center in the United States.
            Satisfaction Guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
}
