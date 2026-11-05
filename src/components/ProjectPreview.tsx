
import Image from "next/image";

type ProjectPreviewProps = {
  type: "barbearia" | "restaurante";
};

export default function ProjectPreview({
  type,
}: ProjectPreviewProps) {
  const barber = type === "barbearia";

  return (
    <div
      className={`project-demo ${
        barber ? "demo-barber" : "demo-restaurant"
      }`}
    >
      <div className="demo-browser">
        <div className="demo-dots">
          <span />
          <span />
          <span />
        </div>

        <span>
          DOCKWEB / {barber ? "CONCEPT 01" : "CONCEPT 02"}
        </span>
      </div>

      <div className="demo-website">
        <div className="demo-navbar">
          <span className="demo-logo">
            {barber ? "BARBER STUDIO" : "SABOR & ESSÊNCIA"}
          </span>

          <span className="demo-links">
            INÍCIO &nbsp; SERVIÇOS &nbsp; CONTATO
          </span>
        </div>

        <div className="demo-main">
          <div className="demo-copy">
            <span className="demo-label">
              {barber
                ? "BARBEARIA • ESTILO & PERSONALIDADE"
                : "GASTRONOMIA • SABOR & EXPERIÊNCIA"}
            </span>

            <h3>
              {barber ? (
                <>
                  Seu estilo
                  <br />
                  começa aqui.
                </>
              ) : (
                <>
                  Uma experiência
                  <br />
                  para saborear.
                </>
              )}
            </h3>

            <p>
              {barber
                ? "Cortes, barba e cuidado em cada detalhe."
                : "Sabores especiais para momentos inesquecíveis."}
            </p>

            <span className="demo-button">
              {barber ? "AGENDAR HORÁRIO" : "VER CARDÁPIO"}
            </span>
          </div>

          <div className="demo-photo">
            <Image
              src={
                barber
                  ? "/projects/barbearia.jpg"
                  : "/projects/restaurante.jpg"
              }
              alt={
                barber
                  ? "Ambiente de uma barbearia"
                  : "Prato de restaurante"
              }
              fill
              sizes="(max-width: 768px) 45vw, 25vw"
              className="demo-photo-img"
            />
          </div>
        </div>

        <div className="demo-bottom">
          <span>
            {barber ? "ESTILO EM CADA DETALHE" : "SABORES QUE ENCANTAM"}
          </span>
          <span>DESIGN RESPONSIVO</span>
        </div>
      </div>

      <span className="demo-concept-badge">
        PROJETO CONCEITUAL
      </span>
    </div>
  );
}
