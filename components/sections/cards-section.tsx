'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import { Button } from '../ui/button';
import Link from 'next/link';

const benefits = [
  'Aceite crédito, débito e recorrência sem preocupações.',
  'Ofereça parcelamento fácil para seus clientes.',
  'Processamento ágil e seguro com as melhores taxas.',
];


export function CardsSection() {
  return (
    <Section className="py-10 md:py-20 bg-gray-light">
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
              {/* Círculo laranja de fundo */}
              <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-accent rounded-full"></div>
              
              {/* Imagem de fundo laranja */}
              <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-accent rounded-full overflow-hidden">
                <Image
                  src="/images/mobile-app-screen-bg.jpg"
                  alt="Fundo laranja para seção de cartões"
                  fill
                  className="object-cover opacity-30"
                />
              </div>
              
              {/* Mockup do celular */}
              <Image
                src="/images/cartao-copiar.png"
                alt="App no celular mostrando pagamentos recebidos"
                width={500}
                height={600}
                className="relative z-10 drop-shadow-lg rounded-2xl translate-y-4 -translate-x-2 md:translate-y-8 md:-translate-x-4 object-contain w-[400px] h-[480px] md:w-[550px] md:h-[660px]"
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Cartões para todas as ocasiões
            </h2>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <HiCheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-xl font-semibold text-dark mb-6">
              Simples, rápido e sem surpresas. Faça parte da Orizon!
            </p>

            {/* Card Brands */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <Image
                src="/images/bandeiras-300x234.png"
                alt="Bandeiras de cartões de crédito e débito"
                width={250}
                height={195}
                className="drop-shadow-lg"
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
  );
}

