'use client'

import { motion, useInView } from 'framer-motion'
import { HiCurrencyDollar, HiTrendingUp, HiLightningBolt } from 'react-icons/hi'
import { Container } from '../ui/container'
import { Section } from '../ui/section'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

const stats = [
  {
    icon: <HiCurrencyDollar size={48} />,
    value: 8.9,
    suffix: ' bilhões',
    prefix: 'R$ ',
    label: 'transacionados',
  },
  {
    icon: <HiTrendingUp size={48} />,
    value: 2.6,
    suffix: ' milhões',
    prefix: '',
    label: 'transações por dia',
  },
  {
    icon: <HiLightningBolt size={48} />,
    value: 98.9,
    suffix: '%',
    prefix: '',
    label: 'de uptime',
  },
]

// Componente para animação de contagem
function CountUp({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
}: {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1,
      )

      setCount(progress * end)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, end, duration])

  const formatted = count
    .toFixed(count % 1 === 0 ? 0 : 1)
    .replace('.', ',')

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <Section className="py-10 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Números que comprovam nossa{' '}
              <span className="text-[#a0a0a0]">força</span>
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
              src="/images/Elemento - Pessoa 04.png"
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
              className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-8 hover:bg-[#222222] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#a0a0a0] rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-[#171717]">{stat.icon}</div>
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
                  <p className="text-[#c0c0c0] text-lg">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xl text-[#c0c0c0]">
            <strong className="text-white">Coratri</strong> A escolha
            inteligente para empresas que não podem parar.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
