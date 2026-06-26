import Image from 'next/image'
import type { ReactNode } from 'react'
import { FaqAccordion, ParticleCanvas, SiteHeader } from './landing-client'
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Code2,
  ContactRound,
  Figma,
  MessageCircle,
  MonitorSmartphone,
  MousePointer2,
  MoveUpRight,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react'

const whatsappUrl = 'https://wa.me/5551981685212?text=Olá%2C%20Bernardo!%20Quero%20conversar%20sobre%20um%20site%20para%20minha%20empresa.'

const navLinks = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Processo', href: '#processo' },
  { label: 'Dúvidas', href: '#duvidas' },
]

const proofItems = ['Entrega rápida', 'Design profissional', 'Responsivo', 'Suporte pós-entrega']

const pains = [
  'Sua empresa não aparece profissional?',
  'Clientes entram no Instagram, mas não compram?',
  'Seu concorrente parece maior do que você?',
  'Seu site parece antigo?',
]

const benefits = [
  { icon: Figma, title: 'Design profissional', text: 'Uma presença com acabamento de marca consolidada.' },
  { icon: Search, title: 'Otimização para Google', text: 'Estrutura técnica pronta para ser encontrada.' },
  { icon: Zap, title: 'Carregamento rápido', text: 'Menos espera. Mais pessoas avançando para o contato.' },
  { icon: MonitorSmartphone, title: 'Prioridade para mobile', text: 'Experiência pensada para a tela em que a decisão acontece.' },
  { icon: MousePointer2, title: 'UX/UI profissional', text: 'Cada detalhe guia o visitante até a próxima ação.' },
  { icon: MessageCircle, title: 'Integração com WhatsApp', text: 'Atendimento no canal que seus clientes já usam.' },
  { icon: ShieldCheck, title: 'Segurança', text: 'Boas práticas para manter seu site protegido e confiável.' },
  { icon: BadgeCheck, title: 'Suporte', text: 'Acompanhamento após a entrega, sem sumir depois da publicação.' },
]

const faqs = [
  ['Em quanto tempo meu site fica pronto?', 'Na maioria dos casos, a entrega acontece em até uma semana. Se o projeto exigir mais páginas, integrações ou recursos específicos, o prazo pode ser um pouco maior — sempre alinhado com você antes do início.'],
  ['O site funciona bem no celular?', 'Sim. O projeto é pensado primeiro para telas menores e depois expandido para desktop, garantindo uma experiência consistente em qualquer dispositivo.'],
  ['Você cuida do domínio e da hospedagem?', 'Posso orientar e configurar toda a estrutura necessária para que o site entre no ar com segurança e autonomia para sua empresa.'],
  ['O site aparece no Google?', 'A estrutura técnica segue boas práticas de SEO. Para disputas mais concorridas, o crescimento orgânico pode ser complementado por uma estratégia contínua.'],
  ['Posso atualizar o site depois da entrega?', 'Sim. A solução é planejada para permitir evolução. Também posso realizar atualizações pontuais sempre que sua empresa precisar.'],
  ['O site terá botão para WhatsApp?', 'Sim. Os pontos de contato são organizados de forma estratégica para reduzir atrito e facilitar o pedido de orçamento.'],
  ['Você trabalha apenas com empresas de Canoas?', 'Não. Atendo empresas de Canoas, do Rio Grande do Sul e de todo o Brasil de forma remota.'],
  ['Preciso ter todos os textos prontos?', 'Não necessariamente. O processo de briefing organiza as informações e ajuda a definir uma mensagem clara, persuasiva e adequada ao seu público.'],
  ['Qual é o investimento?', 'O investimento é definido conforme as necessidades do projeto. Você recebe uma proposta objetiva, com escopo, prazo e condições bem explicados.'],
  ['Existe suporte depois da publicação?', 'Sim. Você não fica sem direção após a entrega. O suporte inicial está incluído para garantir uma publicação tranquila.'],
]

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`reveal-on-scroll ${className}`}>{children}</div>
}

