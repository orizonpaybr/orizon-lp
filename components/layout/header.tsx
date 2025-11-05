'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import { Container } from '../ui/container';
import { Button } from '../ui/button';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'O que fazemos?', href: '#o-que-fazemos' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Ouvidoria', href: '/ouvidoria' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Função para ajustar o href baseado na rota atual
  const getHref = (href: string) => {
    // Se o href começa com # e não estamos na página inicial, redireciona para /#hash
    if (href.startsWith('#') && pathname !== '/') {
      return `/${href}`;
    }
    return href;
  };

  // Função para lidar com o clique e scroll
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Se estivermos em outra página e o link é para uma seção da página inicial
    if (href.startsWith('#') && pathname !== '/') {
      e.preventDefault();
      // Navega para a página inicial com o hash
      router.push(`/${href}`);
    }
    // Se já estivermos na página inicial, deixa o comportamento padrão do Link funcionar
    // (o scroll suave já está configurado no HTML)
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/orizon-logo.png" 
              alt="Orizon" 
              width={420} 
              height={150}
              priority
              className="object-contain h-28 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={getHref(item.href)}
                onClick={(e) => handleSectionClick(e, item.href)}
                className="text-dark hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              href={getHref('#contato')}
              onClick={(e) => handleSectionClick(e, '#contato')}
            >
              <Button variant="primary" size="md">
                Seja Cliente
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-dark p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={getHref(item.href)}
                  onClick={(e) => {
                    handleSectionClick(e, item.href);
                    setIsMenuOpen(false);
                  }}
                  className="text-dark hover:text-primary transition-colors font-medium py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href={getHref('#contato')} 
                onClick={(e) => {
                  handleSectionClick(e, '#contato');
                  setIsMenuOpen(false);
                }}
              >
                <Button variant="primary" size="md" className="mt-2 w-full">
                  Seja Cliente
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}

