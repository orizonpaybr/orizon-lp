'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import { Button } from '../ui/button';
import Link from 'next/link';

const benefits = [
  'Envie pelo WhatsApp, Instagram ou e-mail.',
  'Sem necessidade de site ou maquininha.',
  'Parcelamento no cartão direto pelo link.',
];

export function PaymentLinkSection() {
  return (
    <Section className="py-10 md:py-20 bg-gray-light">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">
              Link de Pagamento: Vendeu? Recebeu!
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
              Fature mais sem limites. Comece agora!
            </p>

            <Link href="#contato">
              <Button variant="primary" size="lg">
                Saiba mais
              </Button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden"
          >
            <Image
              src="/images/link-pagamentos-2.png"
              alt="Interface de link de pagamento no celular"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

