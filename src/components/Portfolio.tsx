
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Barbearia Concept",
    category: "Site para negócio local",
    description:
      "Uma experiência digital para apresentar serviços, preços e facilitar agendamentos.",
    image: "/projects/barbearia.jpg",
    alt: "Demonstração de site para barbearia",
  },
  {
    number: "02",
    title: "Casa Oliva",
    category: "Site institucional",
    description:
      "Uma vitrine digital para apresentar o cardápio, o ambiente e os canais de reserva.",
    image: "/projects/restaurante.jpg",
    alt: "Demonstração de site para restaurante brasileiro Casa Oliva",
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
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-preview">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="project-preview-image"
                />
              </div>

              <div className="project-info">
                <div>
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <span
                  className="project-arrow"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={21} />
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="portfolio-disclaimer">
          Estes são estudos visuais demonstrativos da DockWeb,
          não projetos contratados por clientes.
        </p>
      </div>
    </section>
  );
}
