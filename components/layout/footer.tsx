'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Container } from '../ui/container';

export function Footer() {
  useEffect(() => {
    // Verifica se o script já foi carregado
    if (document.getElementById('ra-embed-verified-seal')) {
      return;
    }

    // Cria e adiciona o script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'ra-embed-verified-seal';
    script.src = 'https://s3.amazonaws.com/raichu-beta/ra-verified/bundle.js';
    script.setAttribute('data-id', 'S0FUTWgtOEZHdnpOaUFJZjpvcml6b24tcGF5LWluc3RpdHVpY2FvLWRlLXBhZ2FtZW50by1sdGRh');
    script.setAttribute('data-target', 'ra-verified-seal');
    script.setAttribute('data-model', 'horizontal_1');
    document.body.appendChild(script);

    return () => {
      // Limpa o script quando o componente desmontar
      const scriptElement = document.getElementById('ra-embed-verified-seal');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []);

  return (
    <footer className="bg-dark text-white relative overflow-hidden">

      {/* Top Banner */}
      <div className="bg-accent py-4 relative z-10">
        <Container>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <p className="text-center text-sm font-medium">
              Orizon é uma empresa autorizada pelo BACEN - Banco Central do Brasil
            </p>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <div className="py-16 relative z-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Orizon
                </h3>
                <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">Orizon pay instituição de pagamento Ltda</span>
                </p>
                <p className="text-sm text-gray-300">CNPJ: 63.095.227/0001-88</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Avenida - PREF OSMAR CUNHA, 416<br />
                  Centro, Florianópolis, SC<br />
                  CEP: 88.015-100
                </p>
              </div>
            </div>

            {/* Menu */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Menu</h4>
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="#inicio" 
                    className="text-sm text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#o-que-fazemos" 
                    className="text-sm text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    O que fazemos?
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#solucoes" 
                    className="text-sm text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Soluções
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/termos" 
                    className="text-sm text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/privacidade" 
                    className="text-sm text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>

            {/* Ouvidoria */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Ouvidoria</h4>
              <div className="space-y-4">
                <Link 
                  href="/ouvidoria" 
                  className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-accent transition-all duration-300 group"
                >
                  <FaEnvelope className="group-hover:scale-110 transition-transform" />
                  Abrir uma Reclamação
                </Link>
                
                <div className="mt-6">
                  <a
                    href="https://www.reclameaqui.com.br/empresa/orizon-pay-instituicao-de-pagamento-ltda/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div id="ra-verified-seal"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media & Contact */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Contato</h4>
              <div className="space-y-6">
                {/* Social Media */}
                <div>
                  <h5 className="text-sm font-semibold mb-4 text-gray-300">Redes Sociais</h5>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61581862817153"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 group"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="text-primary group-hover:text-white" />
                    </a>
                    <a
                      href="https://www.instagram.com/orizon.pay?igsh=MTQ0N3IycXpsbWhtdg%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 group"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="text-primary group-hover:text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/orizon-pay-instituicao-de-pagamento-ltda/?viewAsMember=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 group"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-primary group-hover:text-white" />
                    </a>
                  </div>
                </div>

                {/* Contact Emails */}
                <div>
                  <h5 className="text-sm font-semibold mb-3 text-gray-300">E-mail</h5>
                  <div className="space-y-2">
                    <a 
                      href="mailto:sac@orizonpay.io"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent transition-colors group"
                    >
                      <FaEnvelope className="text-xs group-hover:scale-110 transition-transform" />
                      sac@orizonpay.io
                    </a>
                    <a 
                      href="mailto:comercial@orizonpay.io"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent transition-colors group"
                    >
                      <FaEnvelope className="text-xs group-hover:scale-110 transition-transform" />
                      comercial@orizonpay.io
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-primary py-6 relative z-10">
        <Container>
          <div className="flex items-center justify-center">
            <p className="text-sm text-white text-center">
              Orizon pay instituição de pagamento Ltda © {new Date().getFullYear()}. Todos os direitos reservados.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}


