import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Desafio } from "@/components/landing/Desafio";
import { PropostaValor } from "@/components/landing/PropostaValor";
import { Solucao } from "@/components/landing/Solucao";
import { ComoFunciona } from "@/components/landing/ComoFunciona";
import { Indicadores } from "@/components/landing/Indicadores";
import { Impactos } from "@/components/landing/Impactos";
import { Galeria } from "@/components/landing/Galeria";
import { Depoimentos } from "@/components/landing/Depoimentos";
import { CTAFinal } from "@/components/landing/CTAFinal";
import { Footer } from "@/components/landing/Footer";
import { FloatingDownload } from "@/components/landing/FloatingDownload";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Jovens do Velho Chico — Tecnologia, formação e oportunidades para a juventude do Sertão",
      },
      {
        name: "description",
        content:
          "Aplicativo que conecta jovens quilombolas do Sertão do São Francisco a formação, gestão produtiva, políticas públicas e oportunidades de renda.",
      },
      {
        property: "og:title",
        content:
          "Jovens do Velho Chico — Tecnologia, formação e oportunidades para a juventude do Sertão",
      },
      {
        property: "og:description",
        content:
          "Um ecossistema digital para fortalecer a permanência produtiva da juventude no território.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Desafio />
        <PropostaValor />
        <Solucao />
        <ComoFunciona />
        <Indicadores />
        <Impactos />
        <Galeria />
        <Depoimentos />
        <CTAFinal />
      </main>
      <Footer />
      <FloatingDownload />
    </>
  );
}
