
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DockWeb | Desenvolvimento de Sites",
  description:
    "Criamos sites profissionais para empresas que querem se destacar e conquistar clientes na internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