export function LandingPage() {
  return (
    <main className="overflow-hidden bg-[#050816] text-white selection:bg-blue-500/40">
      <SiteHeader navLinks={navLinks} whatsappUrl={whatsappUrl} />

      <section id="inicio" className="hero-grid relative isolate min-h-[880px] px-5 pb-16 pt-36 sm:px-8 lg:min-h-screen lg:px-12 lg:pt-44">
        <div className="hero-orb absolute -right-20 top-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="mouse-glow absolute left-[44%] top-[35%] -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[110px]" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.16),transparent_28%),radial-gradient(circle_at_20%_85%,rgba(96,165,250,0.08),transparent_24%)]" />
        <ParticleCanvas />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16">
          <div className="relative z-10">
            <div className="hero-reveal mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-blue-200">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_16px_#60a5fa]" /> Web design para negócios locais
            </div>
            <h1 className="hero-reveal max-w-3xl text-balance text-[clamp(3.2rem,6vw,6.15rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-white">Sua empresa merece um site que <span className="hero-word">vende</span> todos os dias.</h1>
            <p className="hero-reveal mt-7 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">Sites profissionais, rápidos e modernos para transformar visitantes em clientes.</p>
            <div className="hero-reveal mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-glow group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-4 text-base font-bold shadow-xl shadow-blue-600/25 transition hover:-translate-y-0.5 hover:shadow-blue-500/40">Solicitar orçamento <ArrowRight className="transition group-hover:translate-x-1" size={18} /></a>
              <a href="#processo" className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.03] px-6 py-4 text-base font-semibold transition hover:border-blue-200/40 hover:bg-white/[0.06]">Como funciona <MoveUpRight size={18} /></a>
            </div>
            <div className="hero-reveal mt-10 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/10 pt-6 sm:grid-cols-4 sm:gap-x-3">
              {proofItems.map((item) => <span key={item} className="flex items-center gap-2 text-xs leading-tight text-slate-300"><Check size={14} className="shrink-0 text-blue-300" /> {item}</span>)}
            </div>
          </div>

          <div className="hero-reveal relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div className="hero-visual relative overflow-hidden rounded-[2rem] border border-blue-200/40 bg-[#071326]/70 p-3 shadow-[0_30px_110px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_40%,rgba(37,99,235,0.24),transparent_34%),linear-gradient(115deg,rgba(5,8,22,0.25),rgba(5,8,22,0.04))]" />
              <div className="relative rounded-[1.45rem] border border-white/[0.12] bg-[#06101f]/35 p-5 backdrop-blur-[2px] sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">Mapa de crescimento</p><p className="mt-1 text-sm text-slate-400">Uma presença que gera o próximo passo.</p></div>
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-blue-300/20 bg-blue-500/10 text-blue-300"><TrendingUp size={19} /></span>
                </div>
                <div className="relative mt-7 min-h-[350px] sm:min-h-[410px]">
                  <div className="absolute inset-x-[14%] top-[10%] bottom-[10%] rounded-full border border-blue-400/10" />
                  <div className="absolute inset-x-[23%] top-[20%] bottom-[20%] rounded-full border border-blue-400/10" />
                  <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 640 420" fill="none" aria-hidden="true">
                    <path className="signal-line" d="M88 338C164 332 159 248 245 250C329 252 300 152 403 154C503 157 498 75 573 69" stroke="url(#lineGradient)" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 10" />
                    <defs><linearGradient id="lineGradient" x1="88" y1="338" x2="573" y2="69" gradientUnits="userSpaceOnUse"><stop stopColor="#60A5FA" /><stop offset="1" stopColor="#2563EB" /></linearGradient></defs>
                  </svg>
                  <SignalNode className="left-[4%] top-[64%]" icon={<ContactRound size={18} />} label="Contatos" detail="Conversas qualificadas" />
                  <SignalNode className="left-[30%] top-[42%]" icon={<TrendingUp size={18} />} label="Vendas" detail="Mais oportunidades" />
                  <SignalNode className="right-[20%] top-[16%]" icon={<ShieldCheck size={18} />} label="Autoridade" detail="Presença que convence" />
                  <SignalNode className="right-[1%] top-[1%]" icon={<Sparkles size={18} />} label="Confiança" detail="Marca mais forte" />
                  <div className="parallax-card absolute bottom-0 right-0 w-[48%] rounded-2xl border border-white/15 bg-[#071a3c]/75 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
                    <div className="mb-4 flex items-center justify-between"><span className="text-xs font-medium text-slate-200">Próxima ação</span><span className="h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_14px_#60a5fa]" /></div>
                    <p className="text-lg font-semibold tracking-tight text-white">Contato direto</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">Um caminho simples entre interesse e conversa.</p>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="signal-progress h-full w-[78%] rounded-full bg-gradient-to-r from-blue-500 via-sky-300 to-blue-500" /></div>
                  </div>
                  <div className="parallax-card absolute left-0 top-2 rounded-2xl border border-white/10 bg-[#0a1933]/80 px-4 py-3 shadow-xl backdrop-blur-xl"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Experiência</p><p className="mt-1 text-sm font-semibold text-white">Feita para converter</p></div>
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500"><span>Clareza</span><span>Confiança</span><span>Conversão</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker border-y border-white/10 bg-blue-500/[0.04] py-4"><div className="ticker-track whitespace-nowrap text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/80">Sites que inspiram confiança <span>✦</span> Design que comunica valor <span>✦</span> Estratégia que gera conversas <span>✦</span> Sites que inspiram confiança <span>✦</span> Design que comunica valor <span>✦</span> Estratégia que gera conversas <span>✦</span></div></div>

      <section className="section-shell relative" id="solucoes">
        <Reveal className="mx-auto max-w-3xl text-center"><p className="eyebrow">O problema não é só visual</p><h2 className="section-title mt-4">Quando o seu site não acompanha o seu negócio, ele custa oportunidades.</h2><p className="section-copy mx-auto mt-5">A primeira impressão acontece rápido. Uma presença digital fraca transforma interesse em dúvida antes mesmo da conversa começar.</p></Reveal>
        <div className="mx-auto mt-14 grid max-w-7xl gap-4 md:grid-cols-2">
          {pains.map((pain, index) => <Reveal key={pain}><article className="group flex min-h-36 items-end justify-between rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300/35 hover:bg-blue-500/[0.06]"><span className="max-w-sm text-xl font-medium tracking-tight text-slate-100 sm:text-2xl">{pain}</span><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-sm font-semibold text-slate-400 transition group-hover:border-blue-300/30 group-hover:bg-blue-500/15 group-hover:text-blue-200">0{index + 1}</span></article></Reveal>)}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="solution-constellation relative isolate mx-auto max-w-[96rem] overflow-hidden rounded-[2rem] bg-[#071326] p-7 shadow-[0_0_120px_rgba(37,99,235,0.14)] sm:p-10 lg:min-h-[620px] lg:p-16">
          <Image src="/media/constelacao-conversao.webp" alt="" fill sizes="100vw" className="solution-art object-cover object-right opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,22,0.96)_0%,rgba(5,8,22,0.88)_35%,rgba(5,8,22,0.32)_72%,rgba(5,8,22,0.08)_100%)]" />
          <div className="solution-beam" />
          <ParticleCanvas className="z-[1] opacity-35" />
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal><p className="eyebrow">A solução</p><h2 className="section-title mt-4">Um site profissional não é custo. É infraestrutura para <span className="text-blue-300">crescer.</span></h2><p className="section-copy mt-5 text-slate-200">Estratégia, posicionamento e tecnologia trabalham juntos para que a sua empresa pareça tão boa quanto realmente é.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition hover:text-white">Falar sobre o seu projeto <ArrowRight size={16} /></a></Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              [ShieldCheck, 'Mais confiança', 'Uma imagem coerente reduz a insegurança antes do primeiro contato.'],
              [Sparkles, 'Mais autoridade', 'O seu negócio ganha uma presença que sustenta o preço e a qualidade.'],
              [TrendingUp, 'Mais vendas', 'Páginas orientadas para guiar, convencer e converter.'],
              [MessageCircle, 'Mais contatos', 'Chamadas claras para transformar visitas em conversas.'],
            ].map(([Icon, title, text]) => { const ItemIcon = Icon as typeof ShieldCheck; return <Reveal key={title as string}><article className="rounded-2xl border border-white/10 bg-[#071326]/70 p-5"><ItemIcon className="text-blue-300" size={22} /><h3 className="mt-7 text-lg font-semibold">{title as string}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{text as string}</p></article></Reveal> })}
          </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="section-shell overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -inset-8 -z-10 rounded-full bg-blue-500/20 blur-[80px]" />
            <div className="overflow-hidden rounded-[2rem] border border-blue-200/15 bg-[#071326] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <Image src="/media/bernardo-alves-retrato.webp" alt="Bernardo Alves, desenvolvedor profissional de sites" width={1125} height={1400} sizes="(max-width: 1024px) 82vw, 34vw" className="h-auto w-full object-cover" />
            </div>
            <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-blue-200 lg:text-left">Bernardo Alves · Canoas, RS</p>
          </Reveal>
          <Reveal>
            <p className="eyebrow">Quem conduz o projeto</p>
            <h2 className="section-title mt-4 max-w-3xl">Você conhece o seu negócio. Eu transformo isso em uma presença que as pessoas <span className="hero-word">entendem e escolhem.</span></h2>
            <p className="section-copy mt-6 max-w-2xl">Sou Bernardo Alves, desenvolvedor profissional de sites em Canoas, Rio Grande do Sul. Uno programação, desenvolvimento de softwares, design, edição de vídeo e social media para resolver um problema simples: empresas boas não deveriam parecer comuns na internet.</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">O seu cliente é o protagonista. Meu papel é organizar a mensagem, remover a dúvida e construir o caminho que leva do interesse ao contato.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                [Code2, 'Tecnologia', 'Sites e softwares com estrutura sólida.'],
                [Figma, 'Direção visual', 'Design que sustenta percepção de valor.'],
                [MonitorSmartphone, 'Conteúdo digital', 'Vídeo e social media alinhados à marca.'],
              ].map(([Icon, title, text]) => { const ItemIcon = Icon as typeof Code2; return <article key={title as string} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"><ItemIcon className="text-blue-300" size={19} /><h3 className="mt-4 font-semibold">{title as string}</h3><p className="mt-1 text-sm leading-relaxed text-slate-400">{text as string}</p></article> })}
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition hover:text-white">Conversar com Bernardo <ArrowRight size={16} /></a>
          </Reveal>
        </div>
      </section>

      <section className="section-shell bg-white/[0.015]">
        <Reveal className="mx-auto max-w-3xl text-center"><p className="eyebrow">Por que funciona</p><h2 className="section-title mt-4">Todo detalhe tem uma função: ajudar sua empresa a ser escolhida.</h2></Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-3 lg:grid-cols-4">
          {benefits.map((benefit) => { const Icon = benefit.icon; return <Reveal key={benefit.title}><article className="group h-full rounded-2xl border border-white/10 bg-[#07101f]/55 p-4 transition hover:border-blue-300/30 hover:bg-blue-500/[0.055] sm:p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 text-blue-300 transition group-hover:scale-105 group-hover:bg-blue-500/20"><Icon size={19} /></span><h3 className="mt-4 font-semibold sm:mt-6">{benefit.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{benefit.text}</p></article></Reveal> })}
        </div>
      </section>

      <section className="section-shell hidden md:block">
        <Reveal className="mx-auto max-w-3xl text-center"><p className="eyebrow">A diferença é visível</p><h2 className="section-title mt-4">Seu site ajuda a empresa a avançar ou a ficar para trás?</h2></Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
          <Reveal><article className="rounded-[1.7rem] border border-rose-300/15 bg-rose-500/[0.035] p-7 sm:p-9"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-rose-200">Sem site profissional</p><div className="mt-7 space-y-5">{['Menos vendas', 'Menos autoridade', 'Menos confiança'].map((item) => <p key={item} className="flex items-center gap-3 text-xl text-slate-200"><X className="text-rose-300" size={20} />{item}</p>)}</div></article></Reveal>
          <Reveal><article className="rounded-[1.7rem] border border-blue-300/20 bg-blue-500/[0.075] p-7 shadow-[0_0_80px_rgba(37,99,235,0.08)] sm:p-9"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">Com site profissional</p><div className="mt-7 space-y-5">{['Mais vendas', 'Mais autoridade', 'Mais clientes', 'Mais credibilidade'].map((item) => <p key={item} className="flex items-center gap-3 text-xl text-white"><Check className="text-blue-300" size={21} />{item}</p>)}</div></article></Reveal>
        </div>
      </section>

      <section id="processo" className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center"><p className="eyebrow">Um processo simples, sem enrolação</p><h2 className="section-title mt-4">Do primeiro briefing ao site no ar, você sabe exatamente o que acontece.</h2></Reveal>
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-3 md:mt-14 md:grid-cols-5">
          {[
            ['01', 'Briefing', 'Entendo o negócio, o público e o que precisa mudar.'],
            ['02', 'Design', 'Transformo a estratégia em uma interface clara e marcante.'],
            ['03', 'Desenvolvimento', 'Construo uma experiência rápida, responsiva e confiável.'],
            ['04', 'Entrega', 'Reviso cada tela e publico com a estrutura pronta.'],
            ['05', 'Suporte', 'Acompanho os primeiros passos depois de entrar no ar.'],
          ].map(([number, title, text]) => <Reveal key={number}><article className="relative h-full rounded-2xl border border-white/10 bg-white/[0.025] p-4 sm:p-5"><span className="text-xs font-bold tracking-[0.18em] text-blue-300">{number}</span><div className="my-4 h-px bg-gradient-to-r from-blue-400/60 to-transparent sm:my-6" /><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p></article></Reveal>)}
        </div>
      </section>

      <section className="section-shell pt-0">
        <Reveal className="cta-ribbon relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-blue-300/30 bg-[#071326] px-7 py-12 shadow-[0_0_100px_rgba(37,99,235,0.12)] sm:px-12 lg:px-16 lg:py-16"><Image src="/media/fita-luminosa.webp" alt="" fill sizes="100vw" className="object-cover object-right opacity-85" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,22,0.97)_0%,rgba(5,8,22,0.88)_42%,rgba(5,8,22,0.24)_100%)]" /><div className="relative max-w-3xl"><p className="eyebrow text-blue-200">Uma proposta que cabe no momento do seu negócio</p><h2 className="mt-4 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl">Tenha um site profissional por um investimento muito abaixo de uma agência tradicional.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-50/75">Você fala diretamente com quem pensa, projeta e constrói o site. Menos camadas, mais clareza e uma entrega à altura da sua empresa.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-glow mt-9 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-bold text-blue-700 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20">Quero uma proposta <ArrowRight size={18} /></a></div></Reveal>
      </section>

      <section id="duvidas" className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center"><p className="eyebrow">Dúvidas frequentes</p><h2 className="section-title mt-4">Tudo o que você precisa saber antes de começar.</h2></Reveal>
        <FaqAccordion faqs={faqs} />
      </section>

      <section className="relative px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.22),transparent_43%)]" />
        <Reveal className="mx-auto max-w-4xl text-center"><p className="eyebrow">O próximo passo começa agora</p><h2 className="mt-5 text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl">Seu próximo cliente pode estar procurando sua empresa agora.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Vamos construir uma presença digital que gera resultados.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-5 text-lg font-bold shadow-2xl shadow-blue-500/30 transition hover:-translate-y-1 hover:shadow-blue-400/35"><MessageCircle size={21} /> Falar no WhatsApp <ArrowRight className="transition group-hover:translate-x-1" size={19} /></a></Reveal>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-slate-500 sm:flex-row sm:items-center"><div className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-xs font-black text-white">BA</span><span>Bernardo Alves · Web designer em Canoas, RS</span></div><div className="flex gap-5"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">WhatsApp</a><a href="#inicio" className="transition hover:text-white">Voltar ao topo</a></div></div></footer>
    </main>
  )
}

function SignalNode({ className, icon, label, detail }: { className: string; icon: ReactNode; label: string; detail: string }) {
  return <div className={`absolute z-10 ${className}`}><div className="group relative flex items-center gap-2"><span className="grid h-10 w-10 place-items-center rounded-full border border-blue-200/60 bg-[#0b2861] text-blue-100 shadow-[0_0_0_7px_rgba(37,99,235,0.08),0_0_22px_rgba(96,165,250,0.42)]">{icon}</span><div className="hidden whitespace-nowrap rounded-lg border border-white/10 bg-[#081426]/90 px-2.5 py-1.5 backdrop-blur sm:block"><p className="text-xs font-semibold text-white">{label}</p><p className="mt-0.5 text-[10px] text-slate-400">{detail}</p></div></div></div>
}
