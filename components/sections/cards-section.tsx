'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import { SiMastercard, SiPix, SiVisa } from 'react-icons/si'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import { Button } from '../ui/button'
import Link from 'next/link'

const benefits = [
  'Aceite crédito, débito e recorrência sem preocupações.',
  'Ofereça parcelamento fácil para seus clientes.',
  'Processamento ágil e seguro com as melhores taxas.',
]

export function CardsSection() {
  return (
    <Section className="py-10 md:py-20 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image - Mobile first */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden lg:order-2"
          >
            <div className="relative w-full max-w-lg md:max-w-2xl mx-auto overflow-visible flex items-center justify-center">
              {/* Círculo azul de fundo */}
              <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-accent rounded-full"></div>

              {/* Imagem de fundo azul */}
              <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-accent rounded-full overflow-hidden">
                <Image
                  src="/images/mobile-app-screen-bg.png"
                  alt="Fundo azul para seção de cartões"
                  fill
                  className="object-cover opacity-30"
                />
              </div>

              <Image
                src="/nova - Imagem - 03.png"
                alt="App no celular mostrando pagamentos recebidos"
                width={500}
                height={600}
                className="relative z-10 drop-shadow-lg rounded-2xl object-contain w-[400px] h-[480px] md:w-[550px] md:h-[660px]"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Cartões para todas as ocasiões
            </h2>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <HiCheckCircle
                    className="text-primary flex-shrink-0 mt-1"
                    size={24}
                  />
                  <span className="text-muted-foreground text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-xl font-semibold text-foreground mb-6">
              Simples, rápido e sem surpresas. Faça parte da Coratri!
            </p>

            <div
              className="mb-8 flex flex-wrap items-center justify-center gap-10 sm:gap-12 lg:justify-start"
              role="img"
              aria-label="Formas de pagamento aceitas: Visa, Mastercard e Pix"
            >
              <SiVisa
                size={72}
                className="shrink-0 text-[#1434CB]"
                aria-hidden
              />
              <div className="flex flex-col items-center gap-0">
                <SiMastercard
                  size={72}
                  className="shrink-0 text-[#EB001B] block leading-none"
                  aria-hidden
                />
                <span className="-mt-1 text-center text-[0.65rem] font-semibold lowercase leading-none tracking-tight text-foreground sm:text-xs sm:-mt-1.5">
                  mastercard
                </span>
              </div>
              <SiPix
                size={72}
                className="shrink-0 text-[#32BCAD]"
                aria-hidden
              />
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link href="#contato">
                <Button variant="primary" size="lg">
                  Saiba mais
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
