import React, { useState, useEffect } from "react";

import styles from "../styles/Components/Featured.module.css";
import "isomorphic-fetch";

function Featured({ products }) {
  return (
    <div className={styles.container}>
      <h1>Featured</h1>
      <div className={styles.containerCards}>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} width={200} />
            <p>
              {product.title.substring(0, 60)}
              {product.title.substring(60) ? "..." : ""}
            </p>
          </div>
        ))}
      </div>
      {/* <div className={styles.buttons}>
        <button>Voltar</button>
        <button>Avançar</button>
      </div> */}
    </div>
  );
}

export default Featured;
