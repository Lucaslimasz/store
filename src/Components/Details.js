import styles from "../styles/Components/Details.module.css";

export default function Details() {
  return (
    <div className={styles.container}>
      <h1>Details</h1>
      <div className={styles.containerCards}>
        <div>
          <img src="/aliance.png" alt="" />
          <h3>Solid Gold Petite Micropave</h3>
          <button type="button">R$ 29,99</button>
          <p>
            Easy upgrade for faster boot up, shutdown, application load and
            response (As compared to 5400 RPM SATA 2.5” hard drive; Based on
            published specifications and internal benchmarking tests using
            PCMark vantage scores) Boosts burst write performance, making it
            ideal for typical PC workloads The perfect balance of performance
            and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on
            internal testing; Performance may vary depending upon drive
            capacity, host device, OS and application.)
          </p>
        </div>
      </div>
    </div>
  );
}
