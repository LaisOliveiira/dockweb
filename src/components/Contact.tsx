
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_NUMBER = "5537991230573";

const services = [
  "Site institucional",
  "Landing page",
  "Site para negócio local",
  "Manutenção e suporte",
  "Ainda não sei",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !phone.trim() || !service) {
      return;
    }

    const message = [
      "Olá! Vim pelo site da DockWeb e gostaria de solicitar um orçamento.",
      "",
      `*Nome:* ${name.trim()}`,
      `*WhatsApp:* ${phone.trim()}`,
      `*Serviço:* ${service}`,
      "",
      "*Sobre meu projeto:*",
      description.trim() || "Gostaria de conversar sobre minha ideia.",
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = url;
  }

  return (
    <section className="contact-section" id="contato">
      <div className="container contact-layout">

        {/* APRESENTAÇÃO */}
        <div className="contact-content">
          <div className="eyebrow">
            VAMOS CONVERSAR / 007
          </div>

          <h2>
            Seu próximo projeto{" "}
            <span>começa aqui.</span>
          </h2>

          <p className="contact-description">
            Tem uma ideia em mente ou quer melhorar
            a presença digital do seu negócio?
            Conte um pouco sobre seu projeto e vamos
            encontrar a melhor solução.
          </p>

          <div className="contact-benefits">
            <div>
              <CheckCircle2 size={18} />
              <span>Orçamento personalizado</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>Atendimento direto pelo WhatsApp</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>Soluções para o seu negócio</span>
            </div>
          </div>

          <div className="contact-direct">
            <div className="contact-direct-icon">
              <MessageCircle size={22} />
            </div>

            <div>
              <span>Prefere conversar diretamente?</span>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* FORMULÁRIO */}
        <div className="contact-form-wrapper">
          <div className="contact-form-header">
            <span>INICIAR PROJETO</span>
            <span>DOCKWEB / 007</span>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-heading">
              <h3>Solicite seu orçamento</h3>
              <p>
                Preencha as informações abaixo para
                iniciarmos uma conversa.
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="contact-name">
                Seu nome <span>*</span>
              </label>

              <input
                id="contact-name"
                type="text"
                placeholder="Como podemos chamar você?"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                maxLength={100}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-phone">
                Seu WhatsApp <span>*</span>
              </label>

              <input
                id="contact-phone"
                type="tel"
                placeholder="(00) 00000-0000"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                autoComplete="tel"
                inputMode="tel"
                pattern="[0-9()+\s-]{10,20}"
                title="Informe um telefone com DDD."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-service">
                Qual serviço você precisa? <span>*</span>
              </label>

              <select
                id="contact-service"
                value={service}
                onChange={(event) => setService(event.target.value)}
                required
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>

                {services.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contact-description">
                Conte sobre seu projeto
              </label>

              <textarea
                id="contact-description"
                placeholder="Descreva brevemente sua ideia, seu negócio ou o que você precisa..."
                rows={5}
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                maxLength={2000}
              />
            </div>

            <button type="submit" className="contact-submit">
              Enviar pelo WhatsApp
              <Send size={17} />
            </button>

            <p className="form-disclaimer">
              Ao continuar, o WhatsApp será aberto com
              sua mensagem preenchida. Você poderá
              revisá-la antes de enviar.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}
