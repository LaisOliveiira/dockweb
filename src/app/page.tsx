
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

import {
  ArrowRight,
  ArrowUpRight,
  Monitor,
  PanelsTopLeft,
  Store,
  Wrench,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Sites institucionais",
    description:
      "Apresente sua empresa com profissionalismo e transmita confiança para seus clientes.",
    icon: Monitor,
  },
  {
    number: "02",
    title: "Landing pages",
    description:
      "Páginas estratégicas para divulgar produtos, serviços e transformar visitantes em oportunidades.",
    icon: PanelsTopLeft,
  },
  {
    number: "03",
    title: "Sites para negócios locais",
    description:
      "Coloque seu negócio em destaque na internet e facilite o contato com seus clientes.",
    icon: Store,
  },
  {
    number: "04",
    title: "Manutenção e suporte",
    description:
      "Mantenha seu site atualizado, seguro e funcionando com o suporte necessário.",
    icon: Wrench,
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="container hero-content">

          {/* TEXTO PRINCIPAL */}
          <div className="hero-copy">
            <div className="eyebrow">
              DESENVOLVIMENTO WEB / 001
            </div>

            <h1>
               Seu negócio merece uma presença digital{" "}
               <span style={{ whiteSpace: "nowrap" }}>
                à altura.
              </span>
            </h1>

            <p className="hero-description">
              Desenvolvemos experiências digitais para empresas
              que querem se destacar, conquistar clientes e crescer.
              Seu próximo passo começa na internet.
            </p>

            <div className="hero-actions">
              <a href="#contato" className="button-primary">
                Solicitar orçamento
                <ArrowRight size={17} />
              </a>

              <a href="#projetos" className="button-secondary">
                Explorar projetos
                <ArrowUpRight size={16} />
              </a>
            </div>

            <p className="hero-note">
              DESIGN ESTRATÉGICO · TECNOLOGIA · RESULTADOS
            </p>
          </div>

          {/* MOCKUP PRINCIPAL */}
          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="float-tag tag-one">
              RESPONSIVE DESIGN
            </div>

            {/* NOTEBOOK */}
            <div className="laptop">
              <div className="laptop-screen">

                <div className="mock-browser">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <div className="mock-site">

                  <div className="mock-site-header">
                    <span className="mock-brand">
                      <span className="mock-brand-icon">
                        S
                      </span>
                      STUDIO / BRAND
                    </span>

                    <span className="mock-navigation">
                      INÍCIO　 PROJETOS　 CONTATO
                    </span>
                  </div>

                  <div className="mock-site-body">
                    <div>
                      <span className="mock-kicker">
                        DESIGN COM PROPÓSITO
                      </span>

                      <h2 className="mock-site-title">
                        Sua marca,
                        <br />
                        <span>em outro nível.</span>
                      </h2>

                      <p className="mock-site-text">
                        Uma presença digital criada para
                        conectar sua empresa às pessoas.
                      </p>

                      <div className="mock-site-button">
                        CONHEÇA
                      </div>
                    </div>

                    <div className="mock-site-image">
                      <span className="mock-image-label">
                        01 / BRAND EXPERIENCE
                      </span>
                    </div>
                  </div>

                  <div className="mock-site-footer">
                    <span>
                      ESTRATÉGIA &amp; CRIATIVIDADE
                    </span>
                    <span>
                      SCROLL TO EXPLORE ↓
                    </span>
                  </div>

                </div>
              </div>

              <div className="laptop-base"></div>
            </div>

            {/* CELULAR SOBREPOSTO */}
            <div className="phone-mockup">
              <div className="phone-camera"></div>

              <div className="phone-content">
                <span className="phone-brand">
                  S.
                </span>

                <div className="phone-image"></div>

                <span className="phone-line"></span>
                <span className="phone-line short"></span>

                <div className="phone-button">
                  EXPLORE
                </div>
              </div>
            </div>

            <div className="float-tag tag-two">
              WEB DESIGN / DEVELOPMENT
            </div>

          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="services-section" id="servicos">
        <div className="container">

          <div className="services-heading">
            <div>
              <div className="eyebrow">
                O QUE FAZEMOS / 002
              </div>

              <h2>
                Soluções digitais para{" "}
                <span>seu negócio crescer.</span>
              </h2>
            </div>

            <p>
              Da primeira ideia ao site publicado,
              desenvolvemos soluções pensadas para
              destacar sua empresa no ambiente digital.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="service-card"
                  key={service.number}
                >
                  <div className="service-card-top">

                    <span className="service-number">
                      / {service.number}
                    </span>

                    <div className="service-icon">
                      <Icon
                        size={23}
                        strokeWidth={1.7}
                      />
                    </div>

                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a
                    href="#contato"
                    className="service-link"
                  >
                    Vamos conversar
                    <ArrowUpRight size={16} />
                  </a>

                </article>
              );
            })}
          </div>

        </div>
      </section>

            {/* PORTFÓLIO */}
      <Portfolio />

      {/* SOBRE A DOCKWEB */}
      <About />

      {/* NOSSO PROCESSO */}
      <Process />
      {/* PERGUNTAS FREQUENTES */}
      <FAQ />
      {/* CONTATO E ORÇAMENTO */}
      <Contact />

    </main>
  );
}
