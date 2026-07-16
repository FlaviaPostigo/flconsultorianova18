import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SiteLayout, WHATSAPP_URL } from "@/components/SiteLayout";
import flaviaPhoto from "@/assets/flavia-postigo.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | FL Consultoria" },
      {
        name: "description",
        content:
          "Conheça a trajetória de Flávia Leandra Jorge Postigo e a atuação da FL Consultoria em Desenvolvimento Organizacional e soluções educacionais.",
      },
      { property: "og:title", content: "Sobre | FL Consultoria" },
      {
        property: "og:description",
        content: "O caminho até aqui: experiência, estratégia e soluções de aprendizagem.",
      },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <SiteLayout>
      <section className="container-fl grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:items-center">
        <div className="relative mx-auto w-full max-w-sm lg:col-span-4">
          <div
            className="absolute -inset-4 -rotate-2 rounded-[2rem] bg-mint-light/45"
            aria-hidden
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-xl">
            <img
              src={flaviaPhoto}
              alt="Flávia Leandra Jorge Postigo, consultora responsável pela FL Consultoria"
              className="h-full w-full object-cover grayscale"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-5 rounded-[1.75rem] border border-border/85 bg-cream/85 p-7 shadow-[0_16px_40px_rgba(38,36,91,0.08)] backdrop-blur-sm md:p-9">
            <p className="eyebrow">O caminho até aqui</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Experiência que conecta estratégia, pessoas e{" "}
              <span className="text-mint-deep">aprendizagem</span> para transformar organizações.
            </h1>
            <p className="leading-relaxed text-navy/75">
              A FL Consultoria é conduzida por Flávia Leandra Jorge Postigo, psicóloga, especialista
              em Liderança e em Gamificação, Engajamento e Marketing Digital, com mais de 13 anos de
              atuação em Desenvolvimento Organizacional e na criação de soluções educacionais.
            </p>
            <p className="leading-relaxed text-navy/75">
              Ao longo de sua trajetória, Flávia desenvolveu projetos voltados à formação de
              lideranças, ao fortalecimento de equipes e à construção de programas de aprendizagem,
              incluindo jornadas, trilhas, cursos digitais, jogos corporativos e experiências
              vivenciais.
            </p>
            <p className="leading-relaxed text-navy/75">
              Sua atuação também contempla a liderança de equipes multidisciplinares, a gestão de
              projetos e o atendimento a organizações públicas e privadas. Na FL Consultoria,
              conecta visão estratégica, conhecimento técnico e capacidade de execução para
              transformar desafios organizacionais em soluções de aprendizagem aplicáveis,
              relevantes e orientadas a resultados.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-cream-deep/40">
        <div className="container-fl py-20 text-center md:py-24">
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold text-navy md:text-5xl">
            Vamos construir algo <span className="text-mint-deep">significativo</span> para a sua
            organização?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-mint-deep px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-mint"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> Conversar pelo WhatsApp
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-cream px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-mint-light/40"
            >
              Ir para o contato
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
