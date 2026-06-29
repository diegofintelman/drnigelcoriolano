import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Check, Activity, Zap, AlertCircle, RefreshCw, Clock, Brain,
  GraduationCap, Newspaper, Tv2, Building2,
  ClipboardList, Target, TrendingUp, Info,
  AlertTriangle, Layers, ArrowDownRight, Repeat, Waves,
  MapPin, Instagram, ChevronDown, MessageCircle,
} from "lucide-react";
import fotoHero from "@/assets/foto_hero.asset.json";
import fotoQuemSouEu from "@/assets/quem_sou_eu.asset.json";
import fotoAnatomia from "@/assets/foto_anatomia.asset.json";
import fotoRealinhar from "@/assets/foto_realinhar.asset.json";
import bannerAsset from "@/assets/Banner.png.asset.json";
import logoFooter from "@/assets/logo_footer.asset.json";
import institutoRealinhar from "@/assets/instituto_realinhar.asset.json";
import backgroundAsset from "@/assets/background.asset.json";
import dorLombarAsset from "@/assets/dor_lombar.png.asset.json";
import dorPescocoAsset from "@/assets/dor_pescoco.png.asset.json";
import herniaDiscoAsset from "@/assets/hernia_disco.png.asset.json";
import tratamentoNaoSustentaAsset from "@/assets/tratamento_nao_sustenta.png.asset.json";
import dorRepousoAsset from "@/assets/dor_repouso.png.asset.json";
import dorCronicaAsset from "@/assets/dor_cronica.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Nigel Coriolano · Fisioterapeuta Especialista em Coluna" },
      { name: "description", content: "Tratamento personalizado para dor na coluna, hérnia de disco e dor crônica em Paulo Afonso, BA. Sem medicamentos." },
      { property: "og:title", content: "Dr. Nigel Coriolano · Fisioterapeuta Especialista em Coluna" },
      { property: "og:description", content: "Tratamento personalizado para dor na coluna, hérnia de disco e dor crônica. Sem medicamentos. Paulo Afonso, BA." },
    ],
  }),
  component: Landing,
});

const WHATSAPP_URL =
  "https://wa.me/5575998024411?text=Ol%C3%A1%2C+vim+pelo+site+e+quero+agendar+minha+avalia%C3%A7%C3%A3o+de+coluna.";
const INSTAGRAM_URL = "https://www.instagram.com/nigelcoriolano/";
const MAPS_URL = "https://maps.app.goo.gl/xCg7DeiKEQLBvfu4A";

function useFade(delay = 0) {
  const reduce = useReducedMotion();
  if (reduce) return { initial: false as const, animate: { opacity: 1, y: 0 } };
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  };
}


