import React from "react";
import Navbar from "../components/navbar";
import styles from "./contato.module.sass";
import Link from "next/link";

export default function Contato() {
  return (
    <>
      <Navbar />
      <div className={styles.contactSection}>
        <div className={styles.contactInfo}>
          <h1 className={styles.title}>Contato.</h1>
          <div className={styles.infoGroup}>
            <h2 className={styles.subtitle}>Entre em contato</h2>
            <Link href="mailto:ale@alebrands.co" className={styles.email}>
              email@email.com <span className={styles.arrow}>→</span>
            </Link>
          </div>
          <div className={styles.infoGroup}>
            <h2 className={styles.subtitle}>Siga-nos</h2>
            <Link href="https://instagram.com" target="_blank" className={styles.link}>
              Instagram <span className={styles.arrow}>→</span>
            </Link>
            <Link href="https://behance.net" target="_blank" className={styles.link}>
              Behance <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.contact_form}>
            <div className={styles.form_group}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="brand-name">Name signed on your brand</label>
              <input type="text" id="brand-name" placeholder="Brand Name" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="employees">How many employees does your company currently have?</label>
              <input type="text" id="employees" placeholder="Number of Employees" />
            </div>
            <div className={styles.form_group}>
              <label>How did you get to Benyaf Brands?</label>
              <div className={styles.radio_group}>
                <label>
                  <input type="radio" name="source" value="instagram" /> Instagram
                </label>
                <label>
                  <input type="radio" name="source" value="website" /> Website
                </label>
                <label>
                  <input type="radio" name="source" value="behance" /> Behance
                </label>
                <label>
                  <input type="radio" name="source" value="dribbble" /> Dribbble
                </label>
                <label>
                  <input type="radio" name="source" value="referral" /> Referral
                </label>
                <label>
                  <input type="radio" name="source" value="google" /> Google
                </label>
              </div>
            </div>
            <div className={styles.form_group}>
              <label htmlFor="segment">What is the companys segment?</label>
              <input type="text" id="segment" placeholder="Technology" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="market-time">How long has the brand been established on the market?</label>
              <input type="text" id="market-time" placeholder="5 years" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="services">What products or services are offered?</label>
              <textarea id="services" placeholder="Briefly describe the products or services you offer." />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="quote">In addition to the brand, would you like to receive a quote for other elements derived from the new visual identity to be created?</label>
              <textarea id="quote" placeholder="E.g.: stationery items, digital items, promotional items, etc. If yes, please list which and how many of each." />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="budget">What is your estimated budget for the branding design project?</label>
              <textarea id="budget" placeholder="Please provide an estimate of how much you are willing to invest in this project, so that we can adapt our work proposal to your financial availability." />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="additional-info">Feel free to contribute with other pertinent information about your brand.</label>
              <textarea id="additional-info" placeholder="Share any additional relevant information about your brand." />
            </div>
            <div className={styles.form_group}>
              <button className={styles.button} type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
