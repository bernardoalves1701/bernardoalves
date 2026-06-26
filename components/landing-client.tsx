'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

type NavLink = {
  label: string
  href: string
}

export function SiteHeader({ navLinks, whatsappUrl }: { navLinks: NavLink[]; whatsappUrl: string }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#07101f]/75 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir para o início">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-700 text-sm font-black tracking-tighter shadow-lg shadow-blue-500/30">BA</span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">Bernardo Alves</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {navLinks.map((link) => <a className="transition hover:text-white" key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-xl border border-blue-300/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-blue-300/60 hover:bg-blue-500/20 sm:flex">
          Solicitar orçamento <ArrowRight size={16} />
        </a>
        <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 lg:hidden" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-menu mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#07101f]/95 p-3 backdrop-blur-xl lg:hidden">
          {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-slate-200 hover:bg-white/5">{link.label}</a>)}
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold">Solicitar orçamento <ArrowRight size={16} /></a>
        </nav>
      )}
    </header>
  )
}

export function FaqAccordion({ faqs }: { faqs: string[][] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="mx-auto mt-12 max-w-4xl divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02] px-5 sm:px-8">
      {faqs.slice(0, 6).map(([question, answer], index) => <div key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"><span className="font-medium text-slate-100">{question}</span><ChevronDown className={`shrink-0 text-blue-300 transition ${openFaq === index ? 'rotate-180' : ''}`} size={20} /></button><div className={`faq-panel overflow-hidden ${openFaq === index ? 'is-open' : ''}`}><p className="max-w-3xl pb-6 text-sm leading-relaxed text-slate-400">{answer}</p></div></div>)}
    </div>
  )
}

export function ParticleCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const isMobile = window.matchMedia('(max-width: 640px)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return
    const context = canvas.getContext('2d')
    if (!context) return

    let frameId = 0
    let isVisible = true
    let width = 0
    let height = 0
    const particleCount = isMobile ? 14 : window.matchMedia('(max-width: 1024px)').matches ? 22 : 42
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * (isMobile ? 1.1 : 1.6) + 0.35,
      speed: Math.random() * 0.00012 + 0.000025,
      alpha: Math.random() * 0.48 + 0.16,
    }))

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const ratio = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2)
      width = bounds.width
      height = bounds.height
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = (time: number) => {
      if (!isVisible) {
        frameId = requestAnimationFrame(draw)
        return
      }
      context.clearRect(0, 0, width, height)
      particles.forEach((particle) => {
        const drift = Math.sin(time * particle.speed * 4 + particle.x * 12) * 16
        const x = particle.x * width + drift
        const y = (particle.y * height - time * particle.speed * height) % height
        context.beginPath()
        context.fillStyle = `rgba(147, 197, 253, ${particle.alpha})`
        context.shadowBlur = isMobile ? 3 : 10
        context.shadowColor = 'rgba(96, 165, 250, 0.8)'
        context.arc(x, y < 0 ? y + height : y, particle.size, 0, Math.PI * 2)
        context.fill()
      })
      frameId = requestAnimationFrame(draw)
    }

    const observer = new ResizeObserver(resize)
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    })
    observer.observe(canvas)
    visibilityObserver.observe(canvas)
    resize()
    frameId = requestAnimationFrame(draw)

    return () => {
      observer.disconnect()
      visibilityObserver.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`pointer-events-none absolute inset-0 h-full w-full mix-blend-screen ${className || '-z-10 opacity-70'}`} aria-hidden="true" />
}
