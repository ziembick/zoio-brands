"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import styles from "./contato.module.sass";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import SocialHover from "../components/SocialHover";
import EmailHover from "../components/EmailHover";
import WebDesign from "../components/WebDesign";

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

  const path = useRef(null);
  const [visibleDetails, setVisibleDetails] = useState(null);
  let progress = 0;
  let time = Math.PI / 2;
  let reqId = null;
  let x = 0.5;

  useEffect(() => {
    setPath(progress);
  }, [progress]);

  const setPath = (progress) => {
    const { innerWidth } = window;
    const width = innerWidth * 1;
    path.current.setAttributeNS(
      "",
      "d",
      `M0 50 Q${width * x} ${50 + progress}, ${width} 50`
    );
  };

  const manageMouseEnter = () => {
    if (reqId) {
      window.cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const { left, width } = path.current.getBoundingClientRect();
    x = (clientX - left) / width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    time += 0.2;
    setPath(newProgress);
    progress = lerp(progress, 0, 0.025);

    if (Math.abs(progress) > 0.75) {
      reqId = window.requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  const [activeButtons, setActiveButtons] = useState([]);

  const handleButtonClick = (button) => {
    setActiveButtons((prevActiveButtons) =>
      prevActiveButtons.includes(button)
        ? prevActiveButtons.filter((activeButton) => activeButton !== button)
        : [...prevActiveButtons, button]
    );
  };

  const webdesign = "Identidade Visual";
  const identidade = "Web Development";
  const branding = "Branding Estratégico";
  const naming = "Motion Design";
  const motion = "Social Media";
  const social = "UX/UI Design";

  return (
    <>
      <Navbar />
      <div className="text-white xl:flex-col mt-20">
        <h1
          className={`${styles.contato_title} text-white flex justify-center items-center py-10 text-7xl`}
        >
          Contato.
        </h1>
        <div className={`${styles.line}`}>
          <div
            onMouseEnter={manageMouseEnter}
            onMouseMove={manageMouseMove}
            onMouseLeave={manageMouseLeave}
            className={`${styles.box} px-10`}
          ></div>
          <svg className={`${styles.svg} px-10`}>
            <path ref={path} className={`${styles.path}`}></path>
          </svg>
        </div>
        <div className="flex py-10 px-10 justify-between items-start max-lg:flex-col">
          <div className="">
            {/* alterado aqui */}
            <h2 className={`${styles.containerTitle} pb-7 text-5xl`}>
              Pré Briefing
            </h2>
            <div
              className={`${styles.contatoForm} bg-white flex items-center justify-center p-4 rounded-lg shadow-lg`}
            >
              <form
                ref={form}
                onSubmit={sendEmail}
                className={`${styles.mainForm} bg-white flex items-center justify-center p-4 max-w-4xl w-full `}
              >
                <input
                  type="hidden"
                  name="source"
                  value={activeButtons.join(", ")}
                />

                <div className={`${styles.mainDiv}`}>
                  <h2 className="text-black text-3xl font-semibold mb-12">
                    Nos informe o que você precisa
                  </h2>
                  <div className="flex flex-wrap gap-3 mb-12">
                    <button
                      name="source"
                      value="Website"
                      className={`py-3 px-5 rounded-full hover:bg-gray-300 text-black ${
                        activeButtons.includes("Website")
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick("Website");
                      }}
                    >
                      Website
                    </button>
                    <button
                      name="source"
                      value="Mobile App"
                      className={`py-3 px-5 rounded-full hover:bg-gray-300 text-black ${
                        activeButtons.includes("Mobile App")
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick("Mobile App");
                      }}
                    >
                      Mobile App
                    </button>
                    <button
                      name="source"
                      value="Desktop App"
                      className={`py-3 px-5 rounded-full hover:bg-gray-300 text-black ${
                        activeButtons.includes("Desktop App")
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick("Desktop App");
                      }}
                    >
                      Desktop App
                    </button>
                    <button
                      name="source"
                      value="Experimental"
                      className={`py-3 px-5 rounded-full hover:bg-gray-300 text-black ${
                        activeButtons.includes("Experimental")
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick("Experimental");
                      }}
                    >
                      Experimental
                    </button>
                    <button
                      name="source"
                      value="Strategy"
                      className={`py-3 px-5 rounded-full hover:bg-gray-300 text-black ${
                        activeButtons.includes("Strategy")
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick("Strategy");
                      }}
                    >
                      Estratégia
                    </button>
                    <button
                      name="source"
                      value="Experience Design"
                      className={`py-3 px-5 rounded-full hover:bg-gray-300 text-black ${
                        activeButtons.includes("Experience Design")
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick("Experience Design");
                      }}
                    >
                      Design Experimental
                    </button>
                    <button
                      name="source"
                      value="Visual Design"
                      className={`py-3 px-5 rounded-full hover:bg-gray-300 text-black ${
                        activeButtons.includes("Visual Design")
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick("Visual Design");
                      }}
                    >
                      Design Visual
                    </button>
                    <button
                      name="source"
                      value="3D Design"
                      className={`py-3 px-5 rounded-full hover:bg-gray-300 text-black ${
                        activeButtons.includes("3D Design")
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick("3D Design");
                      }}
                    >
                      Design 3D
                    </button>
                    <button
                      name="source"
                      value="Motion"
                      className={`py-3 px-5 rounded-full hover:bg-gray-300 text-black ${
                        activeButtons.includes("Motion")
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick("Motion");
                      }}
                    >
                      Motion
                    </button>
                    <button
                      name="source"
                      value="Branding"
                      className={`py-3 px-5 rounded-full hover:bg-gray-300 text-black ${
                        activeButtons.includes("Branding")
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick("Branding");
                      }}
                    >
                      Branding
                    </button>
                    <button
                      name="source"
                      value="Illustration"
                      className={`py-3 px-5 rounded-full hover:bg-gray-300 text-black ${
                        activeButtons.includes("Illustration")
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick("Illustration");
                      }}
                    >
                      Ilustração
                    </button>
                    <button
                      name="source"
                      value="Workshops"
                      className={`py-3 px-5 rounded-full hover:bg-gray-300 text-black ${
                        activeButtons.includes("Workshops")
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick("Workshops");
                      }}
                    >
                      Workshops
                    </button>
                    <button
                      name="source"
                      value="Other"
                      className={`py-3 px-5 rounded-full hover:bg-gray-300 text-black ${
                        activeButtons.includes("Other")
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick("Other");
                      }}
                    >
                      Outros
                    </button>
                  </div>
                  <h1 className="text-black text-3xl font-semibold mb-12">
                    Apresente-se
                  </h1>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                      <div>
                        <label className="block text-lg font-medium text-black mb-3">
                          Nome Completo*
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Seu nome completo"
                          className="mt-1 block w-full p-5 border border-gray-300 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-black mb-3">
                          Email*
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Seu email"
                          className="mt-1 block w-full p-5 border border-gray-300 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-black mb-3">
                          Empresa
                        </label>
                        <input
                          type="text"
                          placeholder="Nome da sua empresa"
                          name="company"
                          className="mt-1 block w-full p-5 border border-gray-300 rounded-lg text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-black mb-3">
                          Website
                        </label>
                        <input
                          type="text"
                          name="website"
                          placeholder="Seu website"
                          className="mt-1 block w-full p-5 border border-gray-300 rounded-lg text-black"
                        />
                        <p className="text-black pt-6 text-base">
                        Tudo pronto e preenchido? O endereço de e-mail parece bom?
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <label className="block text-lg font-medium text-black mb-3">
                          Sua Consulta*
                        </label>
                        <textarea
                          name="mensagem"
                          placeholder="Enter your message here"
                          className={`${styles.areaTexto} mt-1 block w-full p-5 border border-gray-300 rounded-lg text-black`}
                        ></textarea>
                      </div>
                      <div className="mt-6 flex items-center justify-end text-black">
                        <button
                          type="submit"
                          className={`${styles.btn} flex items-center gap-1 px-4 py-2 cursor-pointer text-black font-semibold tracking-widest rounded-md  duration-300 hover:gap-2 hover:translate-x-3`}
                        >
                          Enviar
                          <svg
                            className="w-5 h-5"
                            stroke="currentColor"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                              stroke-linejoin="round"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center pl-10">
            <div className={`${styles.segundaSessao} pb-16`}>
              <h1 className={`${styles.segundaSessaoTitle} pb-16 text-5xl`}>
                Como podemos te ajudar
              </h1>
              <div className="flex justify-between flex-col items-center space-y-6">
                <div className="flex justify-start space-x-4 ml-20 pb-7">
                  <WebDesign className="" value={webdesign} />
                  <WebDesign className={styles.webDesign} value={identidade} />
                </div>
                <div className={`${styles.container2} flex space-x-5 pb-10`}>
                  <WebDesign className={styles.webDesign} value={branding} />
                  <WebDesign className={styles.webDesign} value={naming} />
                </div>
                <div className="flex space-x-5 mr-9">
                  <WebDesign className={styles.webDesign} value={motion} />
                  <WebDesign className={styles.webDesign} value={social} />
                </div>
              </div>
            </div>
            <div>
              <h1 className={`${styles.segundaSessaoTitle} pb-9 text-5xl`}>
                Entenda mais
              </h1>
              <div>
                <p className="text-lg">
                  Na Zoio, adotamos uma abordagem integrada ao desenvolvimento
                  de soluções criativas, cobrindo todo o espectro digital e
                  gráfico. Desde a concepção da marca até a sua implementação em
                  diversas plataformas, nossa equipe dedica-se a transformar
                  conceitos em realidades visuais marcantes. Oferecemos desde
                  desenvolvimento web até estratégias de mídia social, passando
                  por design de movimento e design UX/UI, combinando estratégia,
                  design e tecnologia para criar experiências que não apenas
                  atendem, mas superam as expectativas de nossos clientes. Cada
                  interação com a marca é projetada para ser única e memorável.
                  Venha descobrir como podemos elevar sua marca no universo
                  digital.
                </p>
              </div>
            </div>
            <div className={`${styles.contactInfo} pt-16`}>
              <div className={styles.infoGroup}>
                <h1 className={`${styles.segundaSessaoTitle} pb-9 text-5xl`}>
                  Entre em contato
                </h1>
                <EmailHover>
                  <Link
                    href="mailto:pauloziembick@gmail.com"
                    className={`${styles.email} text-2xl`}
                  >
                    zoio@zoiobrands.com <span className={styles.arrow}>→</span>
                  </Link>
                </EmailHover>
              </div>
              <div className={styles.infoGroup}>
                <h2 className={`${styles.segundaSessaoTitle} text-3xl py-4`}>
                  Siga-nos
                </h2>
                <div>
                  <SocialHover>
                    <Link
                      href="https://instagram.com/zoio.brands"
                      target="_blank"
                      className={`${styles.link}`}
                    >
                      <p className="pb-3">
                        Instagram <span className={styles.arrow}>→</span>
                      </p>
                    </Link>
                  </SocialHover>
                  <SocialHover>
                    <Link
                      href="https://behance.net/SilvioLima"
                      target="_blank"
                      className={styles.link}
                    >
                      <p className="pb-3">
                      Behance <span className={styles.arrow}>→</span>
                      </p>
                     
                    </Link>
                  </SocialHover>
                  <SocialHover>
                    <Link
                      href="https://www.linkedin.com/company/zoiobrands/"
                      target="_blank"
                      className={`${styles.link}`}
                    >
                      Linkedin <span className={styles.arrow}>→</span>
                    </Link>
                  </SocialHover>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* <div className={`${styles.contactSection} px-10 py-10`}>
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
      </div> */
