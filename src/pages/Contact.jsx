import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p>Email: vinayak@example.com</p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/yourusername" target="_blank">
          github.com/yourusername
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a href="https://linkedin.com/in/yourprofile" target="_blank">
          linkedin.com/in/yourprofile
        </a>
      </p>
    </section>
  );
}

export default Contact;
