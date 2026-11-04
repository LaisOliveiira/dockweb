
"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "Quanto custa desenvolver um site?",
    answer:
      "O investimento depende do tipo de site, das funcionalidades e da complexidade do projeto. Na DockWeb, preparamos um orçamento personalizado para cada necessidade.",
  },
  {
    question: "Quanto tempo leva para ficar pronto?",
    answer:
      "O prazo varia conforme o escopo e os materiais necessários. Durante o planejamento, definimos uma estimativa de entrega para o seu projeto.",
  },
  {
    question: "O site funciona no celular?",
    answer:
      "Sim! Desenvolvemos sites responsivos, adaptados para computadores, tablets e smartphones, garantindo uma boa experiência em diferentes dispositivos.",
  },
  {
    question: "Posso solicitar alterações depois da entrega?",
    answer:
      "Sim. As alterações podem ser realizadas conforme o escopo contratado ou por meio de um serviço adicional de manutenção.",
  },
  {
    question: "Vocês oferecem manutenção e suporte?",
    answer:
      "Sim! Oferecemos serviços de manutenção, atualizações e suporte conforme as necessidades do seu projeto.",
  },
  {
    question: "Preciso contratar domínio e hospedagem?",
    answer:
      "Para publicar seu site, será necessário utilizar uma hospedagem e, normalmente, um domínio próprio. Podemos orientar você na escolha e configuração desses serviços.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  function toggleFAQ(index: number) {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  }

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-layout">

          {/* TÍTULO */}
          <div className="faq-content">
            <div className="eyebrow">
              PERGUNTAS FREQUENTES / 006
            </div>

            <h2>
              Ainda tem dúvidas?{" "}
              <span>A gente responde.</span>
            </h2>

            <p>
              Reunimos algumas das principais dúvidas
              sobre nossos serviços para ajudar você
              a dar o próximo passo com segurança.
            </p>

            <div className="faq-contact">
              <span>Não encontrou sua resposta?</span>

              <a href="#contato">
                Fale com a DockWeb
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* PERGUNTAS */}
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  className={`faq-item ${
                    isActive ? "faq-active" : ""
                  }`}
                  key={faq.question}
                >
                  <h3>
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isActive}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <span>{faq.question}</span>

                      <span className="faq-icon">
                        {isActive ? (
                          <Minus size={18} />
                        ) : (
                          <Plus size={18} />
                        )}
                      </span>
                    </button>
                  </h3>

                  <div
                    className="faq-answer"
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    hidden={!isActive}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
