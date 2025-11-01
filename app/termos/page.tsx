import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export const metadata = {
  title: "Termos de Uso - Orizon",
  description: "Termos de uso da plataforma Orizon",
};

export default function TermosPage() {
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

          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Termos de Uso
          </h1>

          <p className="text-gray-600 mb-8">
            Última atualização: 19/09/2024
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose max-w-none">
            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Bem-vindo à Orizon Pay!
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ao utilizar o aplicativo da Orizon Pay, você concorda com os termos e condições descritos abaixo. Por favor, leia atentamente este documento, pois ele define os direitos e responsabilidades de ambas as partes.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">1. Definições</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>&quot;Orizon Pay&quot;:</strong> Refere-se à Orizon Pay, sua instituição de pagamento, que oferece serviços de transações financeiras através deste aplicativo.</li>
                <li><strong>&quot;Usuário&quot;:</strong> Qualquer pessoa que utilize o aplicativo da Orizon Pay.</li>
                <li><strong>&quot;Aplicativo&quot;:</strong> Refere-se ao software de propriedade da Orizon Pay disponibilizado para os usuários em dispositivos móveis.</li>
                <li><strong>&quot;Serviços&quot;:</strong> Todas as funcionalidades oferecidas pela Orizon Pay por meio do aplicativo, incluindo, mas não se limitando a transferências, pagamentos e consultas de saldo.</li>
              </ul>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">2. Aceitação dos Termos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Ao instalar, acessar ou utilizar o aplicativo Orizon Pay, você concorda com estes Termos de Uso.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                A Orizon Pay reserva-se o direito de modificar os Termos de Uso a qualquer momento, sendo responsabilidade do usuário revisá-los periodicamente.
              </p>
              <p className="text-gray-700 leading-relaxed">
                O uso contínuo do aplicativo após alterações implica na aceitação dos novos termos.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">3. Serviços Oferecidos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                A Orizon Pay fornece serviços financeiros digitais, incluindo:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li>Realização de transferências e pagamentos.</li>
                <li>Consulta de saldos e extratos.</li>
                <li>Transações por meio de Pix e outros meios de pagamento disponíveis.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Os serviços podem ser expandidos ou modificados a critério exclusivo da Orizon Pay.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">4. Cadastro e Responsabilidades do Usuário</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Para acessar os serviços da Orizon Pay, o usuário deverá criar uma conta e fornecer informações precisas e completas. O usuário compromete-se a:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li>Manter suas informações de cadastro atualizadas.</li>
                <li>Proteger suas credenciais de acesso (login e senha) e não compartilhá-las com terceiros.</li>
                <li>Notificar a Orizon Pay imediatamente em caso de qualquer uso não autorizado de sua conta.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                A Orizon Pay não se responsabiliza por perdas ou danos resultantes de falhas na proteção das credenciais do usuário.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">5. Uso Permitido e Proibições</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                O usuário concorda em utilizar o aplicativo exclusivamente para os fins permitidos por lei e de acordo com estes Termos de Uso.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                O uso do aplicativo é estritamente proibido para:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li>Qualquer atividade ilegal ou fraudulenta.</li>
                <li>Tentar burlar, hackear ou explorar vulnerabilidades do sistema da Orizon Pay.</li>
                <li>Reverter a engenharia do software ou explorar indevidamente o conteúdo do aplicativo.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                A Orizon Pay se reserva o direito de suspender ou encerrar a conta de usuários que violarem estas proibições.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">6. Privacidade e Proteção de Dados</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                A Orizon Pay está comprometida com a proteção de seus dados pessoais.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Nossa Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos as informações dos usuários, de acordo com a Lei Geral de Proteção de Dados (LGPD).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ao utilizar o aplicativo, você concorda com o processamento de seus dados conforme descrito em nossa Política de Privacidade.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">7. Tarifas e Encargos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                O uso de determinados serviços oferecidos pela Orizon Pay pode estar sujeito a tarifas ou encargos, que serão comunicados ao usuário no momento da transação ou de forma antecipada.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A Orizon Pay reserva-se o direito de alterar as tarifas a qualquer momento, mediante notificação prévia aos usuários.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">8. Limitações de Responsabilidade</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                A Orizon Pay se empenha em fornecer um serviço seguro e contínuo. No entanto, a empresa não se responsabiliza por:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li>Indisponibilidade temporária do aplicativo devido a manutenção, atualizações ou falhas técnicas.</li>
                <li>Perdas financeiras decorrentes de falhas no serviço, exceto quando decorrentes de conduta dolosa por parte da Orizon Pay.</li>
                <li>Erros ou omissões em informações fornecidas por terceiros.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                A Orizon Pay não se responsabiliza por perdas de dados, ganhos cessantes ou outros danos indiretos causados pelo uso ou incapacidade de uso do aplicativo.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">9. Suspensão e Cancelamento de Serviços</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                A Orizon Pay reserva-se o direito de suspender temporariamente ou cancelar de forma permanente os serviços de um usuário, a seu exclusivo critério, nas seguintes situações:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li>Violação dos Termos de Uso.</li>
                <li>Suspeita de fraude, uso indevido ou atividades ilícitas.</li>
                <li>Manutenções programadas ou imprevistas no sistema.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Os usuários serão notificados, sempre que possível, sobre suspensões planejadas ou cancelamentos de conta.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">10. Alterações no Aplicativo</h2>
              <p className="text-gray-700 leading-relaxed">
                A Orizon Pay pode, a qualquer momento, modificar, suspender ou descontinuar qualquer funcionalidade do aplicativo, com ou sem aviso prévio aos usuários.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Não nos responsabilizamos por perdas decorrentes de tais modificações ou descontinuações.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">11. Propriedade Intelectual</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Todos os direitos relativos ao aplicativo Orizon Pay, incluindo, mas não se limitando a, seu código-fonte, design, logotipos e conteúdo, são de propriedade exclusiva da Orizon Pay.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                O uso do aplicativo não concede ao usuário qualquer direito sobre a propriedade intelectual da empresa.
              </p>
              <p className="text-gray-700 leading-relaxed">
                É proibido reproduzir, distribuir ou modificar qualquer parte do aplicativo sem autorização prévia da Orizon Pay.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">12. Legislação Aplicável e Foro</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Estes Termos de Uso são regidos pela legislação brasileira.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Qualquer disputa relacionada a estes termos será resolvida no foro da comarca de São Paulo, SP, com exclusão de qualquer outro, por mais privilegiado que seja.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Contato</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Em caso de dúvidas sobre estes Termos de Uso ou sobre o aplicativo, entre em contato conosco pelo e-mail:
              </p>
              <p className="text-gray-700 leading-relaxed">
                📧 <a href="mailto:sac@orizonpayoficial.com" className="text-primary hover:text-primary-hover">sac@orizonpayoficial.com</a>
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </div>
  );
}