function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function Section({
  id, bg, children, className = "",
}: { id?: string; bg: "navy-dark" | "navy" | "cream" | "white"; children: React.ReactNode; className?: string }) {
  const bgClass = {
    "navy-dark": "bg-[#060F20]",
    navy: "bg-[#0D2B5C]",
    cream: "bg-cream",
    white: "bg-white",
  }[bg];
  return (
    <section id={id} className={`relative ${bgClass} ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children, light = false, center = false }: { children: React.ReactNode; light?: boolean; center?: boolean }) {
  return (
    <p className={`font-mono text-xs uppercase tracking-widest mb-4 ${light ? "text-gold-light" : "text-gold"} ${center ? "text-center" : ""}`}>
      {children}
    </p>
  );
}

function PrimaryCTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-sans font-semibold text-white transition hover:brightness-110 ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}

/* ============ HEADER LOGO ============ */
function HeaderLogo() {
  return (
    <div className="w-full">
      <a href="/" className="inline-block">
        <img
          src={bannerAsset.url}
          alt="Dr. Nigel Coriolano — Fisioterapeuta"
          className="h-auto w-[290px] sm:w-[300px] md:w-[310px]"
        />
      </a>
    </div>
  );
}




/* ============ HERO ============ */
function Hero() {
  return (
    <Section bg="cream" className="relative isolate overflow-hidden">
      {/* Background image com fit-cover */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${backgroundAsset.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Blur brand (gold) behind text column */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-5 pb-12 pt-3 md:px-8 lg:grid-cols-[55fr_45fr] lg:gap-14">
        <div className="relative">
          <HeaderLogo />

          <motion.div {...useFade(0.1)} className="mt-2">
            <span className="inline-flex rounded-full border border-gold/60 bg-gold/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-navy-dark">
              CREFITO-17/190962-F · Paulo Afonso, BA
            </span>
          </motion.div>

          <motion.h1 {...useFade(0.2)} className="mt-4 font-serif text-4xl leading-tight text-navy-dark md:text-5xl lg:text-6xl">
            Você já tentou de tudo para essa dor passar.
            <br />
            <span className="text-gold">Ela voltou.</span>
          </motion.h1>
          <motion.p {...useFade(0.3)} className="mt-4 max-w-lg font-sans text-base text-brand-text md:text-lg">
            Sou o Dr. Nigel Coriolano, fisioterapeuta especialista em coluna e controle da dor. Aqui você recebe avaliação criteriosa, plano personalizado e acompanhamento até o resultado — sem depender de medicamentos.
          </motion.p>
          <motion.div {...useFade(0.4)} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PrimaryCTA>Quero agendar minha avaliação →</PrimaryCTA>
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center rounded-full border border-navy/20 bg-transparent px-7 py-3.5 font-sans font-medium text-navy transition hover:bg-navy/5"
            >
              Ver especialidades ↓
            </a>
          </motion.div>
          <motion.ul {...useFade(0.5)} className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {[
              "Especialista em coluna e dor crônica",
              "Tratamento sem medicamentos",
              "Avaliação individualizada",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 font-mono text-xs text-brand-muted">
                <Check className="h-4 w-4 text-gold" /> {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.3 }}
          className="relative lg:-translate-y-6"
        >
          <div className="overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-[#1A3D73] to-[#0D2B5C] aspect-[4/3] lg:aspect-[3/4]">
            <img src={fotoHero.url} alt="Dr. Nigel Coriolano, fisioterapeuta" className="h-full w-full object-cover object-top" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ============ PROBLEMA ============ */
function Problema() {
  const cards = [
    { icon: Activity, title: "Dor lombar ao levantar", desc: "Dificuldade de sair da cama ou levantar do chão pela manhã sem sentir travamento ou dor forte nas costas." },
    { icon: Zap, title: "Dor no pescoço com irradiação", desc: "Dor cervical que desce para os ombros, braços ou mãos, às vezes com formigamento ou dormência." },
    { icon: AlertCircle, title: "Hérnia de disco diagnosticada", desc: "Você tem o diagnóstico na mão, mas ninguém explicou direito o que fazer — e tem medo do que pode acontecer." },
    { icon: RefreshCw, title: "Tratamentos que não sustentam", desc: "Melhora por algumas semanas, mas a dor volta sempre que você volta à rotina normal." },
    { icon: Clock, title: "Dor que não passa com repouso", desc: "Mesmo descansando o fim de semana inteiro, a dor persiste — ou piora ao ficar parado por muito tempo." },
    { icon: Brain, title: "Dor crônica sem explicação clara", desc: "Exames que dizem 'tudo normal', mas você sente que algo está errado. A dor é verdadeira — e pode ser tratada." },
  ];
  return (
    <Section id="problema" bg="cream" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div {...useFade()} className="text-center">
          <Eyebrow center>VOCÊ SE RECONHECE AQUI?</Eyebrow>
          <h2 className="font-serif text-3xl text-navy md:text-4xl">Essas dores têm nome, têm causa — e têm tratamento.</h2>
          <p className="mx-auto mt-4 mb-14 max-w-2xl font-sans text-lg text-brand-muted">
            Antes de desistir de melhorar, veja se o seu caso é um destes:
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => {
            const bgMap: Record<number, string> = {
              0: dorLombarAsset.url,
              1: dorPescocoAsset.url,
              2: herniaDiscoAsset.url,
              3: tratamentoNaoSustentaAsset.url,
              4: dorRepousoAsset.url,
              5: dorCronicaAsset.url,
            };
            const bgUrl = bgMap[i];
            return (
              <motion.div
                key={c.title}
                {...useFade(i * 0.1)}
                className="relative isolate overflow-hidden rounded-xl border border-brand-border bg-white p-6"
              >
                {bgUrl && (
                  <>
                    <div
                      aria-hidden
                      className="absolute inset-0 -z-20 bg-cover bg-center opacity-25"
                      style={{ backgroundImage: `url(${bgUrl})` }}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 -z-10 bg-gradient-to-t from-cream/70 via-cream/45 to-cream/20"
                    />
                  </>
                )}
                <c.icon className="relative h-7 w-7 text-gold" />
                <h3 className="relative mt-4 font-sans font-semibold text-navy">{c.title}</h3>
                <p className="relative mt-2 font-sans text-sm text-brand-muted">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.div {...useFade(0.2)} className="mx-auto mt-12 max-w-xl text-center">
          <p className="font-sans text-base text-brand-muted">
            Cada uma dessas situações tem causa identificável. O problema é que a maioria dos tratamentos genéricos não olha para o seu caso — apenas para o sintoma.
          </p>
          <a href="#metodo" className="mt-6 inline-block font-sans text-sm font-medium text-gold hover:text-gold-muted">
            Entenda como funciona o tratamento →
          </a>
        </motion.div>
      </div>
    </Section>
  );
}

/* ============ BIO ============ */
function Bio() {
  const creds = [
    { icon: GraduationCap, title: "Palestrante · I Congresso Regional de Fisioterapia (UniRios)", sub: "Hérnia de disco e dor crônica" },
    { icon: Newspaper, title: "Colunista", sub: "Revista Star Bem" },
    { icon: Tv2, title: "Entrevistado", sub: "Programa Sertão News" },
    { icon: Building2, title: "Sócio-Fundador", sub: "Instituto Realinhar · Paulo Afonso, BA" },
  ];
  return (
    <Section id="sobre" bg="white" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-[45fr_55fr]">
        <motion.div {...useFade()} className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl border border-[rgba(13,43,92,0.1)] aspect-video lg:aspect-[3/4]">
            <img src={fotoQuemSouEu.url} alt="Dr. Nigel Coriolano na recepção" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-4 left-4 rounded-xl bg-[#060F20] px-4 py-3 shadow-lg">
            <span className="font-mono text-xs text-gold">CREFITO-17/190962-F</span>
          </div>
        </motion.div>
        <motion.div {...useFade(0.1)} className="order-1 lg:order-2">
          <Eyebrow>QUEM VAI CUIDAR DE VOCÊ</Eyebrow>
          <h2 className="font-serif text-3xl text-navy md:text-4xl">Dr. Nigel Coriolano</h2>
          <p className="mt-2 font-sans text-xl text-brand-muted">Fisioterapeuta Especialista em Coluna e Controle da Dor</p>
          <div className="mt-6 mb-8 space-y-4 font-sans text-base leading-relaxed text-brand-text">
            <p>
              Sou fisioterapeuta com especialização em coluna vertebral, dor lombar, cervicalgia, hérnia de disco e dor crônica. Minha abordagem é simples: você merece entender o que está acontecendo com o seu corpo e receber um plano de tratamento que faça sentido para a sua vida — não uma receita genérica que todo mundo recebe.
            </p>
            <p>
              Sou sócio-fundador do Instituto Realinhar, em Paulo Afonso-BA, onde atendo de forma individualizada pacientes que buscam uma saída definitiva para a dor, sem depender de medicamentos indefinidamente.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {creds.map((c) => (
              <div key={c.title} className="flex items-start gap-3 rounded-xl bg-cream p-4">
                <c.icon className="h-5 w-5 shrink-0 text-gold mt-0.5" />
                <div>
                  <p className="font-sans text-sm font-medium text-navy">{c.title}</p>
                  <p className="font-sans text-xs text-brand-muted mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <PrimaryCTA>Agendar minha avaliação →</PrimaryCTA>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ============ MÉTODO ============ */
function Metodo() {
  const steps = [
    { n: "01", icon: ClipboardList, title: "Avaliação individualizada", desc: "Não começo pelo protocolo. Começo pela sua história. Exames, hábitos, histórico de dor e limitações reais da sua rotina." },
    { n: "02", icon: Target, title: "Plano de tratamento personalizado", desc: "Com base na avaliação, montamos juntos um plano concreto — com frequência, técnicas e objetivos claros. Sem promessas que não posso cumprir." },
    { n: "03", icon: TrendingUp, title: "Acompanhamento até o resultado", desc: "Monitoro a sua evolução a cada sessão. Se precisar ajustar o plano, ajustamos. O objetivo é resultado, não manutenção indefinida." },
  ];
  return (
    <Section id="metodo" bg="navy" className="py-20 md:py-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 70% 20%, rgba(196,161,69,0.06), transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div {...useFade()} className="text-center">
          <Eyebrow light center>COMO FUNCIONA</Eyebrow>
          <h2 className="font-serif text-3xl text-white md:text-4xl">
            Um tratamento que olha para você,
            <br />
            não para o exame.
          </h2>
          <p className="mx-auto mt-4 mb-16 max-w-xl font-sans text-base text-slate-300">
            A maioria das pessoas com dor crônica já fez múltiplos tratamentos. O que falta não é mais tentativa — é um processo estruturado, individualizado e com acompanhamento próximo.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div key={s.n} {...useFade(i * 0.1)} className="border-t border-[rgba(196,161,69,0.3)] pt-6">
              <div className="font-serif text-7xl text-[rgba(196,161,69,0.2)] leading-none">{s.n}</div>
              <s.icon className="mt-2 h-7 w-7 text-gold" />
              <h3 className="mt-4 font-serif text-xl text-white">{s.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...useFade(0.2)} className="mt-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(196,161,69,0.3)] bg-[rgba(196,161,69,0.06)] px-6 py-3">
            <Info className="h-4 w-4 text-gold" />
            <span className="font-mono text-xs text-slate-300">
              Tratamentos sérios não prometem resultado em uma sessão. Se você quer solução mágica, esse não é o lugar certo — e isso é um diferencial.
            </span>
          </span>
        </motion.div>
      </div>
    </Section>
  );
}

/* ============ ESPECIALIDADES ============ */
function Especialidades() {
  const items = [
    { icon: AlertTriangle, title: "Dor Lombar e Lombalgia", desc: "Tratamento da dor nas costas aguda ou crônica, com foco na causa do problema — não só no alívio momentâneo." },
    { icon: Layers, title: "Hérnia de Disco", desc: "Abordagem conservadora e eficaz para hérnia lombar e cervical, sem cirurgia como primeira opção." },
    { icon: ArrowDownRight, title: "Cervicalgia e Cervicobraquialgia", desc: "Dor no pescoço que irradia para braços e mãos — com ou sem formigamento. Causa e tratamento específicos." },
    { icon: Repeat, title: "Dor Crônica", desc: "Dor que persiste por mais de 3 meses merece uma abordagem diferente. Nem toda dor crônica aparece no exame — mas todas têm tratamento." },
    { icon: Activity, title: "Lesões e Reabilitação", desc: "Retorno à vida funcional após lesões musculoesqueléticas, com protocolo baseado no seu nível de atividade." },
    { icon: Waves, title: "Pilates Clínico Terapêutico", desc: "Fortalecimento e controle motor para pacientes em reabilitação, disponível no Instituto Realinhar." },
  ];
  return (
    <Section id="especialidades" bg="cream" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div {...useFade()} className="text-center">
          <Eyebrow center>O QUE EU TRATO</Eyebrow>
          <h2 className="font-serif text-3xl text-navy md:text-4xl">Condições em que sou especialista</h2>
          <p className="mx-auto mt-4 mb-14 max-w-2xl font-sans text-lg text-brand-muted">
            Cada condição abaixo tem protocolo específico. Não trato tudo de forma igual.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              {...useFade(i * 0.1)}
              className="rounded-xl border border-brand-border bg-white p-7 transition duration-300 hover:border-[rgba(196,161,69,0.5)] hover:shadow-md"
            >
              <div className="inline-flex rounded-lg bg-[rgba(196,161,69,0.1)] p-2">
                <c.icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="mt-4 font-serif text-lg text-navy">{c.title}</h3>
              <p className="mt-2 font-sans text-sm text-brand-muted">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============ DEPOIMENTOS ============ */
function Depoimentos() {
  const items = [
    { quote: "Depois de anos com dor lombar e vários tratamentos que não funcionaram, finalmente encontrei alguém que olhou para o meu caso de verdade.", name: "[Nome do Paciente]", sub: "Paulo Afonso, BA · Dor lombar crônica" },
    { quote: "Fui diagnosticada com hérnia de disco e estava com medo de cirurgia. O Dr. Nigel me explicou tudo, montou um plano e hoje estou sem dor.", name: "[Nome do Paciente]", sub: "Região de Paulo Afonso · Hérnia de disco" },
    { quote: "O formigamento no braço me impedia de trabalhar. Em menos de 2 meses de tratamento, recuperei a função. Atendimento impecável.", name: "[Nome do Paciente]", sub: "Paulo Afonso, BA · Cervicobraquialgia" },
  ];
  return (
    <Section id="depoimentos" bg="white" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div {...useFade()} className="text-center">
          <Eyebrow center>RESULTADOS REAIS</Eyebrow>
          <h2 className="font-serif text-3xl text-navy md:text-4xl">O que os pacientes dizem</h2>
          <p className="mx-auto mt-4 mb-14 max-w-2xl font-sans text-lg text-brand-muted">
            Depoimentos de pessoas que buscaram tratamento especializado e encontraram um caminho consistente para sair da dor.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={i}
              {...useFade(i * 0.1)}
              className="rounded-xl border border-brand-border bg-cream p-7 transition duration-300 hover:border-[rgba(196,161,69,0.5)] hover:shadow-md"
            >
              <div className="font-serif text-5xl text-[rgba(196,161,69,0.3)] leading-none mb-2">"</div>
              <p className="font-sans text-sm italic leading-relaxed text-brand-text">{t.quote}</p>
              <hr className="my-5 border-brand-border" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[rgba(13,43,92,0.1)]" />
                <div>
                  <p className="font-sans text-sm font-semibold text-navy">{t.name}</p>
                  <p className="font-sans text-xs text-brand-muted">{t.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center font-mono text-xs text-brand-muted">
          Depoimentos com autorização dos pacientes. Resultados individuais podem variar.
        </p>
      </div>
    </Section>
  );
}

/* ============ INSTITUTO ============ */
function Instituto() {
  return (
    <Section id="instituto" bg="navy" className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 md:px-8 lg:grid-cols-2">
        <motion.div {...useFade()} className="max-w-md">
          <Eyebrow>ONDE OS ATENDIMENTOS ACONTECEM</Eyebrow>
          <h2 className="font-serif text-2xl text-white md:text-3xl">Instituto Realinhar</h2>
          <p className="mt-2 mb-4 font-sans text-sm text-gold">Instituto de Terapia e Controle da Dor</p>
          <p className="font-sans text-sm leading-relaxed text-slate-300 mb-6">
            Os atendimentos do Dr. Nigel acontecem no Instituto Realinhar, uma clínica especializada projetada para o tratamento e controle da dor. Um espaço criado para que você se sinta cuidado desde o momento em que entra.
          </p>
          <div className="flex items-start gap-3 mt-4">
            <MapPin className="h-5 w-5 shrink-0 text-gold mt-0.5" />
            <p className="font-sans text-sm text-slate-300">
              Av. José Hemetério de Carvalho, 145
              <br />
              Centro · Paulo Afonso, BA
            </p>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-mono text-xs text-gold underline-offset-4 hover:underline"
          >
            Ver no Google Maps →
          </a>
        </motion.div>
        <motion.div {...useFade(0.1)}>
          <div className="overflow-hidden rounded-2xl border border-[rgba(196,161,69,0.2)] bg-[#060F20] aspect-video md:aspect-[4/3]">
            <img src={fotoRealinhar.url} alt="Dr. Nigel no Instituto Realinhar" className="h-full w-full object-cover" />
          </div>
          <div className="mt-3 flex items-center justify-center gap-3 opacity-80">
            <img src={institutoRealinhar.url} alt="Logo Instituto Realinhar" className="h-10 bg-white rounded px-2 py-1" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ============ CTA FINAL ============ */
function CtaFinal() {
  const dots = [4, 6, 9, 12, 14, 12, 9, 6, 4];
  return (
    <Section id="agendar" bg="cream" className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <motion.div {...useFade()} className="mb-6 flex items-end justify-center gap-2">
          {dots.map((s, i) => (
            <span
              key={i}
              className="rounded-full bg-[rgba(196,161,69,0.4)]"
              style={{ width: s, height: s, marginBottom: `${Math.abs(4 - i) * 3}px` }}
            />
          ))}
        </motion.div>
        <motion.div {...useFade(0.1)}>
          <Eyebrow center>PRÓXIMO PASSO</Eyebrow>
          <h2 className="font-serif text-3xl leading-tight text-navy md:text-5xl">
            Pronto para sair
            <br />
            da dor de vez?
          </h2>
          <p className="mx-auto mt-6 mb-10 max-w-lg font-sans text-lg text-brand-muted">
            Agende sua avaliação de coluna e dor. Uma conversa, uma avaliação completa e um plano feito para você — não para uma planilha de protocolo.
          </p>
        </motion.div>
        <motion.div {...useFade(0.2)} className="flex flex-col items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-10 py-4 font-sans text-lg font-semibold text-white shadow-lg shadow-green-500/20 transition hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" /> Agendar pelo WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(13,43,92,0.3)] px-8 py-3 font-sans text-sm text-navy transition hover:bg-navy/5"
          >
            <Instagram className="h-4 w-4" /> @nigelcoriolano no Instagram
          </a>
          <p className="mt-2 font-mono text-xs text-brand-muted">
            Respondemos em até 2 horas no horário comercial · Sem compromisso na primeira conversa
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

/* ============ FAQ ============ */
function Faq() {
  const items = [
    { q: "Quantas sessões vou precisar?", a: "Depende da sua condição e evolução. Na avaliação inicial, faço uma estimativa realista baseada no seu histórico e no que observo. Não trabalho com pacotes fechados por princípio." },
    { q: "É possível tratar sem cirurgia?", a: "Na grande maioria dos casos de hérnia de disco, dor lombar e cervical, o tratamento conservador (fisioterapia) é suficiente e eficaz. A cirurgia raramente é a primeira opção indicada." },
    { q: "Preciso de encaminhamento médico?", a: "Não é obrigatório. O fisioterapeuta tem autonomia profissional para avaliar e tratar. Mas se houver necessidade de encaminhamento a outro especialista, você será orientado." },
    { q: "O tratamento inclui uso de medicamentos?", a: "Não. A fisioterapia trabalha com técnicas manuais, exercício terapêutico e recursos específicos. Caso você já use medicação prescrita por médico, isso é respeitado — mas não é parte do meu trabalho prescrever." },
    { q: "Atende pelo convênio?", a: "Entre em contato pelo WhatsApp para verificar as modalidades de atendimento disponíveis no momento." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" bg="white" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <motion.div {...useFade()} className="text-center">
          <Eyebrow center>DÚVIDAS FREQUENTES</Eyebrow>
          <h2 className="font-serif text-3xl text-navy md:text-4xl">Perguntas que todo paciente faz antes de agendar</h2>
        </motion.div>
        <div className="mx-auto mt-12 max-w-2xl">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-brand-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-medium text-navy">{it.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 font-sans text-sm text-brand-muted">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  return (
    <footer className="bg-[#060F20] border-t border-[rgba(196,161,69,0.15)] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <img src={logoFooter.url} alt="Nigel Coriolano Fisioterapeuta" className="h-20 bg-white rounded-lg p-2" />
            <p className="mt-4 font-sans text-xs text-slate-500 max-w-xs">
              Especialista em coluna e controle da dor em Paulo Afonso, BA. CREFITO-17/190962-F
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">CONTATO</p>
            <div className="flex items-start gap-2 mb-3">
              <MapPin className="h-4 w-4 shrink-0 text-slate-500 mt-0.5" />
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-slate-400 hover:text-gold">
                Av. José Hemetério de Carvalho, 145 · Centro · Paulo Afonso, BA
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="h-4 w-4 shrink-0 text-slate-500" />
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-slate-400 hover:text-gold">
                @nigelcoriolano
              </a>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">INSTITUTO REALINHAR</p>
            <p className="font-sans text-xs text-slate-500">Instituto de Terapia e Controle da Dor</p>
            <p className="font-sans text-xs text-slate-500 mt-1">CNPJ 54.739.471/0001-45</p>
            <p className="font-sans text-xs text-slate-500 mt-1">Paulo Afonso, Bahia</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-6">
          <p className="font-mono text-xs text-slate-600">© 2024 Dr. Nigel Coriolano · Todos os direitos reservados</p>
          <p className="font-mono text-xs text-slate-600">Desenvolvido com cuidado</p>
        </div>
      </div>
    </footer>
  );
}


function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Problema />
        <Bio />
        <Metodo />
        <Especialidades />
        <Depoimentos />
        <Instituto />
        <CtaFinal />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}


