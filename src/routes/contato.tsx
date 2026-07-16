import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { SiteLayout, WHATSAPP_DISPLAY, WHATSAPP_URL, EMAIL } from "@/components/SiteLayout";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | FL Consultoria" },
      {
        name: "description",
        content:
          "Fale com a FL Consultoria. Compartilhe o desafio da sua organização e identificaremos possibilidades de atuação.",
      },
      { property: "og:title", content: "Contato | FL Consultoria" },
      { property: "og:description", content: "Vamos conversar sobre o seu desafio?" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <SiteLayout>
      <section className="container-fl grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:items-start">
        <aside className="space-y-6 lg:col-span-4">
          <div className="rounded-2xl bg-navy p-7 text-cream shadow-lg">
            <h1 className="font-display text-2xl font-semibold text-cream">Fale diretamente</h1>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream transition-colors hover:text-mint-light"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-deep">
                    <Phone className="h-4 w-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-mint-light">
                      WhatsApp
                    </span>
                    {WHATSAPP_DISPLAY}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-cream transition-colors hover:text-mint-light"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-deep">
                    <Mail className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="break-all">
                    <span className="block text-xs uppercase tracking-[0.18em] text-mint-light">
                      E-mail
                    </span>
                    {EMAIL}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  );
}
