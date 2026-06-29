import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Activity, Zap, AlertCircle, RefreshCw, Clock, Brain,
  GraduationCap, Newspaper, Tv2, Building2,
  ClipboardList, Target, TrendingUp, Info,
  AlertTriangle, Layers, ArrowDownRight, Repeat, Waves,
  MapPin, Instagram, ChevronDown, MessageCircle, ExternalLink,
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
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-7 py-3.5 font-sans font-semibold text-navy-dark shadow-md shadow-gold/20 transition hover:shadow-lg hover:shadow-gold/30 hover:brightness-105 ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}

/* ============ HEADER LOGO ============ */
function HeaderLogo() {
  return (
    <div className="w-full leading-none">
      <a href="/" className="block leading-none">
        <img
          src={bannerAsset.url}
          alt="Dr. Nigel Coriolano — Fisioterapeuta"
          className="h-auto max-h-[100px] w-[290px] object-contain object-left sm:w-[300px] md:max-h-[120px] md:w-[310px]"
        />
      </a>
    </div>
  );
}




/* ============ HERO ============ */
function Hero() {
  return (
    <Section bg="cream" className="relative isolate overflow-hidden">
      {/* Background image */}
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
      {/* Gradient overlay for readability */}
      <div
        aria-hidden
        className="absolute top-0 left-0 h-full w-full -z-10 lg:w-[65%]"
        style={{
          background: "linear-gradient(90deg, rgba(248,245,240,0.96) 0%, rgba(248,245,240,0.88) 55%, rgba(248,245,240,0.40) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-1 pb-0 md:px-8 lg:pt-2">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          {/* Text content */}
          <div className="max-w-xl lg:max-w-[55%] lg:pb-8">
            <HeaderLogo />

            <motion.div {...useFade(0.1)} className="mt-1">
              <span className="inline-flex rounded-full border border-gold/60 bg-gold/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-navy-dark">
                CREFITO-17/190962-F · Paulo Afonso, BA
              </span>
            </motion.div>

            <motion.h1 {...useFade(0.2)} className="mt-2 font-serif text-4xl leading-tight text-navy-dark md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Você já tentou de tudo para essa dor passar.
              <br />
              <span className="text-gold">Ela voltou.</span>
            </motion.h1>
            <motion.p {...useFade(0.3)} className="mt-2 max-w-lg font-sans text-base text-brand-text md:text-lg">
              Sou o Dr. Nigel Coriolano, fisioterapeuta especialista em coluna e controle da dor. Aqui você recebe avaliação criteriosa, plano personalizado e acompanhamento até o resultado — sem depender de medicamentos.
            </motion.p>
            <motion.div {...useFade(0.4)} className="mt-4">
              <PrimaryCTA>Quero agendar minha avaliação →</PrimaryCTA>
            </motion.div>
          </div>

          {/* Hero image — overlaps background, starts at the section seam */}
          <div className="relative mt-3 -mx-6 self-end md:-mx-8 lg:absolute lg:bottom-0 lg:right-0 lg:mx-0 lg:mt-0 lg:h-[88%] lg:w-auto lg:max-w-[48%]">
            <img
              src={fotoHero.url}
              alt="Dr. Nigel Coriolano, fisioterapeuta"
              className="h-auto max-h-[320px] w-full max-w-md object-contain object-right-bottom md:max-h-[480px] md:max-w-lg lg:h-full lg:max-h-none lg:max-w-none lg:w-auto"
            />
          </div>
        </div>
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
      <div className="mx-auto max-w-6xl px-6 md:px-8">
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
function BioContent() {
  const creds = [
    { icon: GraduationCap, title: "Palestrante · I Congresso Regional de Fisioterapia (UniRios)", sub: "Hérnia de disco e dor crônica" },
    { icon: Newspaper, title: "Colunista", sub: "Revista Star Bem" },
    { icon: Tv2, title: "Entrevistado", sub: "Programa Sertão News" },
    { icon: Building2, title: "Sócio-Fundador", sub: "Instituto Realinhar · Paulo Afonso, BA" },
  ];
  return (
    <>
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
    </>
  );
}

function Bio() {
  return (
    <Section id="sobre" bg="white" className="pt-0 pb-20 md:py-28">
      <div className="mx-auto max-w-6xl md:px-8">
        {/* Mobile: imagem full-bleed no topo, sem quadro, texto sobreposto com gradiente */}
        <div className="lg:hidden relative -mx-6 md:-mx-8">
          <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
            <img
              src={fotoQuemSouEu.url}
              alt="Dr. Nigel Coriolano na recepção"
              className="h-full w-full object-cover object-top"
            />
            {/* Gradient from photo to white; text sits on the lower-half seam */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 42%, rgba(255,255,255,0.78) 58%, rgba(255,255,255,0.95) 72%, rgba(255,255,255,1) 100%)",
              }}
            />
          </div>
          <div className="relative -mt-[55%] px-6 md:px-8 pb-8">
            <motion.div {...useFade(0.1)}>
              <BioContent />
            </motion.div>
          </div>
        </div>

        {/* Desktop: grid com foto e texto lado a lado */}
        <div className="hidden lg:grid grid-cols-[45fr_55fr] items-center gap-12 px-6 md:px-8">
          <motion.div {...useFade()} className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-[rgba(13,43,92,0.1)] aspect-[3/4]">
              <img src={fotoQuemSouEu.url} alt="Dr. Nigel Coriolano na recepção" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-4 left-4 rounded-xl bg-[#060F20] px-4 py-3 shadow-lg">
              <span className="font-mono text-xs text-gold">CREFITO-17/190962-F</span>
            </div>
          </motion.div>
          <motion.div {...useFade(0.1)}>
            <BioContent />
          </motion.div>
        </div>
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
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
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
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div {...useFade()} className="text-center">
          <Eyebrow center>O QUE EU TRATO</Eyebrow>
          <h2 className="font-serif text-3xl text-navy md:text-4xl">Condições em que sou especialista</h2>
          <p className="mx-auto mt-4 mb-14 max-w-2xl font-sans text-lg text-brand-muted">
            Cada condição abaixo tem protocolo específico. Não trato tudo de forma igual.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: "1400px" }}>
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              {...useFade(i * 0.1)}
              whileHover={{ rotateX: -6, rotateY: 8, translateY: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group relative isolate overflow-hidden rounded-2xl p-7"
              style={{
                transformStyle: "preserve-3d",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(247,244,238,0.65) 45%, rgba(13,43,92,0.18) 100%)",
                boxShadow:
                  "inset 1px 1px 0 rgba(255,255,255,0.9), inset -1px -1px 0 rgba(13,43,92,0.25), inset 0 0 28px rgba(196,161,69,0.18), 0 18px 40px -18px rgba(13,43,92,0.45), 0 8px 18px -10px rgba(196,161,69,0.35)",
                border: "1px solid rgba(255,255,255,0.6)",
                backdropFilter: "blur(6px)",
              }}
            >
              {/* Crystal facet — top-left light bleed */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-90"
                style={{
                  background:
                    "radial-gradient(120% 80% at 10% 0%, rgba(232,200,106,0.55) 0%, rgba(232,200,106,0) 45%), radial-gradient(110% 90% at 100% 100%, rgba(13,43,92,0.35) 0%, rgba(13,43,92,0) 50%)",
                }}
              />
              {/* Specular highlight streak */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-70 mix-blend-screen"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.25) 100%)",
                }}
              />
              {/* Glossy top edge */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-3 top-0 h-px rounded-full"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent)" }}
              />

              <div
                className="relative inline-flex rounded-xl p-2.5"
                style={{
                  background:
                    "linear-gradient(135deg, #E8C86A 0%, #C4A145 50%, #9E8235 100%)",
                  boxShadow:
                    "inset 1px 1px 0 rgba(255,255,255,0.7), inset -1px -1px 0 rgba(0,0,0,0.25), 0 8px 16px -6px rgba(196,161,69,0.55)",
                  transform: "translateZ(30px)",
                }}
              >
                <c.icon className="h-5 w-5 text-navy-dark" strokeWidth={2.25} />
              </div>
              <h3
                className="relative mt-5 font-serif text-lg text-navy"
                style={{ transform: "translateZ(20px)", textShadow: "0 1px 0 rgba(255,255,255,0.6)" }}
              >
                {c.title}
              </h3>
              <p
                className="relative mt-2 font-sans text-sm text-brand-muted"
                style={{ transform: "translateZ(10px)" }}
              >
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============ DEPOIMENTOS ============ */
function Depoimentos() {
  const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
  const Star = () => (
    <svg viewBox="0 0 20 20" fill="#FBBC05" width="16" height="16" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  );
  const reviews = [
    { color: "#E67535", initial: "M", name: "Mara Voluzia", text: "Foi muito boa, estava sem poder andar direito com dores no joelho, já na terceira sessão de fisioterapia não sentia mais dores. Profissional atencioso, com empatia." },
    { color: "#1A8763", initial: "L", name: "Luzia Santos", text: "Fui paciente dele durante um bom tempo, só tenho a agradecer por todo o cuidado e responsabilidade. Um profissional atencioso e capacitado, indico de olhos fechados, virou um grande amigo da família!" },
    { color: "#188038", initial: "M", name: "Marcia Mothe", text: "Foi muito boa, diferente e específica, já que cada paciente tem sua necessidade particular. O profissional é atencioso e sempre atualiza seus conhecimentos." },
    { color: "#9334E6", initial: "M", name: "Milena Henriques", text: "Excelente profissional, responsável, humano e comprometido. Sempre respeitando as condições do paciente e inserindo a família na terapia. Super recomendo!" },
    { color: "#34A853", initial: "R", name: "Rayd Silva", text: "Dr. Nigel muito competente no seu profissionalismo e atendimento, dando qualidade de vida aos seus pacientes, confiança e segurança. Tratamento sem cirurgia e sem remédios. Profissional de caráter honesto e comprometido." },
    { color: "#1A73E8", initial: "R", name: "Rute Reis", text: "Excelente profissional! Aquele que quer ver resultados. Muito atencioso e preocupado com o bem estar do paciente. Estou na sexta sessão de fisioterapia e já me sinto muito melhor de dores crônicas que sofria há bastante tempo. Super recomendo." },
  ];
  return (
    <Section id="depoimentos" bg="white" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div {...useFade()} className="text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <GoogleIcon />
            <span className="font-sans text-xs uppercase tracking-widest text-gold">AVALIAÇÕES NO GOOGLE</span>
          </div>
          <h2 className="mt-2 mb-14 text-center font-serif text-3xl text-navy md:text-4xl">O que os pacientes dizem</h2>
        </motion.div>
      </div>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max gap-5 animate-[depoimentos-scroll_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="flex h-auto w-[300px] shrink-0 flex-col rounded-xl border border-[rgba(0,0,0,0.08)] bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:w-[340px]"
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full font-sans text-sm font-semibold text-white"
                  style={{ backgroundColor: r.color }}
                >
                  {r.initial}
                </div>
                <p className="font-sans text-[14px] font-semibold text-navy">{r.name}</p>
              </div>
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} />)}
              </div>
              <p className="flex-1 font-sans text-sm leading-relaxed text-brand-text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes depoimentos-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </Section>
  );
}

/* ============ INSTITUTO ============ */
function InstitutoContent() {
  return (
    <>
      <Eyebrow light>ONDE OS ATENDIMENTOS ACONTECEM</Eyebrow>
      <h2 className="font-serif text-2xl text-white md:text-3xl">Instituto Realinhar</h2>
      <p className="mt-2 mb-4 font-sans text-sm text-gold">Instituto de Terapia e Controle da Dor</p>
      <p className="font-sans text-sm leading-relaxed text-slate-300 mb-6">
        Os atendimentos do Dr. Nigel acontecem no Instituto Realinhar, uma clínica especializada projetada para o tratamento e controle da dor. Um espaço criado para que você se sinta cuidado desde o momento em que entra.
      </p>
      <div className="flex items-start gap-3">
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
    </>
  );
}

function Instituto() {
  return (
    <Section id="instituto" bg="navy-dark" className="pt-0 md:pt-0">
      <div className="mx-auto max-w-6xl md:px-8">
        {/* Mobile & Tablet: imagem full-bleed no topo, sem quadro, texto sobreposto com gradiente navy */}
        <div className="lg:hidden relative -mx-6 md:-mx-8">
          <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
            <img
              src={fotoRealinhar.url}
              alt="Dr. Nigel no Instituto Realinhar"
              className="h-full w-full object-cover object-center"
            />
            {/* Gradient from photo to navy-dark so text sits on the lower-half seam */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, rgba(6,15,32,0) 0%, rgba(6,15,32,0) 42%, rgba(6,15,32,0.78) 58%, rgba(6,15,32,0.95) 72%, rgba(6,15,32,1) 100%)",
              }}
            />
          </div>
          <div className="relative -mt-[55%] px-6 md:px-8 pb-12">
            <motion.div {...useFade(0.1)}>
              <InstitutoContent />
            </motion.div>
            <div className="mt-5 flex items-center justify-center gap-3 opacity-90">
              <img src={institutoRealinhar.url} alt="Logo Instituto Realinhar" className="h-10 bg-white rounded px-2 py-1" />
            </div>
          </div>
        </div>

        {/* Desktop: grid com foto e texto lado a lado, igual a #sobre */}
        <div className="hidden lg:grid grid-cols-[45fr_55fr] items-center gap-12 px-6 md:px-8 py-20">
          <motion.div {...useFade()} className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-[rgba(13,43,92,0.1)] aspect-[3/4]">
              <img src={fotoRealinhar.url} alt="Dr. Nigel no Instituto Realinhar" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-4 left-4 rounded-xl bg-white px-3 py-2 shadow-lg">
              <img src={institutoRealinhar.url} alt="Logo Instituto Realinhar" className="h-8" />
            </div>
          </motion.div>
          <motion.div {...useFade(0.1)}>
            <InstitutoContent />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ============ CTA FINAL ============ */
function CtaFinal() {
  const dots = [4, 6, 9, 12, 14, 12, 9, 6, 4];
  return (
    <Section id="agendar" bg="cream" className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center md:px-8">
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
      <div className="mx-auto max-w-3xl px-6 md:px-8">
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
      <div className="mx-auto max-w-6xl px-6 md:px-8">
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


