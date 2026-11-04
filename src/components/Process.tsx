
import {
  ArrowUpRight,
  ClipboardList,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Briefing e planejamento",
    description:
      "Entendemos seu negócio, seus objetivos e o que você deseja alcançar com sua presença digital.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Design e estruturação",
    description:
      "Planejamos o visual, a navegação e a experiência do usuário para criar um projeto alinhado à sua marca.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Transformamos o planejamento em um site moderno, responsivo e funcional, com atenção aos detalhes.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Publicação e suporte",
    description:
      "Realizamos testes, preparamos o site para publicação e oferecemos suporte conforme o serviço contratado.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="process-section" id="processo">
      <div className="container">

        <div className="process-heading">
          <div>
            <div className="eyebrow">
              NOSSO PROCESSO / 005
            </div>

            <h2>
              Da ideia ao digital.{" "}
              <span>Sem complicação.</span>
            </h2>
          </div>

          <p>
            Um processo organizado e transparente
            para transformar sua ideia em uma
            presença digital profissional.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article className="process-card" key={step.number}>
                <div className="process-card-top">
                  <span className="process-number">
                    {step.number}
                  </span>

                  <div className="process-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            );
          })}
        </div>

        <div className="process-bottom">
          <p>
            Tem uma ideia em mente?
            Vamos conversar sobre seu projeto.
          </p>

          <a href="#contato">
            Iniciar meu projeto
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}
