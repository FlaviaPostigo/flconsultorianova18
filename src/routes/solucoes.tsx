import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Layers,
  HandHeart,
  Users,
  Compass,
  ArrowRight,
  ArrowUp,
  MessageCircle,
} from "lucide-react";
import { SiteLayout, PageHero, WHATSAPP_URL } from "@/components/SiteLayout";
import jornadaGamificada from "@/assets/jornada-gamificada.png";
import craqueDoJogo from "@/assets/craque-do-jogo.png";
import legoSeriousPlay from "@/assets/lego-serious-play.jpg";
import seloLegoSeriousPlay from "@/assets/selo-certified-facilitator-lego-serious-play.png";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções | FL Consultoria" },
      {
        name: "description",
        content:
          "Soluções Educacionais Personalizadas, Experiências Vivenciais, Desenvolvimento de Lideranças e Design Comportamental.",
      },
      { property: "og:title", content: "Soluções | FL Consultoria" },
      {
        property: "og:description",
        content: "Quatro frentes de soluções para desenvolver pessoas, equipes e lideranças.",
      },
      { property: "og:url", content: "/solucoes" },
    ],
    links: [{ rel: "canonical", href: "/solucoes" }],
  }),
  component: SolucoesPage,
});

const educationalSteps = [
  "Diagnóstico organizacional e indicação da melhor solução de aprendizagem.",
  "Desenvolvimento da solução, incluindo identidade visual, ilustrações, animações e objetos de aprendizagem.",
  "Entrega, acompanhamento, treinamento de multiplicadores ou execução da solução.",
];

function SolucoesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Soluções"
        title="Quatro eixos para desenvolver pessoas, equipes e"
        highlight="organizações."
        description="Cada frente reúne metodologias, experiências e programas desenhados sob medida para a realidade de cada cliente."
        compact
      />

      <section className="border-y border-border/60 bg-cream-deep/25 texture-paper-soft">
        <div className="container-fl py-10 md:py-14">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Como atuamos</p>
              <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-navy md:text-4xl">
                Conheça nossas soluções
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-navy/70 md:text-right">
              Selecione uma área para acessar detalhes, exemplos e formatos de atuação.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "01",
                icon: Layers,
                title: "Soluções Educacionais Personalizadas",
                description:
                  "Cursos, trilhas, jornadas, jogos e soluções digitais desenhados sob medida.",
                href: "#educacionais",
                cta: "Criar uma solução personalizada",
              },
              {
                number: "02",
                icon: HandHeart,
                title: "Experiências Vivenciais",
                description:
                  "Metodologias ativas que conectam experiência, reflexão e aplicação prática.",
                href: "#vivenciais",
                cta: "Conhecer as experiências",
              },
              {
                number: "03",
                icon: Users,
                title: "Desenvolvimento de Lideranças",
                description:
                  "Jornadas e workshops para fortalecer líderes, equipes e resultados.",
                href: "#liderancas",
                cta: "Fortalecer lideranças",
              },
              {
                number: "04",
                icon: Compass,
                title: "Design Comportamental",
                description:
                  "Mapeamentos e análises para orientar desenvolvimento e gestão comportamental.",
                href: "#comportamental",
                cta: "Transformar dados em estratégias",
              },
            ].map((axis) => {
              const AxisIcon = axis.icon;

              return (
                <article
                  key={axis.title}
                  className="group relative flex h-full min-h-[282px] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-mint-deep/40 hover:shadow-lg"
                >
                  <div
                    className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-bl-full border-b border-l border-mint-deep/25 bg-mint-light/25"
                    aria-hidden
                  >
                    <span className="absolute right-4 top-3 font-display text-lg font-bold text-mint-deep/75">
                      {axis.number}
                    </span>
                  </div>

                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint-light text-mint-deep">
                    <AxisIcon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </div>

                  <h3 className="mt-4 pr-10 font-display text-lg font-semibold leading-snug text-navy">
                    {axis.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">
                    {axis.description}
                  </p>

                  <a
                    href={axis.href}
                    className="mt-auto flex min-h-[3.25rem] items-start gap-2 pt-5 text-sm font-semibold leading-snug text-navy transition-colors hover:text-mint-deep"
                  >
                    <span>{axis.cta}</span>
                    <ArrowRight
                      className="mt-0.5 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="educacionais" className="scroll-mt-28 texture-paper">
        <div className="container-fl py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
            <div className="flex h-full flex-col">
              <div className="rounded-2xl border border-navy/10 bg-cream/75 p-6 shadow-sm backdrop-blur-sm md:p-7">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-light text-mint-deep">
                  <Layers className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <p className="eyebrow mt-6">Soluções Educacionais Personalizadas</p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy md:text-4xl">
                  Conteúdos transformados em experiências de aprendizagem atrativas, aplicáveis e
                  alinhadas à realidade da organização.
                </h2>
                <p className="mt-5 leading-relaxed text-navy/75">
                  Desenvolvemos cursos EAD personalizados, jornadas gamificadas presenciais ou
                  digitais e gamificações para processos de onboarding, eventos e programas
                  corporativos.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-display text-xl font-semibold text-navy">Etapas</h3>
                <StepsList steps={educationalSteps} />
              </div>
            </div>

            <div className="h-full w-full">
              <div className="grid h-full min-h-0 w-full gap-5 lg:grid-rows-2">
                <MediaCard
                  image={jornadaGamificada}
                  alt="Tela de uma jornada de desenvolvimento gamificada criada pela FL Consultoria"
                  title="Jornada gamificada"
                  description="Experiência digital personalizada para estimular participação, tomada de decisão e aplicação do conteúdo."
                />
                <MediaCard
                  image={craqueDoJogo}
                  alt="Plataforma digital Craque do Jogo apresentada em computador e celular"
                  title="Soluções digitais sob medida"
                  description="Projetos responsivos desenvolvidos para diferentes públicos, objetivos e contextos de aprendizagem."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vivenciais" className="scroll-mt-28 bg-navy text-cream texture-dark">
        <div className="container-fl py-20 md:py-28">
          <div className="rounded-2xl border border-cream/15 bg-cream/[0.06] p-6 shadow-sm backdrop-blur-sm md:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start lg:gap-8">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-deep/20 text-mint">
                <HandHeart className="h-7 w-7" strokeWidth={1.6} />
              </div>
              <div className="max-w-5xl">
                <p className="eyebrow !text-mint-light">Experiências Vivenciais</p>
                <h2 className="mt-3 max-w-4xl font-display text-3xl font-semibold leading-tight text-cream md:text-4xl lg:text-5xl">
                  Aprender é mais significativo quando conecta experiência, reflexão e aplicação prática.
                </h2>
                <p className="mt-5 max-w-5xl text-base leading-relaxed text-cream/80 md:text-lg">
                  As experiências promovem interação, fortalecimento de vínculos, colaboração e maior
                  retenção do aprendizado, conectando desafios reais ao desenvolvimento de competências
                  e à aplicação de novos comportamentos no contexto organizacional.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2">
            <MediaCard
              image={legoSeriousPlay}
              alt="Participantes construindo modelos com peças Lego® durante uma experiência facilitada"
              title="Lego® Serious Play®"
              description="Uma metodologia que estimula a participação ativa, a expressão de ideias e o potencial criativo dos participantes. Por meio da construção de modelos tridimensionais com blocos LEGO®, cria-se uma linguagem compartilhada que favorece o envolvimento de todos, fortalece o senso de pertencimento e amplia o compromisso com as soluções desenvolvidas."
              badgeImage={seloLegoSeriousPlay}
              badgeAlt="Selo Certified Facilitator LEGO® Serious Play®"
              dark
            />

            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-cream/15 bg-cream/5 shadow-sm backdrop-blur-sm">
              <video
                className="aspect-video w-full bg-black object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/media/projeto-travessia-poster.jpg"
                aria-label="Vídeo de apresentação do Projeto Travessia"
              >
                <source src="/media/projeto-travessia.mp4" type="video/mp4" />
                Seu navegador não oferece suporte à reprodução deste vídeo.
              </video>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="font-display text-xl font-semibold text-cream">Projeto Travessia</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/75">
                  Jogo corporativo autoral que desafia os participantes a planejar, tomar decisões
                  e construir uma ponte de forma colaborativa.
                </p>
                <ul className="mt-5 space-y-1.5 border-t border-cream/15 pt-4 text-xs text-cream/70">
                  <li>Duração: 4 horas</li>
                  <li>Formato: Presencial</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="liderancas" className="scroll-mt-28 texture-paper">
        <div className="container-fl py-20 md:py-28">
          <div className="w-full rounded-2xl border border-navy/10 bg-cream/75 p-6 shadow-sm backdrop-blur-sm md:p-7">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-light text-mint-deep">
              <Users className="h-7 w-7" strokeWidth={1.6} />
            </div>
            <p className="eyebrow mt-6">Desenvolvimento de Lideranças</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy md:text-5xl">
              Líderes mais <span className="text-mint-deep">conscientes,</span>{" "}
              <span className="text-mint-deep">preparados e</span> capazes de gerar impacto.
            </h2>
            <p className="mt-5 leading-relaxed text-navy/75">
              Jornadas, workshops e palestras com foco no desenvolvimento de competências
              essenciais para conduzir pessoas, fortalecer equipes e gerar resultados sustentáveis.
            </p>
          </div>
          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
            {[
              {
                title: "Fortalecendo Potenciais",
                desc: "Mapeamento de Perfil Comportamental com devolutiva individual e sessão com Lego® Serious Play® para ampliação da consciência sobre potencialidades, oportunidades de desenvolvimento e construção de PDI.",
                meta: ["Duração: 2 horas", "Formato: Presencial ou on-line e ao vivo"],
              },
              {
                title: "Gestão Comportamental na Prática",
                desc: "Workshop que transforma dados sobre perfis individuais em estratégias práticas de liderança, fortalecendo a compreensão sobre diferentes estilos, potencialidades, desafios e formas mais assertivas de conduzir pessoas e equipes.",
                meta: ["Duração: 3 horas", "Formato: Presencial ou on-line e ao vivo"],
              },
              {
                title: "Programa Liderar",
                desc: "Jornada de desenvolvimento de lideranças alinhada aos desafios e à realidade de cada negócio. O programa desenvolve competências essenciais, como autoconhecimento, accountability, comunicação assertiva, construção de uma cultura de confiança e segurança psicológica.",
                meta: ["Carga horária sob medida", "Formato: Presencial ou on-line e ao vivo"],
              },
            ].map((card) => (
              <InfoCard key={card.title} icon={Users} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="comportamental"
        className="scroll-mt-28 border-y border-border/60 bg-cream-deep/40 texture-paper-soft"
      >
        <div className="container-fl py-20 md:py-28">
          <div className="w-full rounded-2xl border border-navy/10 bg-cream/75 p-6 shadow-sm backdrop-blur-sm md:p-7">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-light text-mint-deep">
              <Compass className="h-7 w-7" strokeWidth={1.6} />
            </div>
            <p className="eyebrow mt-6">Design Comportamental</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy md:text-5xl">
              Dados comportamentais transformados em estratégias práticas de{" "}
              <span className="text-mint-deep">
                desenvolvimento de carreira e gestão comportamental.
              </span>
            </h2>
          </div>
          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
            {[
              {
                title: "Potencial em Foco",
                desc: "Mapeamento de Perfil Comportamental com devolutiva individual e construção de PDI. A partir da metodologia DISC, identificam-se preferências e tendências comportamentais, habilidades, potencialidades, estilo de comunicação, fatores motivacionais e oportunidades de desenvolvimento.",
                meta: ["Duração: 1 hora", "Formato: Presencial ou on-line e ao vivo"],
              },
              {
                title: "Análise de Times",
                desc: "A partir do mapeamento individual dos perfis comportamentais, compreendemos características, preferências e dinâmicas do time, identificando potencialidades, pontos de atenção e oportunidades. Apoia líderes e equipes na construção de relações mais colaborativas, na melhoria da comunicação e na tomada de decisões baseadas em dados.",
                meta: ["Duração: até 2 horas", "Formato: Presencial ou on-line e ao vivo"],
              },
            ].map((card) => (
              <InfoCard key={card.title} icon={Compass} largeTitle {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="texture-paper-soft">
        <div className="container-fl py-16 text-center md:py-20">
          <h2 className="font-display text-3xl font-semibold text-navy md:text-5xl">
            Quer entender qual solução faz <span className="text-mint-deep">mais sentido</span>{" "}
            para sua organização?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-mint-deep px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-mint"
            >
              <MessageCircle className="h-4 w-4" /> Falar pelo WhatsApp
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-cream px-6 py-3 text-sm font-semibold text-navy hover:bg-mint-light/40"
            >
              Formulário de contato <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy/70 transition-colors hover:text-mint-deep"
          >
            <ArrowUp className="h-4 w-4" aria-hidden /> Voltar ao início
          </button>
        </div>
      </section>
    </SiteLayout>
  );
}

function StepsList({ steps, dark = false }: { steps: string[]; dark?: boolean }) {
  return (
    <ol className="mt-4 space-y-3">
      {steps.map((step, index) => (
        <li
          key={step}
          className={`relative min-h-[78px] overflow-hidden rounded-xl border py-5 pl-5 pr-20 ${dark ? "border-cream/15 bg-cream/5" : "border-border bg-card/95"}`}
        >
          <div
            className={`pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-bl-full border-b border-l ${dark ? "border-mint/25 bg-mint-deep/20" : "border-mint-deep/25 bg-mint-light/30"}`}
            aria-hidden
          >
            <span
              className={`absolute right-4 top-3 font-display text-lg font-bold ${dark ? "text-mint" : "text-mint-deep/80"}`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <span className={`text-sm leading-relaxed ${dark ? "text-cream/85" : "text-navy/80"}`}>
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}

function MediaCard({
  image,
  alt,
  title,
  description,
  meta,
  badgeImage,
  badgeAlt,
  dark = false,
}: {
  image: string;
  alt: string;
  title: string;
  description: string;
  meta?: string[];
  badgeImage?: string;
  badgeAlt?: string;
  dark?: boolean;
}) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm ${
        dark ? "border-cream/15 bg-cream/5" : "border-border bg-card/95"
      }`}
    >
      <img
        src={image}
        alt={alt}
        className="aspect-[16/7] w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h3 className={`font-display text-xl font-semibold ${dark ? "text-cream" : "text-navy"}`}>
          {title}
        </h3>
        <p
          className={`mt-2 flex-1 text-sm leading-relaxed ${dark ? "text-cream/75" : "text-navy/70"}`}
        >
          {description}
        </p>
        {badgeImage && (
          <div className="mt-5 rounded-xl bg-white p-3">
            <img
              src={badgeImage}
              alt={badgeAlt ?? "Certificação"}
              className="mx-auto max-h-16 w-auto max-w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
        {meta && (
          <ul
            className={`mt-5 space-y-1.5 border-t pt-4 text-xs ${
              dark ? "border-cream/15 text-cream/70" : "border-border text-navy/65"
            }`}
          >
            {meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

function InfoCard({
  icon: Icon,
  title,
  desc,
  meta,
  largeTitle = false,
}: {
  icon: typeof Users;
  title: string;
  desc: string;
  meta: string[];
  largeTitle?: boolean;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card/95 p-7 shadow-sm">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-light text-mint-deep">
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </div>
      <h3
        className={`mt-5 font-display font-semibold text-navy ${largeTitle ? "text-2xl" : "text-xl"}`}
      >
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">{desc}</p>
      <ul className="mt-5 space-y-1.5 border-t border-border pt-4 text-xs text-navy/65">
        {meta.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
