"use client";

import React, { useRef } from "react";
import Navbar from "../components/navbar";
import styles from "./contato.module.sass";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import SocialHover from "../components/SocialHover";
import EmailHover from "../components/EmailHover";

export default function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7peblg9", "template_e783jy9", form.current, {
        publicKey: "2fHgcjnXCEcoPxp77",
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
    alert("Mensagem enviada");
  };

  return (
    <>
      <Navbar />
      <div className={`${styles.contactSection} px-10 py-10`}>
        <div className={`${styles.contactInfo}`}>
          <h1 className={`${styles.title} pb-10`}>Contato.</h1>
          <div className={styles.infoGroup}>
            <h2 className={styles.subtitle}>Entre em contato</h2>
            <EmailHover>
              <Link href="mailto:ale@alebrands.co" className={styles.email}>
                email@email.com <span className={styles.arrow}>→</span>
              </Link>
            </EmailHover>
          </div>
          <div className={styles.infoGroup}>
            <h2 className={styles.subtitle}>Siga-nos</h2>
            <SocialHover>
              <Link
                href="https://instagram.com"
                target="_blank"
                className={styles.link}
              >
                Instagram <span className={styles.arrow}>→</span>
              </Link>
            </SocialHover>
            <SocialHover>
              <Link
                href="https://behance.net"
                target="_blank"
                className={styles.link}
              >
                Behance <span className={styles.arrow}>→</span>
              </Link>
            </SocialHover>
          </div>
        </div>
        <div className={`${styles.formContainer}`}>
          <form
            className={`${styles.contact_form} pt-10`}
            ref={form}
            onSubmit={sendEmail}
          >
            <div className={styles.form_group}>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" placeholder="Seu Nome" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu Email"
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="brand_name">Qual o nome da sua marca?</label>
              <input
                type="text"
                id="brand-name"
                name="brand_name"
                placeholder="Nome da sua marca"
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="employees">
                Quantos funcionários sua empresa tem atualmente?
              </label>
              <input
                type="text"
                id="employees"
                name="employees"
                placeholder="Número de funcionários"
              />
            </div>
            <div className={styles.form_group2}>
              <label className="pb-3">Por onde você conheceu a Zoio Brands?</label>
              <div className={styles.radio_group}>
                <label className="pb-3">
                  Instagram
                  <input type="radio" name="source" value="instagram" />
                </label>
                <label className="pb-3">
                  Website
                  <input type="radio" name="source" value="website" />
                </label>
                <label className="pb-3">
                  Behance
                  <input type="radio" name="source" value="behance" />
                </label>
                <label className="pb-3">
                  Dribbble
                  <input type="radio" name="source" value="dribbble" />
                </label>
                <label className="pb-3">
                  Referral
                  <input type="radio" name="source" value="referral" />
                </label>
                <label className="pb-3">
                  Google
                  <input type="radio" name="source" value="google" />
                </label>
              </div>
            </div>

            <div className={styles.form_group}>
              <label htmlFor="segment">Qual o segmento da sua empresa?</label>
              <input
                type="text"
                id="segment"
                name="segment"
                placeholder="Tecnologia"
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="market_time">
                Por quanto tempo sua marca está estabilizada no mercado?
              </label>
              <input
                type="text"
                id="market-time"
                name="market_time"
                placeholder="5 anos"
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="services">
                Quais produtos ou serviços são oferecidos por sua marca/empresa?
              </label>
              <textarea
                id="services"
                name="services"
                placeholder="Brevemente descreva os produtos ou serviços oferecidos."
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="quote">
                Além da marca, gostaria de receber um orçamento para outros
                elementos derivados da nova identidade visual criada?
              </label>
              <textarea
                id="quote"
                name="quote"
                placeholder="Ex.: Artigos de papelaria, artigos digitais, artigos promocionais, etc. Se sim, liste quais e quantos de cada"
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="budget">
                Qual o orçamento estimado para o projeto de design da marca?
              </label>
              <textarea
                id="budget"
                name="budget"
                placeholder="Por gentileza, forneça uma estimativa de quantoe stá disposto a investir neste projeto, para que possamos adaptar a nossa proposta de trabalho à sua disponibiliade financeira."
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="additional_info">
                Sinta-se à vontade para contribuir com outras informações
                pertinentes sobre a sua marca.
              </label>
              <textarea
                id="additional-info"
                name="additional_info"
                placeholder="Compartilhe qualquer informação adicional relevante sobre sua marca."
              />
            </div>
            <div className={styles.form_group}>
              <button className={styles.button} type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
