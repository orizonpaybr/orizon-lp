'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { Button } from '../ui/button'
import Link from 'next/link'

const benefits = [
  'Pagamentos 24h, sem burocracia, direto na sua conta.',
  'Ideal para empresas que precisam de agilidade no fluxo de caixa.',
  'Segurança total: tecnologia antifraude e proteção garantida.',
]

export function PixSection() {
  return (
    <Section id="solucoes" className="py-10 md:py-20 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-visible"
          >
            <div className="relative w-full max-w-2xl md:max-w-4xl mx-auto overflow-visible flex items-center justify-center min-h-[600px] md:min-h-[900px]">
              <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-accent rounded-full"></div>

              <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-accent rounded-full overflow-hidden">
                <Image
                  src="/images/mobile-app-screen-bg.png"
                  alt="Fundo azul para seção PIX"
                  fill
                  className="object-cover opacity-30"
                />
              </div>

              <Image
                src="/images/Elemento - Celular 04.png"
                alt="Celular mostrando notificações de pagamento recebido via PIX"
                width={800}
                height={960}
                className="relative z-10 drop-shadow-2xl rounded-2xl translate-y-3 translate-x-3 md:translate-y-6 md:translate-x-8 object-contain w-[290px] h-[420px] md:w-[430px] md:h-[620px]"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              PIX Instantâneo: Seu dinheiro em segundos
            </h2>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <HiCheckCircle
                    className="text-primary flex-shrink-0 mt-1"
                    size={24}
                  />
                  <span className="text-muted-foreground text-base md:text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-lg md:text-xl font-semibold text-foreground mb-6">
              Chega de esperar! Receba seu dinheiro agora.
            </p>

            <Link href="#contato">
              <Button variant="primary" size="lg">
                Eu quero!
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
