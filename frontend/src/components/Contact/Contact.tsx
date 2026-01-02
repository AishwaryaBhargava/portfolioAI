import { useState } from "react";
import styles from "./Contact.module.css";

import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import emailIcon from "../../assets/icons/email.svg";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...form,
          source: "portfolio"
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.wrapper} id="contact">
      <div className={styles.header}>
        <h2 className={styles.title}>Let’s Connect</h2>
        <div className={styles.underline} />
      </div>

      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.text}>
            Interested in collaborating, hiring, or just chatting tech?
            Reach out directly or book time.
          </p>

          <div className={styles.contactList}>
            <a
              href="https://www.linkedin.com/in/aishwarya-bhargava05/"
              target="_blank"
              rel="noreferrer"
              className={styles.contactPill}
            >
              <img src={linkedinIcon} className={styles.contactIcon} />
              <span>linkedin.com/in/aishwarya-bhargava05</span>
            </a>

            <a
              href="https://github.com/AishwaryaBhargava"
              target="_blank"
              rel="noreferrer"
              className={styles.contactPill}
            >
              <img src={githubIcon} className={styles.contactIcon} />
              <span>github.com/AishwaryaBhargava</span>
            </a>

            <a
              href="mailto:aishwarya.bhargava1198@gmail.com"
              className={styles.contactPill}
            >
              <img src={emailIcon} className={styles.contactIcon} />
              <span>aishwarya.bhargava1198@gmail.com</span>
            </a>
          </div>

          <div className={styles.ctaRow}>
            <a
              href="https://drive.google.com/drive/folders/1MaZKPmvVHbFVT94NXRryDUHFQ25ns2w1"
              target="_blank"
              rel="noreferrer"
              className={styles.actionBtn}
            >
              📄 Resume
            </a>

            <a
              href="https://calendly.com/aishwarya-bhargava1198/30min"
              target="_blank"
              rel="noreferrer"
              className={styles.primaryBtn}
            >
              📅 Book a Call
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.formTitle}>Send a Message</h3>

          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />

          <button disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className={styles.success}>
              Message sent successfully ✨
            </p>
          )}

          {error && (
            <p className={styles.error}>
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
