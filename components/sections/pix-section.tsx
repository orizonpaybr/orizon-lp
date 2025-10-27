'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import { Button } from '../ui/button';
import Link from 'next/link';

const benefits = [
  'Pagamentos 24h, sem burocracia, direto na sua conta.',
  'Ideal para empresas que precisam de agilidade no fluxo de caixa.',
  'Segurança total: tecnologia antifraude e proteção garantida.',
];

export function PixSection() {
  return (
    <Section id="solucoes" className="py-10 md:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden"
          >
            <div className="relative w-full max-w-sm md:max-w-xl mx-auto overflow-visible flex items-center justify-center">
              {/* Círculo laranja de fundo */}
              <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-accent rounded-full"></div>
              
              {/* Imagem de fundo laranja */}
              <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-accent rounded-full overflow-hidden">
                <Image
                  src="/images/mobile-app-screen-bg.jpg"
                  alt="Fundo laranja para seção PIX"
                  fill
                  className="object-cover opacity-30"
                />
              </div>
              
              {/* Celular */}
              <Image
                src="/images/mockup-pix-2-585x650.webp"
                alt="Celular mostrando notificações de pagamento recebido via PIX"
                width={400}
                height={480}
                className="relative z-10 drop-shadow-lg rounded-2xl translate-y-4 translate-x-4 md:translate-y-8 md:translate-x-12 object-contain w-[300px] h-[360px] md:w-[450px] md:h-[540px]"
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-6">
              PIX Instantâneo: Seu dinheiro em segundos
            </h2>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <HiCheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-base md:text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg md:text-xl font-semibold text-dark mb-6">
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
  );
}

