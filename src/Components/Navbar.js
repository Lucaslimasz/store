import styles from "../styles/Components/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <img src="/logo.png" width={50} />
        <div>
          <p>Lucas Lima</p>
          <img src="/menu.png" width={40} />
        </div>
      </div>
      <h1>Cuponeria Store</h1>
      <div className={styles.slider}>
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <li>Clothing</li>
        </ul>
      </div>
    </div>
  );
}
