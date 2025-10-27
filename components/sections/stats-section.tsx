'use client';

import { motion, useInView } from 'framer-motion';
import { HiCurrencyDollar, HiTrendingUp, HiLightningBolt } from 'react-icons/hi';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const stats = [
  {
    icon: <HiCurrencyDollar size={48} />,
    value: 20,
    suffix: 'B',
    prefix: '+ R$ ',
    label: 'transacionados',
  },
  {
    icon: <HiTrendingUp size={48} />,
    value: 15,
    suffix: 'M',
    prefix: '+',
    label: 'transacionados por dia',
  },
  {
    icon: <HiLightningBolt size={48} />,
    value: 99.9,
    suffix: '%',
    prefix: '',
    label: 'de uptime',
  },
];

// Componente para animação de contagem
function CountUp({ end, duration = 2, prefix = '', suffix = '' }: { 
  end: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string; 
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(progress * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(count % 1 === 0 ? 0 : 1)}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <Section className="py-10 bg-dark text-white">
      <Container>
        {/* Top Section - Title and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Números que comprovam nossa <span className="text-accent">força</span>
            </h2>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden flex items-center justify-center"
          >
            <Image
              src="/images/foto-pessoa.png"
              alt="Pessoa usando smartphone"
              width={800}
              height={1000}
              className="drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-dark">
                    {stat.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-4xl font-bold text-white mb-2">
                    <CountUp 
                      end={stat.value} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </p>
                  <p className="text-white/80 text-lg">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xl">
            <strong className="text-accent">Orizon</strong> A escolha inteligente para empresas que não podem parar.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}

