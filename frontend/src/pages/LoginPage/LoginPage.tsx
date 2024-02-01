import styles from "./LoginPage.module.css";
import login_img from "../../assets/images/login_img.jpg";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className={styles.container}>
      <section className={styles.section1}>
        <img className={styles.section1Img} src={login_img} />
      </section>
      <section className={styles.section2}>
        <form className={styles.login_form}>
          <h2 className={styles.form_h2}>Readify</h2>
          <h1 className={styles.form_h1}>Welcome back</h1>
          <button className={styles.form_google_btn}>Continue with google</button>
          <span>OR CONTINUE WITH</span>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />

          <button>Log in</button>
          <span>
            Don't have an account? <Link to="/register">Create account</Link>
          </span>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
