import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight, Users, Compass, Layers, HandHeart } from "lucide-react";
import { SiteLayout, WHATSAPP_URL, DiagonalStripes } from "@/components/SiteLayout";
import { ContactForm } from "@/components/ContactForm";
import logoSymbol from "@/assets/logo-fl-symbol.png";
import flaviaPhoto from "@/assets/flavia-postigo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FL Consultoria | Educação Corporativa e Desenvolvimento Organizacional" },
      {
        name: "description",
        content:
          "Transformamos desafios organizacionais em soluções de aprendizagem. Educação Corporativa, Lideranças, Design Comportamental e Gamificação.",
      },
      {
        property: "og:title",
        content: "FL Consultoria | Educação Corporativa e Desenvolvimento Organizacional",
      },
      {
        property: "og:description",
        content: "Transformamos desafios organizacionais em soluções de aprendizagem.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const eixos = [
  {
    icon: Layers,
    title: "Soluções Educacionais Personalizadas",
    desc: "Conteúdos transformados em experiências de aprendizagem atrativas, aplicáveis e alinhadas à realidade da organização.",
    cta: "Criar uma solução personalizada",
    href: "/solucoes#educacionais",
  },
  {
    icon: HandHeart,
    title: "Experiências Vivenciais",
    desc: "Aprender é mais significativo quando conecta experiência, reflexão e aplicação prática. As experiências promovem interação, fortalecimento de vínculos, colaboração e maior retenção do aprendizado.",
    cta: "Conhecer as experiências",
    href: "/solucoes#vivenciais",
  },
  {
    icon: Users,
    title: "Desenvolvimento de Lideranças",
    desc: "Jornadas, workshops e palestras com foco no desenvolvimento de líderes mais conscientes, preparados para conduzir pessoas, fortalecer equipes e gerar resultados sustentáveis.",
    cta: "Fortalecer lideranças",
    href: "/solucoes#liderancas",
  },
  {
    icon: Compass,
    title: "Design Comportamental",
    desc: "Dados comportamentais transformados em estratégias práticas de desenvolvimento de carreira e gestão comportamental.",
    cta: "Transformar dados em estratégias",
    href: "/solucoes#comportamental",
  },
];

const etapas = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Compreensão da estratégia organizacional, cultura, contexto, perfil do público, competências necessárias, comportamentos a desenvolver e desafios enfrentados por lideranças e equipes.",
  },
  {
    n: "02",
    title: "Desenho e execução",
    desc: "Definição da experiência de aprendizagem mais adequada ao contexto, seguida pelo planejamento, desenvolvimento e execução da solução.",
  },
  {
    n: "03",
    title: "Resultados",
    desc: "Acompanhamento da aplicação prática, análise dos resultados alcançados e observação dos indicadores definidos para o projeto.",
  },
];

