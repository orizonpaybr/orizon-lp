'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import { Button } from '../ui/button';
import Link from 'next/link';

const benefits = [
  'Pagamentos rápidos, sem sair do seu site ou app.',
  'Redução no abandono de carrinho e mais conversões.',
  'Integração simples e rápida com a sua plataforma.',
];

export function CheckoutSection() {
  return (
    <Section className="pb-10 md:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden"
          >
            <div className="relative w-full max-w-2xl flex items-center justify-center">
              {/* Arco com check */}
              <div className="absolute z-0">
                <Image
                  src="/images/arco-check.png"
                  alt="Check de aprovação"
                  width={500}
                  height={600}
                  className="drop-shadow-lg"
                />
              </div>
              
              {/* Mockup do celular */}
              <div className="relative z-10 mt-48">
                <Image
                  src="/images/checkout2.png"
                  alt="Interface de checkout transparente em dispositivo móvel"
                  width={500}
                  height={750}
                  className="drop-shadow-2xl"
                />
              </div>
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Checkout Transparente: Experiência sem atrito
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
              Menos cliques, mais vendas. Adote agora!
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

