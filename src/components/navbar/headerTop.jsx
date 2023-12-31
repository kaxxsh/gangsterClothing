import styles from "@/styles/nav/headerTop.module.css";

const Top = () => {
  return (
    <section className={styles.top}>
      <div className={styles.details}>
        <div className={styles.title}>Carrers</div>
        <div className={styles.title}>Track Orders</div>
        <div className={styles.title}>Store Location</div>
        <div className={styles.title}>Contact Us</div>
        <div className={styles.login}>
          <a href="/auth/login">Login</a>
        </div>
      </div>
    </section>
  );
};

export default Top;
