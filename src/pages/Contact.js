import styles from "./Contact.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you!");
  }

  return (
    <>
      <NavBar />
      <Header />
      <main>
        <section className={styles.contact}>
          <h1>Contact Me</h1>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <p>Leave a message to me here:</p>
            <div className={styles.formRow}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="email..." />
            </div>

            <div className={styles.formRow}>
              <label htmlFor="text">Name:</label>
              <input type="text" id="name" placeholder="name..." />
            </div>

            <div className={styles.formRow}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                placeholder="message..."
                rows="10"
                cols="30"
              />
            </div>

            <div className={styles.formButton}>
              <button>Send!</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Contact;
