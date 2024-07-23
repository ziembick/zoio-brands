'use client'

import React, { useRef } from "react";
import Navbar from "../components/navbar";
import styles from "./contato.module.sass";
import Link from "next/link";
import emailjs from '@emailjs/browser';

export default function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_7peblg9', 'template_e783jy9', form.current, {
      publicKey: '2fHgcjnXCEcoPxp77',
    })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
    alert("Mensagem enviada")
  };


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
            <Link
              href="https://instagram.com"
              target="_blank"
              className={styles.link}
            >
              Instagram <span className={styles.arrow}>→</span>
            </Link>
            <Link
              href="https://behance.net"
              target="_blank"
              className={styles.link}
            >
              Behance <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.contact_form} ref={form} onSubmit={sendEmail}>
            <div className={styles.form_group}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="brand_name">Name signed on your brand</label>
              <input
                type="text"
                id="brand-name"
                name="brand_name"
                placeholder="Brand Name"
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="employees">
                How many employees does your company currently have?
              </label>
              <input
                type="text"
                id="employees"
                name="employees"
                placeholder="Number of Employees"
              />
            </div>
            <div className={styles.form_group}>
              <label>How did you get to Benyaf Brands?</label>
              <div className={styles.radio_group}>
                <label>
                  <input type="radio" name="source" value="instagram" />{" "}
                  Instagram
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
              <input
                type="text"
                id="segment"
                name="segment"
                placeholder="Technology"
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="market_time">
                How long has the brand been established on the market?
              </label>
              <input
                type="text"
                id="market-time"
                name="market_time"
                placeholder="5 years"
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="services">
                What products or services are offered?
              </label>
              <textarea
                id="services"
                name="services"
                placeholder="Briefly describe the products or services you offer."
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="quote">
                In addition to the brand, would you like to receive a quote for
                other elements derived from the new visual identity to be
                created?
              </label>
              <textarea
                id="quote"
                name="quote"
                placeholder="E.g.: stationery items, digital items, promotional items, etc. If yes, please list which and how many of each."
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="budget">
                What is your estimated budget for the branding design project?
              </label>
              <textarea
                id="budget"
                name="budget"
                placeholder="Please provide an estimate of how much you are willing to invest in this project, so that we can adapt our work proposal to your financial availability."
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="additional_info">
                Feel free to contribute with other pertinent information about
                your brand.
              </label>
              <textarea
                id="additional-info"
                name="additional_info"
                placeholder="Share any additional relevant information about your brand."
              />
            </div>
            <div className={styles.form_group}>
              <button className={styles.button} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
