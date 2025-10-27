'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section } from '../ui/section';

const mediaLogos = [
  { src: '/images/uol-logo.png', alt: 'UOL', width: 120, height: 40 },
  { src: '/images/startupi-logo.png', alt: 'Startupi', width: 140, height: 40 },
  { src: '/images/economia-logo.png', alt: 'Economia', width: 130, height: 40 },
  { src: '/images/ra-logo.svg', alt: 'RA', width: 100, height: 40 },
  { src: '/images/uol-logo.png', alt: 'UOL', width: 120, height: 40 },
  { src: '/images/startupi-logo.png', alt: 'Startupi', width: 140, height: 40 },
  { src: '/images/economia-logo.png', alt: 'Economia', width: 130, height: 40 },
  { src: '/images/ra-logo.svg', alt: 'RA', width: 100, height: 40 },
];

export function MediaSection() {
  return (
    <Section className="py-10 md:py-20 bg-white w-full">
      <div className="w-full px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Orizon na mídia
          </h2>
        </motion.div>

        <div className="relative overflow-hidden w-full">
          <div className="flex items-center animate-scroll">
            {/* Primeira linha de logos */}
            {mediaLogos.map((logo, index) => (
              <div
                key={`first-${logo.alt}-${index}`}
                className="shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
                style={{ width: '200px', display: 'flex', justifyContent: 'center' }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
            {/* Segunda linha de logos (duplicada para efeito contínuo) */}
            {mediaLogos.map((logo, index) => (
              <div
                key={`second-${logo.alt}-${index}`}
                className="shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
                style={{ width: '200px', display: 'flex', justifyContent: 'center' }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 12s linear infinite;
          }
        }
      `}</style>
    </Section>
  );
}

