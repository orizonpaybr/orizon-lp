'use client';

import { motion } from 'framer-motion';
import { 
  MdAccountBalanceWallet, 
  MdCreditCard, 
  MdLink, 
  MdShoppingCart 
} from 'react-icons/md';
import { Container } from '../ui/container';
import { Section } from '../ui/section';

const features = [
  {
    icon: <MdAccountBalanceWallet size={48} />,
    title: 'PIX instantâneo',
    description: 'Seu dinheiro cai na hora, sem complicação.',
  },
  {
    icon: <MdCreditCard size={48} />,
    title: 'Cartões sem barreiras',
    description: 'Crédito, débito, recorrência e muito mais.',
  },
  {
    icon: <MdLink size={48} />,
    title: 'Link de pagamento',
    description: 'Vendeu? Basta um link para receber!',
  },
  {
    icon: <MdShoppingCart size={48} />,
    title: 'Checkout transparente',
    description: 'Sem redirecionamentos, sem fricção.',
  },
];

export function FeaturesSection() {
  return (
    <Section id="o-que-fazemos" className="py-10 md:py-20 bg-gradient-to-br from-accent to-accent-hover">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              O que fazemos?
            </h2>
            <p className="text-white/90 text-lg">
              Conectamos sua empresa ao que há de mais moderno em pagamentos:
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-accent mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

