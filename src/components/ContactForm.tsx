import { useState, type FormEvent } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { WHATSAPP_URL } from "@/components/SiteLayout";

type ContactFormProps = {
  className?: string;
};

export function ContactForm({ className = "" }: ContactFormProps) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    formData.forEach((value, key) => body.append(key, String(value)));

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error("Não foi possível enviar o formulário.");
      }

      form.reset();
      setSent(true);
    } catch {
      setError(
        "Não foi possível enviar os dados agora. Você pode falar conosco diretamente pelo WhatsApp.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div
        className={`rounded-2xl border border-mint/40 bg-mint-light/30 p-8 text-center shadow-sm md:p-10 ${className}`}
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-mint-deep" aria-hidden />
        <h2 className="mt-4 font-display text-3xl font-semibold text-navy">
          Agradecemos seu contato
        </h2>
        <p className="mt-3 text-navy/75">
          Retornaremos em até 1 dia útil.
          <br />
          Até breve!
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy/20 bg-cream px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-mint-light/40"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  return (
    <form
      name="contato-fl-consultoria"
      method="POST"
      data-netlify="true"
      onSubmit={onSubmit}
      className={`space-y-6 rounded-2xl border border-border bg-card p-7 shadow-sm md:p-10 ${className}`}
    >
      <input type="hidden" name="form-name" value="contato-fl-consultoria" />

      <div>
        <h2 className="font-display text-3xl font-semibold text-navy">
          Vamos conversar sobre o seu desafio?
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-navy/75">
          Conte-nos brevemente o que sua empresa precisa. Nossa equipe entrará em contato para
          conhecer melhor o cenário e identificar como podemos contribuir.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome completo" name="nome" placeholder="Digite seu nome" required />
        <Field
          label="Empresa ou organização"
          name="empresa"
          placeholder="Nome da empresa"
          required
        />
        <Field
          label="E-mail"
          name="email"
          type="email"
          placeholder="seuemail@empresa.com.br"
          required
        />
        <Field label="WhatsApp" name="whatsapp" type="tel" placeholder="(XX) XXXXX-XXXX" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="desafio" className="text-sm font-medium text-navy">
          Como podemos ajudar?<span className="text-mint-deep"> *</span>
        </label>
        <textarea
          id="desafio"
          name="desafio"
          rows={6}
          required
          placeholder="Conte brevemente sobre o desafio da sua empresa, equipe ou projeto."
          className="rounded-xl border border-input bg-cream p-4 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-mint-deep/50"
        />
      </div>

      {error && (
        <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-mint-deep px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-mint hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send className="h-4 w-4" aria-hidden />
          {submitting ? "Enviando..." : "Solicitar uma conversa"}
        </button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-mint-deep/40 bg-cream px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-mint-light/40"
        >
          <MessageCircle className="h-4 w-4" aria-hidden /> Falar agora pelo WhatsApp
        </a>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-navy">
        {label}
        {required && <span className="text-mint-deep"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 rounded-xl border border-input bg-cream px-4 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-mint-deep/50"
      />
    </div>
  );
}
