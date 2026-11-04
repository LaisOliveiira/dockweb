
import {
  ArrowUpRight,
  Target,
  Zap,
  Code2,
  Globe2,
} from "lucide-react";

export default function About() {
  return (
    <section className="about-section" id="sobre">
      <div className="container about-layout">

        {/* CONTEÚDO */}
        <div className="about-content">
          <div className="eyebrow">
            QUEM SOMOS / 004
          </div>

          <h2>
            Tecnologia com propósito.{" "}
            <span>Design com estratégia.</span>
          </h2>

          <p className="about-description">
            A DockWeb nasceu com um objetivo:
            ajudar negócios a construir uma presença
            digital profissional, moderna e estratégica.
          </p>

          <p className="about-description">
            Unimos criatividade, tecnologia e atenção
            aos detalhes para desenvolver experiências
            digitais que valorizam marcas e aproximam
            empresas de seus clientes.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <div className="about-feature-icon">
                <Target size={22} strokeWidth={1.7} />
              </div>

              <div>
                <h3>Nossa missão</h3>
                <p>
                  Conectar negócios a novas oportunidades
                  através da tecnologia.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="about-feature-icon">
                <Zap size={22} strokeWidth={1.7} />
              </div>

              <div>
                <h3>Nossa abordagem</h3>
                <p>
                  Projetos personalizados, comunicação
                  direta e atenção aos detalhes.
                </p>
              </div>
            </div>
          </div>

          <a href="#contato" className="about-link">
            Vamos conversar sobre seu projeto
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* ELEMENTO VISUAL */}
        <div className="about-visual">
          <div className="about-glow"></div>

          <div className="about-orbit orbit-one"></div>
          <div className="about-orbit orbit-two"></div>

          <div className="about-center">
            <span>DW</span>
            <small>DOCKWEB</small>
          </div>

          <div className="about-floating-icon about-icon-one">
            <Code2 size={22} />
          </div>

          <div className="about-floating-icon about-icon-two">
            <Globe2 size={22} />
          </div>

          <div className="about-floating-icon about-icon-three">
            <Zap size={20} />
          </div>

          <div className="about-tech-label">
            DESIGN / DEVELOPMENT / DIGITAL
          </div>
        </div>

      </div>
    </section>
  );
}
