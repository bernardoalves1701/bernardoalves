import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bernardo Alves | Sites que transformam visitas em clientes',
  description:
    'Web designer em Canoas, RS. Sites rápidos, modernos e pensados para converter visitantes em clientes.',
  keywords: [
    'web designer em Canoas',
    'criação de sites',
    'site profissional',
    'site de alta conversão',
    'web design Rio Grande do Sul',
  ],
  openGraph: {
    title: 'Bernardo Alves | Sites que vendem todos os dias',
    description: 'Sites profissionais para empresas que querem crescer no digital.',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#050816',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
