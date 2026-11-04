
import { ArrowUpRight, Scissors, UtensilsCrossed } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Barbearia Concept",
    category: "Site para negócio local",
    description:
      "Uma experiência digital para apresentar serviços, preços e facilitar agendamentos.",
    icon: Scissors,
    theme: "barber",
    label: "BARBER STUDIO",
    headline: "Seu estilo começa aqui.",
    tag: "BARBEARIA / CONCEPT",
  },
  {
    number: "02",
    title: "Restaurante Concept",
    category: "Site institucional",
    description:
      "Uma vitrine digital para apresentar o cardápio, o ambiente e os canais de reserva.",
    icon: UtensilsCrossed,
    theme: "restaurant",
    label: "SABOR & ESSÊNCIA",
    headline: "Uma experiência para saborear.",
    tag: "RESTAURANTE / CONCEPT",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="projetos">
      <div className="container">
        <div className="portfolio-heading">
          <div>
            <div className="eyebrow">
              PROJETOS SELECIONADOS / 003
            </div>

            <h2>
              Ideias que ganham{" "}
              <span>vida no digital.</span>
            </h2>
          </div>

          <p>
            Explore conceitos criados para demonstrar
            como uma presença digital bem planejada
            pode valorizar diferentes negócios.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article className="project-card" key={project.number}>
                <div className={`project-preview ${project.theme}`}>
                  <div className="project-browser">
                    <div className="browser-dots">
                      <i />
                      <i />
                      <i />
                    </div>
                    <span>DOCKWEB / CONCEPT {project.number}</span>
                  </div>

                  <div className="project-website">
                    <div className="project-website-nav">
                      <span>{project.label}</span>
                      <span>INÍCIO　 SERVIÇOS　 CONTATO</span>
                    </div>

                    <div className="project-website-content">
                      <div className="project-website-copy">
                        <span className="project-kicker">
                          {project.tag}
                        </span>

                        <h3>{project.headline}</h3>

                        <span className="project-fake-button">
                          EXPLORAR
                        </span>
                      </div>

                      <div className="project-visual">
                        <Icon size={65} strokeWidth={1} />
                      </div>
                    </div>
                  </div>

                  <span className="project-concept-badge">
                    PROJETO CONCEITUAL
                  </span>
                </div>

                <div className="project-info">
                  <div>
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>
                  </div>

                  <span className="project-arrow" aria-hidden="true">
                    <ArrowUpRight size={21} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <p className="portfolio-disclaimer">
          Estes são estudos visuais demonstrativos da DockWeb,
          não projetos contratados por clientes.
        </p>
      </div>
    </section>
  );
}