const diferenciais = [
  "Soluções construídas a partir de diagnóstico.",
  "Integração entre estratégia e desenvolvimento humano.",
  "Experiências personalizadas.",
  "Metodologias práticas, vivenciais e aplicáveis.",
  "Visão consultiva aliada à capacidade de execução.",
  "Integração entre Psicologia, Educação Corporativa, Gamificação e DO.",
  "Soluções presenciais, digitais e on-line ao vivo.",
  "Acompanhamento durante o desenvolvimento e a aplicação.",
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="hero-clean-surface relative overflow-hidden texture-paper">
        <DiagonalStripes className="pointer-events-none absolute bottom-8 right-8 h-20 w-20 opacity-45" />

        <div className="container-fl relative flex min-h-[calc(100svh-5rem)] items-center py-7 md:py-9">
          <div className="relative w-full overflow-hidden rounded-[2rem] border border-border/85 bg-gradient-to-br from-cream/95 via-cream/90 to-mint-light/30 shadow-[0_24px_70px_rgba(38,36,91,0.12)] backdrop-blur-sm">
            <div className="pointer-events-none absolute -left-24 -top-28 h-64 w-64 rounded-full border border-mint-deep/15" aria-hidden />
            <div className="pointer-events-none absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-mint-light/35 blur-3xl" aria-hidden />

            <div className="relative grid items-center gap-8 px-6 py-7 sm:px-8 md:px-10 md:py-9 lg:grid-cols-[minmax(0,1.42fr)_minmax(250px,0.58fr)] lg:gap-12 lg:px-12 lg:py-10">
              <div className="min-w-0">
                <p className="eyebrow">FL Consultoria</p>
                <h1 className="mt-4 max-w-[800px] font-display text-4xl font-semibold leading-[0.98] tracking-tight text-navy sm:text-5xl xl:text-[3.65rem]">
                  Transformamos desafios organizacionais em{" "}
                  <span className="text-mint-deep">soluções de aprendizagem.</span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy/75 md:text-lg">
                  Desenvolvemos experiências personalizadas conectadas à estratégia, à cultura e às
                  necessidades de cada negócio.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#eixos"
                    className="inline-flex items-center gap-2 rounded-full bg-mint-deep px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-mint hover:shadow-md"
                  >
                    Conheça nossas soluções <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-cream/70 px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-navy/35 hover:bg-cream"
                  >
                    <MessageCircle className="h-4 w-4" /> Fale conosco
                  </a>
                </div>
              </div>

              <div className="relative flex min-w-0 items-center justify-center">
                <div
                  className="relative grid aspect-square w-full max-w-[310px] place-items-center"
                  aria-label="Símbolo da FL Consultoria"
                >
                  <svg aria-hidden viewBox="0 0 360 360" className="absolute inset-0 h-full w-full">
                    <circle cx="180" cy="180" r="142" fill="none" stroke="rgb(118 199 146 / .22)" strokeWidth="2" />
                    <circle cx="180" cy="180" r="112" fill="none" stroke="rgb(118 199 146 / .16)" strokeWidth="2" />
                    <path d="M45 210 A145 145 0 0 1 205 38" fill="none" stroke="#58B978" strokeWidth="16" strokeLinecap="round" />
                    <circle cx="286" cy="83" r="10" fill="#76C792" />
                    <circle cx="313" cy="145" r="6" fill="#58B978" />
                    <circle cx="80" cy="286" r="6" fill="#58B978" />
                  </svg>

                  <div className="relative grid h-[66%] w-[66%] place-items-center rounded-[1.75rem] border border-mint-deep/30 bg-cream/96 p-5 shadow-[0_18px_40px_rgba(38,36,91,0.14)] backdrop-blur-sm">
                    <img
                      src={logoSymbol}
                      alt="Símbolo FL Consultoria"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FAZEMOS */}
      <Section className="bg-cream-deep/40 border-y border-border/60 texture-paper-soft">
        <SectionHeader
          eyebrow="Como fazemos"
          title="Cada projeto começa pela"
          highlight="compreensão da realidade do cliente."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3 relative">
          <div
            className="hidden md:block absolute left-[16%] right-[16%] top-8 h-px bg-gradient-to-r from-transparent via-mint to-transparent"
            aria-hidden
          />
          {etapas.map((e, i) => (
            <div
              key={e.n}
              className="relative bg-cream rounded-2xl p-7 border border-border shadow-sm"
            >
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-mint-deep text-white font-display text-2xl font-bold -mt-14 shadow-md">
                {e.n}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-navy">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">{e.desc}</p>
              {i < etapas.length - 1 && (
                <ArrowRight
                  className="hidden md:block absolute -right-6 top-1/2 h-5 w-5 text-mint-deep"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* EIXOS */}
      <Section id="eixos" className="bg-navy text-cream relative overflow-hidden texture-dark">
        <svg
          aria-hidden
          viewBox="0 0 400 400"
          className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] opacity-15"
        >
          <path
            d="M400 200 a200 200 0 0 1 -200 200"
            fill="none"
            stroke="#83CDA4"
            strokeWidth="60"
          />
        </svg>
        <div className="relative">
          <p className="eyebrow !text-mint-light">Como atuamos</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-cream md:text-5xl">
            Nossos eixos de <span className="text-mint">soluções</span>
          </h2>

          <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-2">
            {eixos.map(({ icon: Icon, title, desc, cta, href }, index) => (
              <article
                key={title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-cream/15 bg-gradient-to-br from-cream/10 to-mint-deep/10 p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-cream/15"
              >
                <div
                  className="pointer-events-none absolute right-0 top-0 flex h-20 w-20 items-center justify-center rounded-bl-[4rem] border-b border-l border-mint/30 bg-mint-deep/10 transition-transform group-hover:scale-105"
                  aria-hidden
                >
                  <span className="font-display text-2xl font-bold text-mint/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="relative flex h-full flex-col">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-deep/25 text-mint">
                    <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                  </div>
                  <h3 className="mt-5 pr-16 font-display text-2xl font-semibold text-cream">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/80">{desc}</p>
                  <a
                    href={href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-mint-light transition-all hover:gap-2"
                  >
                    {cta} <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <Section className="bg-cream-deep/40 border-y border-border/60 texture-paper-soft">
        <SectionHeader
          eyebrow="Nossos diferenciais"
          title="Por que escolher a"
          highlight="FL Consultoria"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((d, i) => (
            <div
              key={d}
              className="relative rounded-2xl bg-card p-6 border border-border shadow-sm"
            >
              <span className="font-display text-3xl font-bold text-mint-deep/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-medium leading-snug text-navy">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* O CAMINHO ATÉ AQUI */}
      <Section className="surface-pattern-light">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="relative mx-auto w-full max-w-sm lg:col-span-4">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-mint-light/40 rotate-2"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-xl">
              <img
                src={flaviaPhoto}
                alt="Flávia Leandra Jorge Postigo, consultora responsável pela FL Consultoria"
                className="h-full w-full object-cover grayscale"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-5 rounded-[1.75rem] border border-border/85 bg-cream/85 p-7 shadow-[0_16px_40px_rgba(38,36,91,0.08)] backdrop-blur-sm md:p-9">
            <p className="eyebrow">O caminho até aqui</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-navy md:text-5xl">
              <span className="text-mint-deep">Mais de 13 anos</span> em Desenvolvimento
              Organizacional e soluções educacionais.
            </h2>
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
        </div>
      </Section>

      {/* CONTATO */}
      <section
        id="contato"
        className="relative scroll-mt-24 overflow-hidden border-t border-border/60 texture-paper-soft"
      >
        <svg
          aria-hidden
          viewBox="0 0 400 400"
          className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] opacity-50"
        >
          <path d="M0 200 a200 200 0 0 1 200 -200" fill="none" stroke="#B9E2C7" strokeWidth="50" />
        </svg>
        <DiagonalStripes className="pointer-events-none absolute right-10 top-10 h-32 w-32 opacity-70" />
        <div className="container-fl relative py-20 md:py-28">
          <div className="text-center">
            <h2 className="mx-auto max-w-4xl font-display text-4xl font-semibold leading-[1.04] text-navy md:text-6xl">
              Soluções significativas transformam experiências em aprendizagem.
            </h2>
            <p className="mt-5 font-display text-3xl font-semibold text-mint-deep md:text-5xl">
              Vamos juntos?
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl text-left">
            <ContactForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative texture-paper ${className}`}>
      <div className="container-fl py-20 md:py-28">{children}</div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  highlight,
}: {
  eyebrow: string;
  title?: string;
  highlight?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      {title && (
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold leading-tight text-navy">
          {title} {highlight && <span className="text-mint-deep">{highlight}</span>}
        </h2>
      )}
    </div>
  );
}
