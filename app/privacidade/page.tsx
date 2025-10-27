import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export const metadata = {
  title: "Política de Privacidade - Orizon",
  description: "Política de privacidade da plataforma Orizon",
};

export default function PrivacidadePage() {
  return (
    <div className="pt-20">
      <Section className="bg-gray-light py-16 md:py-24">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors mb-8"
          >
            <HiArrowLeft size={20} />
            Voltar para o início
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">
            Política de Privacidade
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">1. Coleta de Informações</h2>
              <p className="text-gray-700 leading-relaxed">
                A Orizon coleta informações necessárias para o fornecimento de nossos serviços,
                incluindo dados pessoais, comerciais e de transações financeiras. Todos os dados
                são coletados de forma transparente e com o consentimento do usuário.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">2. Tipos de Dados Coletados</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Dados cadastrais (nome, CPF/CNPJ, endereço, telefone, e-mail)</li>
                <li>Dados bancários e financeiros</li>
                <li>Dados de transações e pagamentos</li>
                <li>Dados de navegação e uso da plataforma</li>
                <li>Logs de acesso e informações técnicas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">3. Uso das Informações</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As informações coletadas são utilizadas para:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Processar pagamentos e transações</li>
                <li>Verificar identidade e prevenir fraudes</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
                <li>Enviar comunicações relevantes sobre os serviços</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">4. Compartilhamento de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                A Orizon não vende, aluga ou comercializa seus dados pessoais. Podemos
                compartilhar informações apenas com:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                <li>Instituições financeiras parceiras para processamento de pagamentos</li>
                <li>Prestadores de serviços terceirizados sob acordo de confidencialidade</li>
                <li>Autoridades governamentais quando exigido por lei</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">5. Segurança dos Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais para proteger seus
                dados contra acesso não autorizado, perda, destruição ou alteração. Utilizamos
                criptografia, firewalls e sistemas de monitoramento contínuo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">6. Seus Direitos (LGPD)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Confirmação da existência de tratamento de dados</li>
                <li>Acesso aos seus dados pessoais</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Portabilidade dos dados</li>
                <li>Revogação do consentimento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">7. Cookies e Tecnologias Similares</h2>
              <p className="text-gray-700 leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar a experiência de
                navegação, analisar o uso da plataforma e personalizar conteúdo. Você pode
                gerenciar as preferências de cookies nas configurações do seu navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">8. Retenção de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades
                para as quais foram coletados, incluindo requisitos legais, contábeis ou de
                relatórios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">9. Alterações na Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Esta política de privacidade pode ser atualizada periodicamente. Notificaremos
                sobre mudanças significativas através da plataforma ou por e-mail.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">10. Contato - DPO</h2>
              <p className="text-gray-700 leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em
                contato com nosso Encarregado de Proteção de Dados (DPO) através dos canais
                disponíveis em nosso site.
              </p>
            </section>

            <div className="mt-12 p-6 bg-gray-light rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Orizon - Prototype Instituição de Pagamento S.A.</strong>
                <br />
                CNPJ: 35.713.491/0001-00
                <br />
                Autorizada pelo Banco Central do Brasil
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}


