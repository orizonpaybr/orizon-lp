'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';

export function HeroSection() {
  return (
    <Section id="inicio" className="pt-32 bg-gray-light min-h-[600px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-12">
              O <span className="text-accent">Futuro</span> dos Pagamentos para Empresas
            </h1>
            
            <div className="space-y-4 text-lg text-gray-700 mb-8">
              <p>
                Seja no PIX, no cartão ou no link de pagamento, a{' '}
                <strong className="text-primary">Orizon</strong> é a solução que faz
                seu dinheiro girar mais rápido e com mais segurança.
              </p>
              <p>
                São <strong className="text-dark">R$ 20 bilhões já transacionados</strong>{' '}
                para nossos clientes.
              </p>
            </div>

            <p className="text-2xl font-semibold text-dark">
              Agora é a sua vez de crescer!
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[470px] md:h-[600px] lg:h-[700px] overflow-hidden"
          >
            <Image
              src="/images/banner-foto-inicial.png"
              alt="Mulher feliz recebendo notificações de pagamento"
              fill
              className="object-contain scale-125"
              priority
            />
            
            {/* Notification Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.8,
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute bottom-24 left-8 md:top-16 md:left-8 w-[280px] md:w-[280px]"
            >
              <Image
                src="/images/note-recebido.png"
                alt="Notificação de pagamento recebido"
                width={280}
                height={120}
                className="drop-shadow-lg"
              />
            </motion.div>

            {/* Notification Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -8, 0]
              }}
              transition={{ 
                duration: 0.5, 
                delay: 1,
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute bottom-2 left-8 md:bottom-24 md:left-12 w-[280px] md:w-[280px]"
            >
              <Image
                src="/images/note-recebido-2.png"
                alt="Notificação de pagamento recebido"
                width={280}
                height={120}
                className="drop-shadow-lg"
              />
            </motion.div>

            {/* Bell Notification Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 0.5, 
                delay: 1.2,
                scale: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute top-8 right-16 w-12 h-12"
            >
              <Image
                src="/images/notification.png"
                alt="Ícone de notificação"
                width={48}
                height={48}
                className="drop-shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

